import { dev } from "../../../types/deviceType"
import AxiosInstance from "../../api/axiosInstance"

const axiosInstance = AxiosInstance()

const postDevice = async (data: dev) => {
    try {
        const res = axiosInstance.post(`/device-status`, {
            up: data.data.attributes.up,
            down: data.data.attributes.down,
            backward: data.data.attributes.backward,
            forward: data.data.attributes.forward,
            left: data.data.attributes.left,
            right: data.data.attributes.right,
        })
        return res
    } catch (err){
        console.log(err)
    }
}

export {postDevice};