import axios from "@/utils/request";
import type {Category, Response} from "@/types";

export function listCategories(): Promise<Response<Category[]>> {
    return axios.get('/home/category/head')
}
