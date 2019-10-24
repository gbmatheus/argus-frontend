<template>
  <base-section
    id="contact"
    fill-height
  >
    <page-jumbotron
      :icon="mdiContacts"
      heading="Contatos"
      view="src/views/frontend/contact/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiContacts,
  } from '@mdi/js'

  export default {
    name: 'FrontendContact',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiContacts,
    }),
  }
</script>
