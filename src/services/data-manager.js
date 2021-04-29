import { readJSONFiles } from 'src/services/file-manager'
import { formatTranscription, sortBy } from 'src/utils'

export const getFiles = () => {
    try {
        const files = readJSONFiles()
        const formatted = formatTranscription(files)
        const sortedByPageNumber = sortBy(formatted, 'page_number')
        return sortedByPageNumber
    } catch (error) {
        console.error('Houston, we have a problem!', error)
    }
}