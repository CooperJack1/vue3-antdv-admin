import { withInstall } from '@/utils'
import impExcel from './src/ImportExcel.vue'

export * from './src/Export2Excel'

export const ImpExcel = withInstall(impExcel)
export { useExportExcelModal } from './src/ExportExcelModal'
// export const ExpExcelModal = withInstall(expExcelModal);
export * from './src/typing'
