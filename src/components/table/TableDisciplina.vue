<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="nome"
      class="elevation-1"
    >
    <template v-slot:top>
      <v-toolbar
        flat
        color="red darken-4"
        class="white--text elevation-5"
      >
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>

        <v-divider
          class="mx-4"
          inset
          vertical
        />

        <v-spacer />

        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              outlined
              class="mb-2"
              v-on="on"
            >
            Adicionar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }} {{ title }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>

                <v-subheader class="red darken-4 white--text">Dados da Disciplina</v-subheader>
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.nome"
                      :rules="nomeRules"
                      label="Nome"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="8"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.codigo"
                      :rules="nomeRules"
                      label="Código"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="4"
                    md="3"
                  >
                    <v-text-field
                      v-model.number="editedItem.cargaHoraria"
                      v-mask="maskNumero"
                      label="Carga horária"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-4"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="red darken-4"
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
      </v-toolbar>
    </template>
  <template
      v-slot:item.action="{ item }"
    >
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
        color="red darken-4"
      >
        {{ icons.mdiPencil }}
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
        color="red darken-4"
      >
        {{ icons.mdiDelete }}
      </v-icon>
    </template>
    <template
      v-slot:no-data
    >
      <v-btn
        color="red darken-4"
        class="white--text"
        @click="initialize"
      >
        Carregar
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import Axios from 'axios'
  import mask from 'vue-the-mask'
  import { mdiPencil, mdiDelete } from '@mdi/js'

  export default {
    name: 'TableFuncionario',
    props: [
      'title',
    ],
    directives: {
      mask,
    },
    data: () => ({
      dialog: false,
      icons: {
        mdiPencil,
        mdiDelete,
      },
      disciplina: null,
      headers: [
        { text: 'Código', value: 'codigo' },
        { text: 'Nome', align: 'left', value: 'nome' },
        { text: 'Horas', value: 'cargaHoraria' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        codigo: '',
        nome: '',
        cargaHoraria: '',
      },
      defaultItem: {
        codigo: '',
        nome: '',
        cargaHoraria: '',
      },
      menu1: false,
      maskNumero: '######################',
      maskCPF: '###.###.###-##',
      nomeRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 30 || 'Deve ter menos de 30 caracteres',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo' : 'Editar'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    mounted () {
      Axios.get('http://127.0.0.1:8089/api/disciplinas')
        .then(response => {
          // alert(JSON.stringify(response.data))
          this.info = response.data
        })
    },

    methods: {
      initialize () {
        this.desserts = this.info.map(function (data) {
          console.log(data)
          return {
            codigo: data.codigo,
            nome: data.nome,
            cargaHoraria: data.cargaHoraria,
          }
        })
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          alert('Atualizando')
          this.update(this.desserts[this.editedIndex], this.editedIndex)
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          alert('Adicionando', JSON.stringify(this.editedItem))
          this.created()
          this.desserts.push(this.editedItem)
        }
        this.close()
      },

      created () {
        this.createDisciplina()
        alert(JSON.stringify(this.disciplina))
        Axios.post('http://127.0.0.1:8089/api/disciplinas', this.disciplina)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      update (obj, index) {
        Axios.put(`http://127.0.0.1:8089/api/disciplinas/${index}`, obj)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      createDisciplina () {
        this.disciplina = this.editedItem
      },
    },
  }
</script>

<style>
</style>
