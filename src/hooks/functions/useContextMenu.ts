import type { ContextMenuItem } from '@/components/basic/context-menu'
import { getCurrentInstance, onUnmounted } from 'vue'
import { createContextMenu, destroyContextMenu } from '@/components/basic/context-menu'

export type { ContextMenuItem }

export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu()
    })
  }
  return [createContextMenu, destroyContextMenu]
}
