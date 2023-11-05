import {onMounted, ref} from "vue";
import type {Category} from "@/types";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryById} from "@/apis/category";

export function useCategory() {
    const category = ref<Category>({})

    const route = useRoute();
    const refreshCategory = async (id?: string = route.params.id) => {
        const res = await getCategoryById(id)
        category.value = res.result
    }
    onBeforeRouteUpdate((to) => {
        refreshCategory(to.params.id)
    })
    onMounted(() => {
        refreshCategory()
    })
    return {category}
}
