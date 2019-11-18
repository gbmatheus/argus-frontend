<template>
    <v-card
      class="mx-auto"
      max-width="800"
      outlined
    >
      <!-- <v-card-title class="red darken-4 white--text">
        Funcionário
      </v-card-title> -->
      <v-list>
        <v-list-item-content>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                ref="cpf"
                v-model="cpf"
                v-mask="mask"
                :value="obj.cpf"
                :placeholder="obj.cpf"
                :rules="numeroRules"
                label="CPF"
                :counter="14"
                filled
                outlined
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                ref="cargaHoraria"
                v-model.number="cargaHoraria"
                v-mask="maskNum"
                :value="obj.cargaHoraria"
                :placeholder="obj.cargaHoraria"
                :rules="numeroRules"
                label="Carga horaria"
                filled
                outlined
                required
              />
            </v-col>
          </v-row>
        </v-container>
        </v-list-item-content>

        <v-divider :inset="false"></v-divider>

        <v-subheader class="red darken-4 white--text">Dados Pessoais</v-subheader>
        <v-list-item-content>
          <form-pessoa
            :pessoa="obj.pessoa"
            ref="formPessoa"
          />
        </v-list-item-content>

        <v-divider :inset="false" />

        <v-subheader>Endereço</v-subheader>
        <v-list-item-content>
          <form-endereco
            :endereco="obj.pessoa.endereco"
            ref="formEndereco"
          />
        </v-list-item-content>

        <v-divider></v-divider>

        <v-subheader class="red darken-4 white--text">Dados do usuário</v-subheader>
        <v-list-item-content>
          <form-usuario
            :usuario="obj.usuario"
            ref="formUsuario"
          />
        </v-list-item-content>

      </v-list>
    </v-card>
</template>

<script>
  import { mask } from 'vue-the-mask'
  // import store from './../store'

  export default {
    name: 'FormFuncionario',
    components: {
      FormPessoa: () => import('./form/FormPessoa'),
      FormEndereco: () => import('./form/FormEndereco'),
      FormUsuario: () => import('./form/FormUsuario'),
    },
    props: [
      'obj',
    ],
    directives: {
      mask,
    },
    data: () => ({
      // valid: false,
      mask: '###.###.###-##',
      maskNum: '########',
      cpf: '',
      cargaHoraria: '',
      pessoa: null,
      endereco: null,
      usuario: null,
      //  Regras de validação
      numeroRules: [
        v => !!v || 'Obrigatório',
        v => v.length <= 50 || 'Deve ter menos de 50 caracteres',
      ],
    }),
    methods: {
      getFuncionario () {
        return { cpf: this.cpf, cargaHoraria: this.cargaHoraria }
      },

      createPessoa () {
        this.pessoa = this.$refs.formPessoa.getPessoa()
      },

      createEndereco () {
        this.endereco = this.$refs.formPessoa.getEndereco()
      },

      createUsuario () {
        this.usuario = this.$refs.formUsuario.getUsuario()
      },

      createFuncionario () {},

    },
  }
</script>

<style>
</style>
