<template>
  <v-card
      class="mx-auto"
      max-width="1000px"
      outlined
  >
    <v-list>
      <v-subheader class="red darken-4 white--text">Dados do Aluno</v-subheader>
      <v-list-item-content>
        <form-pessoa
          :pessoa="aluno.pessoa"
          ref="formPessoa"
        />
      </v-list-item-content>
      <v-divider :inset="false" />

      <v-subheader>Endereço</v-subheader>
      <v-list-item-content>
        <form-endereco
          :endereco="aluno.pessoa.endereco"
          ref="formPessoaEnd"
        />
      </v-list-item-content>

      <v-divider />

      <v-subheader class="red darken-4 white--text">Dados dos Pais</v-subheader>
      <v-subheader>Pai</v-subheader>
      <v-list-item-content>
        <form-pessoa
          :pessoa="aluno.pai"
          ref="formPai"
        />
      </v-list-item-content>
      <v-divider :inset="false" />

      <v-subheader>Endereço - checkbox</v-subheader>
      <v-list-item-content>
        <form-endereco
          :endereco="aluno.pai.endereco"
          ref="formPaiEnd"
        />
      </v-list-item-content>

      <v-divider />

      <v-subheader>Mãe</v-subheader>
      <v-list-item-content>
        <form-pessoa
          :pessoa="aluno.mae"
          ref="formMae"
        />
      </v-list-item-content>
      <v-divider :inset="false" />

      <v-subheader>Endereço - checkbox</v-subheader>
      <v-list-item-content>
        <form-endereco
          :endereco="aluno.mae.endereco"
          ref="formMaeEnd"
        />
      </v-list-item-content>

      <v-divider />

      <v-subheader class="red darken-4 white--text">Dados do Responsável</v-subheader>
      <v-list-item-content>
        <row>
          <v-col
            cols="12"
            sm="9"
            md="9"
          >
            Select de Responsável - Aluno, Mãe, Pai, Outros
          </v-col>
        </row>
        <v-col
          cols="12"
          sm="9"
          md="9"
        >
          <form-pessoa
            :pessoa="aluno.responsavel.pessoa"
            ref="formResponsavel"
          />
        </v-col>
        <v-col
          cols="12"
          sm="3"
          md="3"
        >
          <v-text-field
            ref="cpf"
            v-model="responsavel.cpf"
            v-mask="mask"
            :value="aluno.responsavel.cpf"
            :placeholder="cpf"
            :rules="numeroRules"
            label="CPF"
            :counter="14"
            filled
            outlined
            dense
            required
          />
        </v-col>
      </v-list-item-content>
      <v-divider :inset="false" />

      <v-subheader>Endereço</v-subheader>
      <v-list-item-content>
        <form-endereco
          :endereco="aluno.responsavel.pessoa.endereco"
          ref="formResponsavelEnd"
        />
      </v-list-item-content>

      <v-divider />

      <v-list-item-content>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
            Aki
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list>
  </v-card>
</template>

<script>
  import { mask } from 'vue-the-mask'

  export default {
    name: 'FormAluno',
    components: {
      FormPessoa: () => import('./form/FormPessoa'),
      FormEndereco: () => import('./form/FormEndereco'),
    },
    props: [
      'aluno',
    ],
    directives: {
      mask,
    },
    data: () => ({
      mask: '###.###.###-##',
      pessoa: {
        ...null,
        endereco: null,
      },
      pai: {
        ...null,
        endereco: null,
      },
      mae: {
        ...null,
        endereco: null,
      },
      responsavel: {
        cpf: null,
        pessoa: {
          ...null,
          endereco: null,
        },
      },
      res: [
        'Aluno',
        'Pai',
        'Mãe',
        'Outros',
      ],
      numeroRules: [
        v => !!v || 'Obrigatório',
        // v => /[0-9]/.test(v) || 'Número inválido',
      ],
    }),
    methods: {
      getAluno () {
        return {
          pessoa: this.pessoa,
          pai: this.pai,
          mae: this.mae,
          reponsavel: this.responsavel,
        }
      },
      getCPF () {
        return {
          cpf: this.cpf,
        }
      },
    },
  }
</script>

<style>
</style>
