<script setup lang="ts">
import {getBanner} from "@/apis/home";
import {onMounted, ref} from "vue";
import type {Banner} from "@/types";

const bannerList = ref<Banner[]>([]);
const refreshBanner = async () => {
  getBanner().then(res => bannerList.value = res.result)

}

onMounted(() => {
  refreshBanner()
})
</script>


<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="banner in bannerList" :key="banner.id">
        <router-link :to="banner.hrefUrl">
          <img
              :src="banner.imgUrl"
              alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
