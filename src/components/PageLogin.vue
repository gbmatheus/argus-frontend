<template>
  <v-content>
    <v-container>
      <v-row
        align="center"
        class="flex-column"
        justify="center"
      >
        <base-heading v-text="heading" />
        <!-- <v-img
          src="https://www.vinilosconencanto.com/817-large_default/vinilo-decorativo-cine-300-espartano-casco.jpg"
          alt="Vuetify"
        >
        </v-img>-->
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="red darken-4"
              dark
              flat
            >
              <v-toolbar-title>
                Entrar
              </v-toolbar-title>

              <v-spacer />
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  filled
                  label="Email"
                  :prepend-inner-icon="icons.mdiAccount"
                  type="text"
                  color="red darken-4"
                />

                <v-text-field
                  v-model="senha"
                  filled
                  label="Password"
                  :prepend-inner-icon="icons.mdiLock"
                  type="password"
                  color="red darken-4"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn
                small
                color="red darken-4"
                text
              >
                Esqueceu a senha?
              </v-btn>
              <v-spacer />

              <v-btn
                class="btn-p"
                color="red darken-4"
                v-on:click="createPost"
              >
                <span class="white--text">Entrar</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import { mdiAccount, mdiLock } from '@mdi/js'
  // import { mapActions } from 'vuex'
  import Axios from 'axios'

  export default {
    name: 'LoginPage',
    props: {
      heading: {
        type: String,
        default: undefined,
      },
      icon: {
        type: String,
        default: undefined,
      },
    },
    data: () => ({
      login: '',
      senha: '123456',
      email: 'gabrielmatheus2503@gmail.com',
      tipo: 'ADM',
      icons: {
        mdiAccount,
        mdiLock,
      },

    }),
    methods: {
      createPost () {
        console.log('click')
        Axios.post('http://127.0.0.1:8089/auth', {
          email: this.email, password: this.senha,
        })
          .then((response) => {
            alert('Login ', response)
            console.log(response, '  ', this.email)
          })
          .catch((error) => {
            console.log(error)
            alert('Erro ', JSON.stringify(error))
          })
      },
    },
    // data () {
    //   return {
    //     loading: false,
    //     message: null,
    //     user: { email: this.email, password: this.senha },
    //   }
    // },
    // methods: {
    //   ...mapActions(['attemptLogin']),
    //   send() {
    //     const user = this.user
    //     this.loading = true
    //     this.message = null
    //     this.attemptLogin({ ...user })
    //     .then(() => {
    //       this.loading = false,
    //       this.$router.push('/dashboard'),
    //     }).catch(e => {
    //       this.message = e.message,
    //       this.loading = false,
    //     })
    //   }
    // }
  }
</script>

<style>

</style>
