<template>
  <base-section
    id="about"
    fill-height
  >
    <page-jumbotron
      :icon="mdiInformation"
      heading="Sobre"
      view="src/views/frontend/about/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiInformation,
  } from '@mdi/js'

  export default {
    name: 'FrontendAbout',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiInformation,
    }),
  }
</script>
