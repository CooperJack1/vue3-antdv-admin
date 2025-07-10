import type { DynamicTableProps } from '../dynamic-table'
import type {
  ExportData2Excel,
  TableForm,
  TableMethods,
  TableState,
  UseColumnsType,
  UseEditableType,
} from './'
import { injectLocal, provideLocal } from '@vueuse/core'

type DynamicTableType = {
  tableProps: DynamicTableProps
} & TableMethods &
TableState &
TableForm &
UseEditableType &
UseEditableType &
ExportData2Excel &
UseColumnsType

const key = Symbol('dynamic-table')

export function createTableContext(instance: DynamicTableType) {
  provideLocal(key, instance)
}

export function useTableContext() {
  return injectLocal(key) as DynamicTableType
}
