<script lang="ts" setup>
import { Divider, Space } from 'ant-design-vue'
import BasicHelp from '@/components/basic/basic-help/index.vue'
import { useTableContext } from '@/components/core/dynamic-table/src/hooks'
import TableSetting from '../table-settings/index.vue'

defineOptions({
  name: 'ToolBar',
})

defineProps({
  title: {
    type: String,
    default: '',
  },
  exportFileName: {
    type: String,
    default: '',
  },
  titleTooltip: {
    type: String,
    default: '',
  },
  showTableSetting: {
    type: Boolean,
    default: true,
  },
})

const { exportData2Excel } = useTableContext()
</script>

<template>
  <div class="flex justify-between p-16px">
    <div class="flex">
      <slot name="headerTitle">
        <div class="title">
          {{ title }}
          <BasicHelp v-if="titleTooltip" class="ml-6px pt-3px" :text="titleTooltip" />
        </div>
      </slot>

      <slot name="afterHeaderTitle" />
    </div>

    <div>
      <Space>
        <slot name="toolbar" />

        <span v-if="exportFileName" @click="exportData2Excel">
          <slot name="export-button">
            <a-button type="primary">导出</a-button>
          </slot>
        </span>
      </Space>

      <Divider v-if="$slots.toolbar && showTableSetting" type="vertical" />
      <TableSetting v-if="showTableSetting" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
}
</style>
