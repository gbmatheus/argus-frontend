<template>
    <v-card
      class="mx-auto"
      max-width="800"
      outlined
    >
      <v-card-title class="red darken-4 white--text">
        Endereço
      </v-card-title>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="9"
          >
            <v-text-field
              v-model="rua"
              :rules="nameRules"
              :counter="50"
              label="Rua"
              filled
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              filled
              v-model.number="numero"
              :rules="numeroRules"
              label="Nº"
              required
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="7"
          >
            <v-text-field
              filled
              v-model="complemento"
              :rules="opcionalRules"
              :counter="50"
              label="Complemento"
            />
          </v-col>

          <v-col
            cols="12"
            md="5"
          >
            <v-text-field
              filled
              v-model="bairro"
              :rules="nomePequenoRules"
              :counter="30"
              label="Bairro"
              required
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              filled
              v-model="cidade"
              :rules="nomePequenoRules"
              :counter="30"
              label="Cidade"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <v-select
              filled
              v-model="uf"
              :items="ufs"
              :rules="[v => !!v || 'Item is required']"
              label="UF"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              filled
              v-model.number="cep"
              v-mask="maskCep"
              :rules="cepRules"
              label="CEP"
              required
            />
          </v-col>
        </v-row>

      </v-container>
    </v-card>
</template>

<script>
  import { mask } from 'vue-the-mask'

  export default {
    name: 'FormEndereco',
    directives: {
      mask,
    },
    data: () => ({
      // valid: false,
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      cep: '',
      maskCep: '##.###-###',
      uf: null,
      //  Regras de validação
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      numeroRules: [
        v => !!v || 'Número é obrigatório',
        v => /[0-9]/.test(v) || 'Número inválido',
      ],
      nomePequenoRules: [
        v => !!v || 'Name is required',
        v => v.length <= 30 || 'Name must be less than 10 characters',
      ],
      opcionalRules: [
        v => v.length <= 50 || 'Name must be less than 10 characters',
      ],
      cepRules: [
        v => !!v || 'Name is required',
        v => v.length <= 14 || 'Name must be less than 10 characters',
      ],
      ufs: [
        'AM',
        'BA',
        'CE',
        'PE',
      ],
    }),
  }
</script>

<style>
</style>
