import axios from "axios";

const AxiosInstance = () => {
    const res = axios.create({
        baseURL: 'https://cangle.venuus.id/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 40dc8594cc9014dbbcd8b35546e5bf41bae4482278f1e3be871cf2dcc626dc3d17c976bb3499bccac5bd3d3095e008a9a59e312a2c17f496d53b3ef585b323c5335b0e7a31d7c926fe910abca1495a387f53158822087fb3983280e61aac9d53a2182cb641bc44e234fcef9e5a9682ac4cabdac4c3884f632d11c748ef26ca9d`
        }
    })

    return res
}

export default AxiosInstance;