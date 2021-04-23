import path from 'path'
import { readFileSync, readdirSync } from 'fs'
import moment from 'moment'

const formatDateToDisplay = (date) => {
    return moment(new Date(date)).format('ll')
}

const filterFiles = (fileName, extension) => {
    return fileName && fileName.includes(extension)
}

const extractDataFromFileName = (fileName) => {
    const fullName = fileName.split('.json')[0]

    const date = fullName.slice(0, 8)
    const summary = fullName.slice(9, fullName.length).replace(/-/g, ' ')

    return {
        summary,
        date,
        readableDate: formatDateToDisplay(date)
    }
}

const getFilesByDir = (dir) => {
    const allFiles = []
    const files = readdirSync(dir)

    files.forEach((fileName) => {
        const isValidFile = filterFiles(fileName, '.json')

        if (isValidFile) {
            const filePath = path.resolve(dir, fileName)
            const metadata = extractDataFromFileName(fileName)

            allFiles.push({ filePath, metadata })
        }
    })

    return allFiles
}

export const readJSONFiles = () => {
    const allData = []
    const files = getFilesByDir('public/transcriptions')

    files.forEach(({ filePath, metadata }) => {
        const file = readFileSync(filePath, 'utf-8')
        const { pages } = JSON.parse(file)

        allData.push({ transcription: pages, metadata })
    })

    return allData
}
