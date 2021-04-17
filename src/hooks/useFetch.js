import { useState, useEffect } from 'react'

const getApiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000'
    }

    return 'http://localhost:3000' // replace it to your external API
}

const useFetch = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            const response = await fetch(`${getApiUrl()}/api/files`)
            const result = await response.json()

            setData(result.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    return { loading, data }
}

export default useFetch