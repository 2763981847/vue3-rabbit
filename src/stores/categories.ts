import {ref} from 'vue'
import {defineStore} from 'pinia'
import type {Category} from "@/types";
import {listCategories} from "@/apis/layout";

export const useCategoriesStore = defineStore('counter', () => {
    const categories = ref<Category[]>([]);
    const refreshCategories = () => {
        listCategories().then(res => {
            categories.value = res.result
        })
    }
    return {categories, refreshCategories}
})
