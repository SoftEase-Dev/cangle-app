import axios from "axios";

const AxiosInstance = () => {
    const res = axios.create({
        baseURL: 'http://193.203.164.177:1337/api/',
        headers: {
            'Content-Type': 'multipart/mixed',
        }
    })

    return res
}

export default AxiosInstance;