<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { computed } from 'vue'

const props = defineProps({
  expand: { type: Boolean },
})

/**
 * @description 展开/收起 图标旋转转数
 */
const turn = computed(() => `${props.expand ? 0 : 0.5}turn`)
</script>

<template>
  <DownOutlined class="collapse-icon" />
</template>

<style lang="less" scoped>
  .collapse-icon {
  transform: rotate(v-bind(turn));
  transition: transform 0.3s;
}
</style>
