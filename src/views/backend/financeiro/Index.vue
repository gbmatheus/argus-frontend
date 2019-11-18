<template>
  <base-section
    id="financeiro"
    fill-height
  >
    <page-jumbotron
      :icon="mdiCurrencyUsd"
      heading="Financeiro"
      view="src/views/backend/financeiro/Index.vue"
    />
  </base-section>
</template>

<script>
  // Icons
  import {
    mdiCurrencyUsd,
  } from '@mdi/js'

  export default {
    name: 'BackendFinanceiro',

    components: {
      PageJumbotron: () => import('@/components/PageJumbotron'),
    },

    data: () => ({
      mdiCurrencyUsd,
    }),
  }
</script>
