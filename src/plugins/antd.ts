import type { App } from 'vue'
import { AButton } from '@/components/basic/button/'
import 'ant-design-vue/dist/reset.css'

export function setupAntd(app: App<Element>) {
  app.component('AButton', AButton)
}
