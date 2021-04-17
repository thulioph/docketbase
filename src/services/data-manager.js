import { readJSONFiles } from 'src/services/file-manager'

const sortBy = (array, property) => array.sort((a, b) => b[property] - a[property])

export const getFiles = () => {
    try {
        const files = readJSONFiles()
        const sortedByPageNumber = sortBy(files, 'page_number')

        return sortedByPageNumber
    } catch (error) {
        console.error('Houston, we have a problem!', error)
    }
}