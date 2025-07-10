<script lang="ts" setup>
import type { ProgressProps } from 'ant-design-vue/es/progress/props'
import type { PropType } from 'vue'
import { Progress } from 'ant-design-vue'
import { progressProps } from 'ant-design-vue/es/progress/props'
import { computed } from 'vue'

  type StrokeColorType = ProgressProps['strokeColor']
  type StrokeColorFn = (percent) => StrokeColorType

const props = defineProps({
  ...progressProps(),
  strokeColor: {
    type: [String, Object, Function] as PropType<StrokeColorType | StrokeColorFn>,
  },
})

const myProps = computed(() => {
  if (typeof props.strokeColor === 'function') {
    return {
      ...props,
      strokeColor: props.strokeColor(props.percent),
    }
  }
  else {
    return {
      ...props,
      strokeColor: props.strokeColor as StrokeColorType,
    }
  }
})
</script>

<template>
  <Progress v-bind="myProps" />
</template>
