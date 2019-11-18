<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="10"
        md="8"
      >
        <v-text-field
          v-model="rua"
          ref="rua"
          :value="endereco.rua"
          :placeholder="endereco.rua"
          :rules="nomeRules"
          :counter="50"
          label="Logadouro"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          v-model.number="numero"
          v-mask="maskNumero"
          ref="numero"
          :value="endereco.numero"
          :placeholder="endereco.numero"
          :rules="numeroRules"
          label="Nº"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="9"
        md="6"
      >
        <v-text-field
          v-model="complemento"
          ref="complmento"
          :value="endereco.complemento"
          :placeholder="endereco.complemento"
          :rules="opcionalRules"
          label="Complemento"
          filled
          outlined
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-text-field
          v-model="bairro"
          ref="bairro"
          :value="endereco.bairro"
          :placeholder="endereco.bairro"
          :rules="nomePequenoRules"
          :counter="30"
          label="Bairro"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <v-text-field
          v-model="cidade"
          ref="cidade"
          :value="endereco.cidade"
          :placeholder="endereco.cidade"
          :rules="nomePequenoRules"
          :counter="30"
          label="Cidade"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="4"
        md="2"
      >
        <v-select
          v-model="uf"
          ref="uf"
          :value="endereco.uf"
          :placeholder="endereco.uf"
          :items="ufs"
          :rules="[v => !!v || 'UF é obrigatório']"
          label="UF"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-text-field
          v-model="cep"
          v-mask="maskCep"
          :value="endereco.cep"
          :placeholder="endereco.cep"
          ref="cep"
          :rules="cepRules"
          label="CEP"
          filled
          outlined
          required
        />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import { mask } from 'vue-the-mask'

  export default {
    name: 'FormEndereco',
    directives: {
      mask,
    },
    props: [
      'endereco',
    ],
    data: () => ({
      // valid: false,
      rua: '',
      numero: '',
      maskNumero: '###############',
      complemento: '',
      bairro: '',
      cidade: '',
      cep: '',
      maskCep: '##.###-###',
      uf: null,
      //  Regras de validação
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
    }),
    methods: {
      getEndereco () {
        return ({ rua: this.rua, numero: this.numero, complemento: this.complemento, bairro: this.bairro, cidade: this.cidade, cep: this.cep, uf: this.uf })
      },
    },
  }
</script>

<style>
</style>
