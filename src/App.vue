<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="small" :icon="Delete">删除按钮</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      small="small"
      disabled="disabled"
      background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>
