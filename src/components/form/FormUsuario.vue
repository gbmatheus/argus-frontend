<template>
  <v-form v-model="valid">
    <v-card
      class="mx-auto"
      max-width="800"
      outlined
    >
      <v-card-title class="red darken-4 white--text">
        Usuário
      </v-card-title>

      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
          >
            <v-text-field
              filled
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-select
              filled
              v-model="tipo"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Tipo usuário"
              required
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              filled
              v-model="login"
              :rules="nomeRules"
              label="Login"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              filled
              v-model="loginRpt"
              :rules="nomeRules"
              label="Confirmar login"
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
              v-model="senha"
              :rules="nomeRules"
              label="Senha"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              filled
              v-model="senhaRpt"
              :rules="nomeRules"
              label="Confirmar senha"
              required
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
  export default {
    name: 'FormUsuario',
    data: () => ({
      valid: false,
      login: '',
      loginRPt: '',
      senha: '',
      senhaRPt: '',
      //  Regras de validaão
      nomeRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'O campo deve ter menos de 50 caracteres',
      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+/.test(v) || 'E-mail deve ser válido',
      ],
      tipo: null,
      items: [
        'Admin',
        'Direção',
        'Secretaria',
        'Pedagogo',
        'Professor',
      ],
    }),
  }
</script>

<style>
</style>
