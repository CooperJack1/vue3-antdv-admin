<script lang="ts" setup>
import { RedoOutlined } from '@ant-design/icons-vue'
import { Tooltip } from 'ant-design-vue'
import { useI18n } from '@/hooks/useI18n'
import { useTableContext } from '../../hooks/useTableContext'

const { t } = useI18n()
const table = useTableContext()

function redo() {
  table.reload()
}
</script>

<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t('common.redo') }}</span>
    </template>
    <RedoOutlined @click="redo" />
  </Tooltip>
</template>
