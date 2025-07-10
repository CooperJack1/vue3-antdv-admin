<script lang="ts" setup>
import { Space } from 'ant-design-vue'
import ColumnSetting from './column-setting.vue'
import Fullscreen from './fullscreen.vue'
import RefreshSetting from './refresh-setting.vue'
import SearchSetting from './search-setting.vue'
import SizeSetting from './size-setting.vue'
</script>

<template>
  <Space :size="8" class="dark:text-white">
    <SearchSetting />
    <RefreshSetting />
    <Fullscreen />
    <ColumnSetting />
    <SizeSetting />
  </Space>
</template>
