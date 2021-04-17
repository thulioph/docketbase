import React, { useState } from 'react'
import useFetch from 'src/hooks/useFetch'

const AppDataContext = React.createContext()
const { Consumer, Provider } = AppDataContext

const AppDataProvider = ({ children }) => {
    const [current, setCurrent] = useState(null)
    const { loading, data } = useFetch()

    const updateCurrent = (selectedDate) => {
        const item = data.find(({ metadata }) => metadata.date === selectedDate)
        setCurrent(item)
    }

    const sharedValues = {
        loading,
        data,
        current,
        updateCurrent
    }

    return (
        <React.Fragment>
            <Provider value={sharedValues}>{children}</Provider>
        </React.Fragment>
    )
}

export default AppDataContext

export {
    AppDataProvider,
    Consumer as AppDataConsumer
}