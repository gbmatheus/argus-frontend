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

                <table-turma title="Turmas" />

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
    name: 'PageTurma',

    components: {
      TableTurma: () => import('./table/TableTurma'),
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
