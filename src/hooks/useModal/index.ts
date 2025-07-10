import type { App } from 'vue'
import { useFormModal } from './useFormModal'
import { installUseModal, useModal } from './useModal'

const install = (app: App) => {
  installUseModal(app)
}

export { install, useFormModal, useModal }

export default install
