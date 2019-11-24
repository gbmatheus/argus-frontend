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
          max-width="1000px"
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

                <v-row>
                  <v-col
                    cols="12"
                    sm="5"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.codigo"
                      v-mask="maskNumero"
                      :rules="numeroRules"
                      label="Código"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="7"
                    md="5"
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
                    sm="4"
                    md="4"
                  >
                    <v-select
                      v-model="editedItem.anoLetivo"
                      :items="anoLetivos"
                      :rules="[v => !!v || 'Tipo é obrigatório']"
                      label="Ensino"
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
  import { mask } from 'vue-the-mask'
  import { mdiPencil, mdiDelete } from '@mdi/js'

  export default {
    name: 'TableCurriculo',
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
      curriculo: null,
      headers: [
        { text: 'Código', value: 'codigo' },
        {
          text: 'Nome',
          align: 'left',
          value: 'nome',
        },
        { text: 'Ano letivo', value: 'anoLetivo' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        anoLetivo: '',
        nome: '',
        codigo: '',
      },
      defaultItem: {
        anoLetivo: '',
        nome: '',
        codigo: '',
      },
      menu1: false,
      nomeRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 50 || 'Deve ter menos de 50 caracteres',
      ],
      anoLetivos: [
        'Fundamental 1',
        'Fundamental 2',
        'Fundamental 3',
        'Fundamental 4',
        'Fundamental 5',
        'Fundamental 6',
        'Fundamental 7',
        'Fundamental 8',
        'Fundamental 9',
        'Médio 1',
        'Médio 2',
        'Médio 3',
        'Fundamental Inicial',
        'Fundamental Final',
        'Ensino Médio',
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
      Axios.get('http://127.0.0.1:8089/api/curriculos')
        .then(response => {
          alert(JSON.stringify(response.data))
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
            anoLetivo: data.anoLetivo,
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
        this.createFuncionario()
        alert(this.curriculo)
        Axios.post('http://127.0.0.1:8089/api/curriculos', this.curriculo)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      update (obj, index) {
        Axios.put(`http://127.0.0.1:8089/api/curriculos/${index}`, obj)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      createFuncionario () {
        console.log(this.editedItem.anoLetivo)

        switch (this.editedItem.anoLetivo) {
          case 'Fundamental 1':
            this.editedItem.anoLetivo = 'EF_1'
            break

          case 'Fundamental 2':
            this.editedItem.anoLetivo = 'EF_2'
            break

          case 'Fundamental 3':
            this.editedItem.anoLetivo = 'EF_3'
            break

          case 'Fundamental 4':
            this.editedItem.anoLetivo = 'EF_4'
            break

          case 'Fundamental 5':
            this.editedItem.anoLetivo = 'EF_5'
            break

          case 'Fundamental 6':
            this.editedItem.anoLetivo = 'EF_6'
            break

          case 'Fundamental 7':
            this.editedItem.anoLetivo = 'EF_7'
            break

          case 'Fundamental 8':
            this.editedItem.anoLetivo = 'EF_8'
            break

          case 'Fundamental 9':
            this.editedItem.anoLetivo = 'EF_9'
            break

          case 'Médio 1':
            this.editedItem.anoLetivo = 'EM_1'
            break

          case 'Médio 2':
            this.editedItem.anoLetivo = 'EM_2'
            break

          case 'Médio 3':
            this.editedItem.anoLetivo = 'EM_3'
            break

          case 'Fundamental Inicial':
            this.editedItem.anoLetivo = 'EF_I'
            break

          case 'Fundamental Final':
            this.editedItem.anoLetivo = 'EF_F'
            break

          case 'Médio':
            this.editedItem.anoLetivo = 'EM_F'
            break
        }

        this.funcionario = this.editedItem
      },
    },
  }
</script>

<style>
</style>
