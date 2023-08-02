<template>
  <div>
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 没有子路由-->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            <span>标&nbsp;</span>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 只有一个子菜单直接显示子菜单-->
      <template v-if="item.children && item.children.length == 1">
        <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
        >
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由且个数大于一个-->
      <template v-if="item.children && item.children.length > 1">
        <el-sub-menu v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            <span>{{ item.meta.title }}</span>
            <!-- 递归当前组件-->
          </template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
// 获取父组件穿过来的全部路由
defineProps(['menuList'])
// 命名组件
defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Menu',
})
</script>
<!-- 对vue2组件命名-->
<!-- <script lang="ts">
export default {
  // 对当前组件进行命令
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Menu',
}
</script> -->

<style scoped></style>
