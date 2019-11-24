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
                    sm="9"
                    md="7"
                  >
                    <v-text-field
                      v-model="editedItem.cpf"
                      v-mask="maskCPF"
                      label="CPF"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    sm="3"
                    md="5"
                  >
                    <v-text-field
                      v-model="editedItem.cargaHoraria"
                      v-mask="maskNumero"
                      :rules="numeroRules"
                      label="Carga horária"
                      :counter="14"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="7"
                    md="5"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.nome"
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
                    sm="5"
                    md="3"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.rg"
                      v-mask="maskNumero"
                      :rules="numeroRules"
                      label="Registro geral"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="4"
                    md="2"
                  >
                    <v-menu
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="editedItem.pessoa.dataNascimento"
                          label="Nascimento"
                          readonly
                          v-on="on"
                          filled
                          outlined
                          dense
                          required
                        />
                      </template>
                      <v-date-picker
                        v-model="editedItem.pessoa.dataNascimento"
                        no-title
                        locale="pt-br"
                        @input="menu1 = false"
                      />
                    </v-menu>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="4"
                    md="2"
                  >
                    <v-select
                      v-model="editedItem.pessoa.naturalidade"
                      :items="paises"
                      :rules="[v => !!v || 'Naturalidade é obrigatório']"
                      label="País"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="10"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.endereco.rua"
                      :rules="nomeRules"
                      :counter="50"
                      label="Logadouro"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model.number="editedItem.pessoa.endereco.numero"
                      v-mask="maskNumero"
                      :rules="numeroRules"
                      label="Nº"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="9"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.endereco.complemento"
                      :rules="opcionalRules"
                      label="Complemento"
                      filled
                      outlined
                      dense
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.endereco.bairro"
                      :rules="nomePequenoRules"
                      :counter="30"
                      label="Bairro"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.endereco.cidade"
                      :rules="nomePequenoRules"
                      :counter="30"
                      label="Cidade"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="4"
                    md="2"
                  >
                    <v-select
                      v-model="editedItem.pessoa.endereco.uf"
                      :items="ufs"
                      :rules="[v => !!v || 'UF é obrigatório']"
                      label="UF"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.pessoa.endereco.cep"
                      v-mask="maskCep"
                      :rules="cepRules"
                      label="CEP"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col
                    cols="12"
                    sm="8"
                    md="8"
                  >
                    <v-text-field
                      v-model="editedItem.usuario.email"
                      :rules="emailRules"
                      label="E-mail"
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
                      v-model="editedItem.usuario.tipo"
                      :items="tipos"
                      :rules="[v => !!v || 'Tipo é obrigatório']"
                      label="Tipo usuário"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.usuario.login"
                      :rules="nomeRules"
                      label="Login"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="loginRpt"
                      :rules="nomeRules"
                      label="Confirmar login"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.usuario.senha"
                      :rules="nomeRules"
                      label="Senha"
                      type="password"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="senhaRpt"
                      :rules="nomeRules"
                      label="Confirmar senha"
                      type="password"
                      filled
                      outlined
                      dense
                      required
                    />
                  </v-col>
                </v-row>

              <!--
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
                </v-row> -->
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
      funcionario: null,
      loginRpt: '',
      senhaRpt: '',
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
        cpf: '',
        pessoa: {
          nome: '',
          dataNascimento: new Date().toISOString().substr(0, 10),
          naturalidade: 'BRA',
          rg: '',
          endereco: {
            rua: '',
            numero: '',
            complemento: null,
            bairro: ' ',
            cidade: '',
            uf: 'PE',
            cep: '',
          },
        },
        usuario: {
          login: '',
          senha: '',
          email: '',
          tipo: 'Professor(a)',
        },
        cargaHoraria: 0,
      },
      defaultItem: {
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
        usuario: {
          login: '',
          senha: '',
          email: '',
          tipo: '',
        },
        cargaHoraria: 0,
      },
      menu1: false,
      maskNumero: '######################',
      maskData: '##/##/####',
      maskCPF: '###.###.###-##',
      maskCep: '##.###-###',
      nomeRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 50 || 'Deve ter menos de 50 caracteres',
      ],
      numeroRules: [
        v => !!v || 'Obrigatório',
        // v => /[0-9]/.test(v) || 'Número inválido',
      ],
      nomePequenoRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 30 || 'Deve ter menos de 50 caracteres',
      ],
      opcionalRules: [
        v => v.length <= 50 || 'Deve ter menos de 50 caracteres',
      ],
      cepRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 10 || 'Deve ter menos de 10 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido',
      ],
      tipos: [
        'Adminitrador',
        'Diretor(a)',
        'Secretário(a)',
        'Pedagogo(a)',
        'Professor(a)',
      ],
      ufs: [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
      ],
      paises: [
        'ABW',
        'AFG',
        'AGO',
        'AIA',
        'ALA',
        'ALB',
        'AND',
        'ANT',
        'ARE',
        'ARG',
        'ARM',
        'ASM',
        'ATA',
        'ATF',
        'ATG',
        'AUS',
        'AUT',
        'AZE',
        'BDI',
        'BEL',
        'BEN',
        'BFA',
        'BGD',
        'BGR',
        'BHR',
        'BHS',
        'BIH',
        'BLM',
        'BLR',
        'BLZ',
        'BMU',
        'BOL',
        'BRA',
        'BRB',
        'BRN',
        'BTN',
        'BVT',
        'BWA',
        'CAF',
        'CAN',
        'CCK',
        'CHE',
        'CHL',
        'CHN',
        'CIV',
        'CMR',
        'COD',
        'COG',
        'COK',
        'COL',
        'COM',
        'CPV',
        'CRI',
        'CUB',
        'CUW',
        'CXR',
        'CYM',
        'CYP',
        'CZE',
        'DEU',
        'DJI',
        'DMA',
        'DNK',
        'DOM',
        'DZA',
        'ECU',
        'EGY',
        'ERI',
        'ESH',
        'ESP',
        'EST',
        'ETH',
        'FIN',
        'FJI',
        'FLK',
        'FRA',
        'FRO',
        'FSM',
        'GAB',
        'GBR',
        'GEO',
        'GGY',
        'GHA',
        'GIB',
        'GIN',
        'GLP',
        'GMB',
        'GNB',
        'GNQ',
        'GRC',
        'GRD',
        'GRL',
        'GTM',
        'GUF',
        'GUM',
        'GUY',
        'HKG',
        'HMD',
        'HND',
        'HRV',
        'HTI',
        'HUN',
        'IDN',
        'IMN',
        'IND',
        'IOT',
        'IRL',
        'IRN',
        'IRQ',
        'ISL',
        'ISR',
        'ITA',
        'JAM',
        'JEY',
        'JOR',
        'JPN',
        'KAZ',
        'KEN',
        'KGZ',
        'KHM',
        'KIR',
        'KNA',
        'KOR',
        'KWT',
        'LAO',
        'LBN',
        'LBR',
        'LBY',
        'LCA',
        'LIE',
        'LKA',
        'LSO',
        'LTU',
        'LUX',
        'LVA',
        'MAC',
        'MAF',
        'MAR',
        'MCO',
        'MDA',
        'MDG',
        'MDV',
        'MEX',
        'MHL',
        'MKD',
        'MLI',
        'MLT',
        'MMR',
        'MNE',
        'MNG',
        'MNP',
        'MOZ',
        'MRT',
        'MSR',
        'MTQ',
        'MUS',
        'MWI',
        'MYS',
        'MYT',
        'NAM',
        'NCL',
        'NER',
        'NFK',
        'NGA',
        'NIC',
        'NIU',
        'NLD',
        'NOR',
        'NPL',
        'NRU',
        'NZL',
        'OMN',
        'PAK',
        'PAN',
        'PCN',
        'PER',
        'PHL',
        'PLW',
        'PNG',
        'POL',
        'PRI',
        'PRK',
        'PRT',
        'PRY',
        'PSE',
        'PSL',
        'PYF',
        'QAT',
        'REU',
        'ROU',
        'RUS',
        'RWA',
        'SAU',
        'SDN',
        'SEN',
        'SGP',
        'SGS',
        'SHN',
        'SJM',
        'SLB',
        'SLE',
        'SLV',
        'SMR',
        'SOM',
        'SPM',
        'SRB',
        'STP',
        'SUR',
        'SVK',
        'SVN',
        'SWE',
        'SWZ',
        'SYC',
        'SYR',
        'TCA',
        'TCD',
        'TGO',
        'THA',
        'TJK',
        'TKL',
        'TKM',
        'TLS',
        'TON',
        'TTO',
        'TUN',
        'TUR',
        'TUV',
        'TWN',
        'TZA',
        'UGA',
        'UKR',
        'UMI',
        'URY',
        'USA',
        'UZB',
        'VAT',
        'VCT',
        'VEN',
        'VGB',
        'VIR',
        'VNM',
        'VUT',
        'WLF',
        'WSM',
        'YEM',
        'ZAF',
        'ZMB',
        'ZWE',
      ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo' : 'Editar'
      },
      computedDateFormatted () {
        return this.formatDate(this.date)
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
            cpf: data.cpf,
            pessoa: data.pessoa,
            usuario: data.usuario,
            cargaHoraria: data.cargaHoraria,
          }
        })
      },

      parseDate (date) {
        if (!date) return null

        const [dia, mes, ano] = date.split('/')
        console.log(`${ano}-${mes}-${dia}`)
        return `${ano}-${mes}-${dia}`
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
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
        alert(this.funcionario)
        Axios.post('http://127.0.0.1:8089/api/funcionarios', this.funcionario)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      update (obj, index) {
        Axios.put(`http://127.0.0.1:8089/api/funcionarios/${index}`, obj)
          .then((response) => alert(`Adicionado ${JSON.stringify(response)}`))
          .catch((error) => alert(`Erro ${JSON.stringify(error)} - error: ${error.message} - status: ${error.status}`))
      },

      createFuncionario () {
        console.log(this.editedItem.usuario.tipo)

        switch (this.editedItem.usuario.tipo) {
          case 'Adminitrador':
            this.editedItem.usuario.tipo = 'ADM'
            break

          case 'Diretor(a)':
            this.editedItem.usuario.tipo = 'DIR'
            break

          case 'Secretário(a)':
            this.editedItem.usuario.tipo = 'SEC'
            break

          case 'Pedagogo(a)':
            this.editedItem.usuario.tipo = 'PED'
            break

          case 'Professor(a)':
            this.editedItem.usuario.tipo = 'PRO'
            break
        }

        this.funcionario = this.editedItem
      },
    },
  }
</script>

<style>
</style>
