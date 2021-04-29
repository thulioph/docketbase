const removeEmptyData = (transcriptions) => {
    return transcriptions.filter((obj) => {
        return obj.content && obj.content.filter((el) => (
            el.data && el.data.length > 0
        )).length > 0
    })
}

export const formatTranscription = (data) => {
    return data.map(({ metadata, transcription }) => ({
        metadata,
        transcription: removeEmptyData(transcription)
    }))
}

export const sortBy = (array, property) => {
    return array.sort((a, b) => b[property] - a[property])
}