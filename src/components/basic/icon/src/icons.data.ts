import antDesign from '@iconify-json/ant-design/icons.json'

import ep from '@iconify-json/ep/icons.json'
import { addCollection } from '@iconify/vue'

export const icons = { 'Ant Design': antDesign, 'Element Plus': ep } as const

export type DefaultIconsType =
  | `ep:${keyof typeof ep.icons}`
  | `ant-design:${keyof typeof antDesign.icons}`

export const setupIcons = () => {
  Object.values(icons).forEach(item => addCollection(item))
}
