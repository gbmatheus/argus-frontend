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
                  id="login"
                  filled
                  label="Login"
                  name="login"
                  :prepend-inner-icon="icons.mdiAccount"
                  type="text"
                />

                <v-text-field
                  id="password"
                  filled
                  label="Password"
                  name="password"
                  :prepend-inner-icon="icons.mdiLock"
                  type="password"
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
              >
                <span class="white--text">ENTRAR</span>
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
      icons: {
        mdiAccount,
        mdiLock,
      },
    }),
  }
</script>

<style>

</style>
