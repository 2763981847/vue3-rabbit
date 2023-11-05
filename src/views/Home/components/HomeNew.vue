<script setup lang="ts">
import HomePanel from "@/views/Home/components/HomePanel.vue";
import {listNews} from "@/apis/home";
import type {Good} from "@/types";
import {onMounted, ref} from "vue";

const newList = ref<Good[]>([])
const refreshNewList = () => {
  listNews().then(res => {
    newList.value = res.result
  })
}
onMounted(() => {
  refreshNewList()
})
</script>

<template>
  <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="good in newList" :key="good.id">
        <RouterLink to="/">
          <img v-img-lazy="good.picture" alt=""/>
          <p class="name">{{ good.name }}</p>
          <p class="price">&yen;{{ good.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </home-panel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
