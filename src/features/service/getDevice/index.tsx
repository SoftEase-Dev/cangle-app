import AxiosInstance from "../../api/axiosInstance"

const axiosInstance = AxiosInstance()

const getDevice = async () => {
    try {
        const res = axiosInstance.get(`/device-status`)
        return res
    } catch (err){
        console.log(err)
    }
}

export {getDevice};