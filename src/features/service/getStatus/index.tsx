import AxiosInstance from "../../api/axiosInstance"

const axiosInstance = AxiosInstance()

const getCaptures = async () => {
    try {
        const res = axiosInstance.get(`/captures`)
        return res
    } catch (err){
        console.log(err)
    }
}

export {getCaptures};