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
          max-width="800px"
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
            <!--
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nome"
                      label="Nome"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.usuario"
                      label="Usuário"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cargo"
                      label="Cargo"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cargaHoraria"
                      label="Horas"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text> -->

            <v-card-text>

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
  import { mdiPencil, mdiDelete } from '@mdi/js'

  export default {
    name: 'TableAluno',
    props: [
      'title',
    ],
    // components: {
    //   FormAluno: () => import('../FormAluno'),
    // },
    data: () => ({
      dialog: false,
      icons: {
        mdiPencil,
        mdiDelete,
      },
      funcionario: null,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          value: 'pessoa.nome',
        },
        { text: 'CPF', value: 'cpf' },
        { text: 'Usuário', value: 'usuario.login' },
        { text: 'E-mail', value: 'usuario.email' },
        { text: 'Cargo', value: 'usuario.tipo' },
        { text: 'Horas', value: 'cargaHoraria' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        pessoa: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        pai: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        mae: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        responsavel: {
          cpf: '',
          pessoa: {
            nome: '',
            dataNascimento: '',
            naturalidade: '',
            rg: '',
            endereco: {
              rua: '',
              numero: 0,
              complemento: null,
              bairro: ' ',
              cidade: '',
              uf: '',
              cep: '',
            },
          },
        },
      },
      defaultItem: {
        pessoa: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        pai: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        mae: {
          nome: '',
          dataNascimento: '',
          naturalidade: '',
          rg: '',
          endereco: {
            rua: '',
            numero: 0,
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: '',
            cep: '',
          },
        },
        responsavel: {
          cpf: '',
          pessoa: {
            nome: '',
            dataNascimento: '',
            naturalidade: '',
            rg: '',
            endereco: {
              rua: '',
              numero: 0,
              complemento: null,
              bairro: ' ',
              cidade: '',
              uf: '',
              cep: '',
            },
          },
        },
      },
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
      // Axios.get('https://api.github.com/users/gbmatheus/repos')
      //   .then(response => {
      //     this.info = response.data
      //   })
      Axios.get('http://127.0.0.1:8089/api/funcionarios')
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
            // {"id":1,"cpf":"123.123.123-12","pessoa":{"nome":"Lucas Henrique","dataNascimento":"2001-01-10","naturalidade":"BRA","rg":"20010110","ativo":true,"endereco":{"rua":"Rua dos BOBAO","numero":2,"complemento":"","bairro":"Landia","cidade":"Bobonica","uf":"BB","cep":"11.000-000"}},"usuario":{"login":"lucashenri","senha":"12345678","email":"lucasH@mail","tipo":"PRO","ativo":true},"cargaHoraria":40}
            pessoa: {
              nome: data.pessoa.nome,
              dataNascimento: data.pessoa.dataNascimento,
              naturalidade: data.pessoa.naturalidade,
              rg: data.pessoa.rg,
              endereco: {
                rua: data.pessoa.endereco.rua,
                numero: data.pessoa.endereco.numero,
                complemento: data.pessoa.endereco.complemento,
                bairro: data.pessoa.endereco.bairro,
                cidade: data.pessoa.endereco.cidade,
                uf: data.pessoa.endereco.uf,
                cep: data.pessoa.endereco.cep,
              },
            },
            pai: {
              nome: '',
              dataNascimento: '',
              naturalidade: '',
              rg: '',
              endereco: {
                rua: '',
                numero: 0,
                complemento: null,
                bairro: ' ',
                cidade: '',
                uf: '',
                cep: '',
              },
            },
            mae: {
              nome: '',
              dataNascimento: '',
              naturalidade: '',
              rg: '',
              endereco: {
                rua: '',
                numero: 0,
                complemento: null,
                bairro: ' ',
                cidade: '',
                uf: '',
                cep: '',
              },
            },
            responsavel: {
              cpf: '',
              pessoa: {
                nome: '',
                dataNascimento: '',
                naturalidade: '',
                rg: '',
                endereco: {
                  rua: '',
                  numero: 0,
                  complemento: null,
                  bairro: ' ',
                  cidade: '',
                  uf: '',
                  cep: '',
                },
              },
            },
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
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
          this.updatePut(this.desserts[this.editedIndex], this.editedIndex)
        } else {
          alert('Adicionando', JSON.stringify(this.editedItem))
          this.desserts.push(this.editedItem)
          this.createPost()
        }
        this.close()
      },

      createPost () {
        this.createAluno()
        alert(this.funcionario)
        Axios.post('http://127.0.0.1:8089/api/funcionarios', this.funcionario)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      updatePut (obj, index) {
        Axios.put(`http://127.0.0.1:8089/api/funcionarios/${index}`, obj)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      createAluno () {
        let pessoa = this.$refs.func.$refs.formPessoa.getPessoa()
        let pessoaEnd = this.$refs.func.$refs.formEndereco.getEndereco()
        let pai = this.$refs.func.$refs.formPessoa.getPessoa()
        let paiEnd = this.$refs.func.$refs.formPessoa.getPessoa()
        let mae = this.$refs.func.$refs.formPessoa.getPessoa()
        let maeEnd = this.$refs.func.$refs.formPessoa.getPessoa()
        let responsavel = this.$refs.func.$refs.formPessoa.getPessoa()
        let responsavelEnd = this.$refs.func.$refs.formPessoa.getPessoa()

        console.log(responsavel)

        // switch (u.tipo) {
        //   case 'Adminitrador':
        //     u.tipo = 'ADM'
        //     break

        //   case 'Diretor(a)':
        //     u.tipo = 'DIR'
        //     break

        //   case 'Secretário(a)':
        //     u.tipo = 'SEC'
        //     break

        //   case 'Pedagogo(a)':
        //     u.tipo = 'PED'
        //     break

        //   case 'Professor(a)':
        //     u.tipo = 'PRO'
        //     break
        // }

        this.aluno = {
          pessoa: {
            endereco: pessoaEnd,
            ...pessoa,
          },
          pai: {
            endereco: paiEnd,
            ...pai,
          },
          mae: {
            endereco: maeEnd,
            ...mae,
          },
          responsavel: {
            endereco: responsavelEnd,
            ...responsavel,
          },
        }
      },
    },
  }
</script>

<style>
</style>
