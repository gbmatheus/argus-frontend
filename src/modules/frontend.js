import { make } from 'vuex-pathify'

// Icons
import {
  mdiMonitorCellphone,
  mdiMonitorDashboard,
  mdiLogin,
  mdiAccountPlus,
  mdiInformation,
  mdiContacts,
} from '@mdi/js'

const state = {
  drawer: false,
  items: [
    {
      icon: mdiMonitorCellphone,
      text: 'Inicio',
      to: {
        name: 'Home',
      },
    },
    {
      icon: mdiLogin,
      text: 'Login',
      to: {
        name: 'Login',
      },
    },
    {
      icon: mdiAccountPlus,
      text: 'Cadastro',
      to: {
        name: 'Register',
      },
    },
    {
      icon: mdiInformation,
      text: 'Sobre',
      to: {
        name: 'About',
      },
    },
    {
      icon: mdiContacts,
      text: 'Contatos',
      to: {
        name: 'Contact',
      },
    },
    {
      icon: mdiMonitorDashboard,
      text: 'Dashboard',
      to: {
        name: 'Dashboard',
      },
    },
  ],
}

const mutations = make.mutations(state)

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
