<template>
  <v-row
    align="center"
    class="flex-column"
    justify="center"
  >

    <base-heading v-text="heading" />

    <v-container fluid>
      <v-form
        v-model="valid"
      >
        <v-row>
          <v-col
            cols="12"
            md="9"
          >
          </v-col>
        </v-row>

      </v-form>
    </v-container>
  </v-row>
</template>

<script>

  export default {
    name: 'PageCadastro',

    props: {
      heading: {
        type: String,
        default: undefined,
      },
    },
    data: () => ({
      valid: false,
    }),
  }
</script>
