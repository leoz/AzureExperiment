
//
//
import axios from "axios";
import { graphConfig } from "../authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */

export async function callMsGraph(token) {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const { data } = await axios.get(graphConfig.endpoint, config)
    return data
}
