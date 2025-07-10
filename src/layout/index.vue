<script lang="ts" setup>
import { Layout } from 'ant-design-vue'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useLayoutSettingStore } from '@/store/modules/layoutSetting'
import PageFooter from './footer'
import PageHeader from './header/index.vue'
import Logo from './logo/index.vue'
import AsideMenu from './menu/menu.vue'
import { TabsView } from './tabs'

const layoutSettingStore = useLayoutSettingStore()
const { layoutSetting } = storeToRefs(layoutSettingStore)
const collapsed = ref<boolean>(false)
// 自定义侧边栏菜单收缩和展开时的宽度
const asiderWidth = computed(() => (collapsed.value ? 80 : 220))
const getTheme = computed(() => (layoutSetting.value.navTheme === 'light' ? 'light' : 'dark'))
</script>

<template>
  <Layout class="layout">
    <Layout.Sider
      v-if="layoutSetting.layout === 'sidemenu'"
      v-model:collapsed="collapsed"
      :width="asiderWidth"
      :trigger="null"
      collapsible
      :theme="getTheme"
      class="layout-sider"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu :collapsed="collapsed" :theme="getTheme" />
    </Layout.Sider>
    <Layout>
      <PageHeader v-model:collapsed="collapsed" :theme="getTheme">
        <template v-if="layoutSetting.layout === 'topmenu'" #left>
          <Logo :collapsed="collapsed" />
        </template>
        <template v-if="layoutSetting.layout === 'topmenu'" #menu>
          <AsideMenu :collapsed="collapsed" :theme="getTheme" />
        </template>
      </PageHeader>
      <Layout.Content class="layout-content">
        <TabsView />
      </Layout.Content>
      <PageFooter />
    </Layout>
  </Layout>
</template>

<style lang="less" scoped>
  .layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
  }
}
</style>
