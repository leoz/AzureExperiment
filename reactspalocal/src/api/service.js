
//
//
import axios from "axios";
import { serviceConfig } from "../authConfig";

export async function calMyService(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const { data } = await axios.get(serviceConfig.endpoint, config)
    return data
}
