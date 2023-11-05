import axios from "@/utils/request";
import type {Banner, Category, Good, Hot, Response} from "@/types";

export function getBanner(distributionSite?: number = 1): Promise<Response<Banner[]>> {
    return axios.get('/home/banner', {
        params: {
            distributionSite
        }
    })
}

export function listNews(limit?: number = 4): Promise<Response<Good[]>> {
    return axios.get('/home/new', {
        params: {
            limit
        }
    })
}

export function listHots(): Promise<Response<Hot[]>> {
    return axios.get('/home/hot')
}

export function listGoods(): Promise<Response<Category[]>> {
    return axios.get('/home/goods')
}

