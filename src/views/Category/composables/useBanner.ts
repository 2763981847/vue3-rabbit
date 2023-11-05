import {onMounted, ref} from "vue";
import type {Banner} from "@/types";
import {getBanner} from "@/apis/home";

export function useBanner() {
    const bannerList = ref<Banner[]>([])
    const refreshBanner = async () => {
        const res = await getBanner(2)
        bannerList.value = res.result
    }
    onMounted(() => {
        refreshBanner()
    })
    return {bannerList}
}
