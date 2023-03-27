import { useEffect, useState } from "react"
export const useFecth = (url) => {


    const [state, setState] = useState({
        data: null,
        isoLading: true,
        hasError: null
    })

    const getUrl = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json();


        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    /* Escuchar cada vez que se usa o llama a url */
    useEffect(() => {
        getUrl()
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
