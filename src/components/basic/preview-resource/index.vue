<script setup lang="ts">
defineOptions({
  name: 'PreviewResource',
})

defineProps({
  url: {
    type: String,
  },
  type: {
    type: String,
  },
})

// const allowTypes = [
//   'image/',
//   'video/',
//   'audio/',
//   'text/',
//   '/xml',
//   '/json',
//   '/javascript',
//   '/pdf',
// ];

// const sandbox = computed(() => {
//   const isAllowType = allowTypes.some((n) => props.type?.includes(n));
//   if (isAllowType) {
//     return '';
//   }
//   return 'allow-downloads: false';
// });
</script>

<template>
  <object :key="url" :data="url" :type="type" width="100%" height="100%" />
</template>
