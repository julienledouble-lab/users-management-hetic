import { getUsers } from "./user.service.js";
import { json } from "../utils/responses.js";


export function listUsers(req, res) {
    if (req.method !== 'GET') {
        return json (res, 405, {
            message: 'Method not allowed'
        });
    }

    const users = getUsers();
    return json (res, 200, {data : users});
}