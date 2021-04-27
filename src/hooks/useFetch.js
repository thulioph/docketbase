import { useState, useEffect } from 'react'

const getApiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    }

    return 'http://localhost:3000' // replace it to your external API
}

const removeEmptyData = (transcriptions) => {
    return transcriptions.filter((obj) => {
        return obj.content && obj.content.filter((el) => (
            el.data && el.data.length > 0
        )).length > 0
    })
}

const formatTranscription = (data) => {
    return data.map(({ metadata, transcription }) => ({
        metadata,
        transcription: removeEmptyData(transcription)
    }))
}

const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            const response = await fetch(`${getApiUrl()}/api/files`)
            const result = await response.json()
            const resultFormatted = formatTranscription(result.data)

            setData(resultFormatted)
            setLoading(false)
        }

        fetchData()
    }, [])

    return { loading, data }
}

export default useFetch