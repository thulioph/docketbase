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

const breakStringByRegex = (string, regex) => {
    return string.replace(regex, "</br></br><span>$1</span>").replace(/^,/, "")
}

const breakStringByQuestionsAndAnswers = (string) => {
    const questionOrAnswerRegex = /([\s*$]+[Q||A]+[\s*$])/g
    return breakStringByRegex(string, questionOrAnswerRegex)
}

const breakStringByCourt = (string) => {
    const courtRegex = /\b(THE COURT)\b/g
    return breakStringByRegex(string, courtRegex)
}

const breakStringByMsPenza = (string) => {
    const msPenzaRegex = /\b(MS. PENZA)\b/g
    return breakStringByRegex(string, msPenzaRegex)
}

const breakStringByTheWitness = (string) => {
    const theWitnessRegex = /\b(THE WITNESS)\b/g
    return breakStringByRegex(string, theWitnessRegex)
}

export const renderString = (content) => {
    const data = content.map(({ data }) => data)
    const dataString = data.join(" ")

    const str1 = breakStringByQuestionsAndAnswers(dataString)
    const str2 = breakStringByCourt(str1)
    const str3 = breakStringByMsPenza(str2)
    const str4 = breakStringByTheWitness(str3)

    return str4
}