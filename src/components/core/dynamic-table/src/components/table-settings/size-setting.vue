<script lang="ts" setup>
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface'
import type { TableProps } from 'ant-design-vue/es/table/Table'
import { ColumnHeightOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, Tooltip } from 'ant-design-vue'
import { ref, unref } from 'vue'
import { useI18n } from '@/hooks/useI18n'
import { useTableContext } from '../../hooks/useTableContext'

  type SizeType = NonNullable<TableProps['size']>

const { t } = useI18n()
const table = useTableContext()

const selectedKeysRef = ref<SizeType[]>([unref(table.innerPropsRef)?.size || 'large'])

function handleMenuClick({ key }: MenuInfo & { key: SizeType }) {
  selectedKeysRef.value = [key]
  table.setProps({
    size: key,
  })
}
</script>

<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t('component.table.settingDens') }}</span>
    </template>

    <Dropdown placement="bottom" :trigger="['click']">
      <ColumnHeightOutlined />
      <template #overlay>
        <Menu v-model:selected-keys="selectedKeysRef" selectable @click="handleMenuClick">
          <Menu.Item key="large">
            <span>{{ t('component.table.settingDensDefault') }}</span>
          </Menu.Item>
          <Menu.Item key="middle">
            <span>{{ t('component.table.settingDensMiddle') }}</span>
          </Menu.Item>
          <Menu.Item key="small">
            <span>{{ t('component.table.settingDensSmall') }}</span>
          </Menu.Item>
        </Menu>
      </template>
    </Dropdown>
  </Tooltip>
</template>
