<template>
  <v-footer
    app
    class="justify-center"
    color="grey darken-4"
    dark
    height="48"
  >
    Copyright &copy; {{ date }}&nbsp;
    <strong>
      <v-btn
        text
        href="http://github.com/gbmatheus"
      >GM
      </v-btn>
    </strong>
  </v-footer>
</template>

<script>
  export default {
    name: 'FrontendFooter',

    data: () => ({
      date: (new Date()).getFullYear(),
    }),
  }
</script>
