<template>
  <v-row
    align="start"
    justify="center"
  >
    <v-container fluid>
      <v-form
        v-model="valid"
      >
        <v-row>
          <v-col
            cols="12"
            md="12"
          >
            <v-card>
              <v-container fluid>

                <table-curriculo title="Curriculos" />

              </v-container>
            </v-card>
          </v-col>
        </v-row>

      </v-form>
    </v-container>
  </v-row>
</template>

<script>

  export default {
    name: 'PageCurriculo',

    components: {
      TableCurriculo: () => import('./table/TableCurriculo'),
    },
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
