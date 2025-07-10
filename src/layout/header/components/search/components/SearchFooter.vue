<script lang="ts" setup>
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CloseOutlined,
  EnterOutlined,
} from '@ant-design/icons-vue'
</script>

<template>
  <div class="flex items-center">
    <span class="mr-14px">
      <EnterOutlined class="icon mr-3px p-2px text-15px" />
      确认
    </span>
    <span class="mr-14px">
      <ArrowUpOutlined class="icon mr-5px p-2px text-15px" />
      <ArrowDownOutlined class="icon mr-3px p-2px text-15px" />
      切换
    </span>
    <span>
      <CloseOutlined class="icon mr-3px p-2px text-15px" />
      关闭
    </span>
  </div>
</template>

<style lang="less" scoped>
  .icon {
  box-shadow:
    inset 0 -2px #cdcde6,
    inset 0 0 1px 1px #fff,
    0 1px 2px 1px #1e235a66;
}
</style>
