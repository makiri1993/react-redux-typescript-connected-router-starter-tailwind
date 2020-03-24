import DefaultAxios, { AxiosInstance } from "axios"

enum APIEndpointName {
    dummy = "dummy"
}

type APIEndpointConfig<T> = { [key in APIEndpointName]: T }

export interface APIEndpointInfo {
    url: string
}

interface APIEndpointFnArgs {
    [arg: string]: any
}

type APIRouteFn<T extends APIEndpointFnArgs> = (args: T) => APIEndpointInfo

interface APIEndpoints extends APIEndpointConfig<APIRouteFn<any>> {
    dummy: APIRouteFn<{ id: string }>
}

export const apiEndpoints: APIEndpoints = Object.freeze({
    dummy: ({ id }): APIEndpointInfo => ({
        url: `/dummy/${id}`
    })
})

type CustomAxiosReturn = (config: {}) => AxiosInstance

const customAxios = (): CustomAxiosReturn => {
    const axiosInstance = DefaultAxios.create({
        headers: {}
    })

    return config => {
        return axiosInstance
    }
}

export const axios = customAxios()
