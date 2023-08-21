import {User} from "./interfaces/user"
import axios from "axios"
import {BASE_API_PATH} from "./interfaces/common"

const baseUrl = `${BASE_API_PATH}/user`

const fetchUserProfile = async (): Promise<User | null> => {
    try {
        const resp = await axios.get<User>(baseUrl)
        return resp.data
    } catch (error) {
        console.error(error)
        return null
    }
}

export default {
    fetchUserProfile
}
