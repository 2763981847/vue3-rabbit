<script setup lang="ts">

import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixedBar from "@/views/Layout/components/LayoutFixedBar.vue";
import {onMounted} from "vue";
import {useCategoriesStore} from "@/stores/categories";

onMounted(() => {
  useCategoriesStore().refreshCategories()
})
</script>

<template>
  <LayoutFixedBar/>
  <LayoutNav/>
  <LayoutHeader/>
  <RouterView/>
  <LayoutFooter/>
</template>

<style scoped>

</style>
