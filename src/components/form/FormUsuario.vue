<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="8"
      >
        <v-text-field
          v-model="email"
          ref="email"
          :value="usuario.email"
          :placeholder="usuario.email"
          :rules="emailRules"
          label="E-mail"
          filled
          outlined
          required
        />
      </v-col>

      <v-col
        cols="12"
        sm="4"
        md="4"
      >
        <v-select
          v-model="tipo"
          ref="tipo"
          :value="usuario.tipo"
          :placeholder="usuario.tipo"
          :items="tipos"
          :rules="[v => !!v || 'Tipo é obrigatório']"
          label="Tipo usuário"
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
          v-model="login"
          ref="login"
          :value="usuario.login"
          :placeholder="usuario.login"
          :rules="nomeRules"
          label="Login"
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
          ref="loginRpt"
          v-model="loginRpt"
          :rules="nomeRules"
          label="Confirmar login"
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
          v-model="senha"
          ref="senha"
          :value="usuario.senha"
          :placeholder="usuario.senha"
          :rules="nomeRules"
          label="Senha"
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
          ref="senhaRpt"
          v-model="senhaRpt"
          :rules="nomeRules"
          label="Confirmar senha"
          filled
          outlined
          required
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'FormUsuario',
    props: [
      'usuario',
    ],
    data: () => ({
      // valid: false,
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
      tipos: [
        'Adminitrador',
        'Diretor(a)',
        'Secretário(a)',
        'Pedagogo(a)',
        'Professor(a)',
      ],
    }),
    methods: {
      getUsuario () {
        alert({ login: this.login, senha: this.senha, email: this.email, tipo: this.tipo })
        return { login: this.login, senha: this.senha, email: this.email, tipo: this.tipo }
      },
    },
  }
</script>

<style>
</style>
