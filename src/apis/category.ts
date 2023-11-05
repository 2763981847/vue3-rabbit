import axios from "@/utils/request";
import type {Category, Response} from "@/types";

export function getCategoryById(id: string): Promise<Response<Category>> {
    return axios.get('/category', {
        params: {
            id
        }
    })
}
