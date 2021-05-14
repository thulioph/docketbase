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

export const breakStringByQuestionsAndAnswers = (string) => {
    const questionOrAnswerRegex = /([\s*$]+[Q||A]+[\s*$])/g
    return string.replace(questionOrAnswerRegex, "</br></br><span>$1</span>").replace(/^,/, "")
}

export const breakStringByCourt = (string) => {
    const courtRegex = /\b(THE COURT)\b/g
    return string.replace(courtRegex, "</br></br><span>$1</span>").replace(/^,/, "")
}

export const breakStringByMsPenza = (string) => {
    const msPenzaRegex = /\b(MS. PENZA)\b/g
    return string.replace(msPenzaRegex, "</br></br><span>$1</span>").replace(/^,/, "")
}
