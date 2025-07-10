<script lang="ts" setup>
import { Checkbox } from 'ant-design-vue'
import { checkboxProps } from 'ant-design-vue/es/checkbox'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  ...checkboxProps(),
  trueValue: {
    type: [Number, Boolean, String],
    default: true,
  },
  falseValue: {
    type: [Number, Boolean, String],
    default: false,
  },
})

const emit = defineEmits(['update:checked', 'change'])

const getProps = computed(() => {
  return omit(props, ['onUpdate:checked', 'onChange'])
})

const checkedModel = computed<boolean>({
  get() {
    return props.checked === props.trueValue
  },
  set(val) {
    emit('update:checked', val ? props.trueValue : props.falseValue)
  },
})

const handleChange = (e) => {
  const evt = {
    ...e,
    target: {
      ...e.target,
      checked: e.target.checked ? props.trueValue : props.falseValue,
    },
  }
  emit('change', evt)
}
</script>

<template>
  <Checkbox v-bind="getProps" v-model:checked="checkedModel" @change="handleChange">
    <slot />
  </Checkbox>
</template>
