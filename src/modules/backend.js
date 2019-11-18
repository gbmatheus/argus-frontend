// Utilities
import {
  make,
} from 'vuex-pathify'

// Icons
import {
  mdiAccountMultiple,
  mdiAccountCircle,
  mdiBookOpenPageVariant,
  mdiGoogleClassroom,
  mdiMonitorDashboard,
  mdiSchool,
  mdiFileDocumentBoxMultiple,
  mdiCurrencyUsd,
  mdiFileDocumentBox,
} from '@mdi/js'

const state = {
  drawer: null,
  items: [
    {
      icon: mdiMonitorDashboard,
      text: 'Dashboard',
      to: {
        name: 'Dashboard',
      },
    },
    {
      icon: mdiSchool,
      text: 'Alunos',
      to: {
        name: 'Alunos',
      },
    },
    {
      icon: mdiAccountMultiple,
      text: 'Usuários',
      to: {
        name: 'Usuarios',
      },
    },
    {
      icon: mdiBookOpenPageVariant,
      text: 'Disciplinas',
      to: {
        name: 'Disciplinas',
      },
    },
    {
      icon: mdiGoogleClassroom,
      text: 'Turmas',
      to: {
        name: 'Turmas',
      },
    },
    {
      icon: mdiFileDocumentBoxMultiple,
      text: 'Curriculos',
      to: {
        name: 'Curriculos',
      },
    },
    {
      icon: mdiFileDocumentBox,
      text: 'Pedagogia',
      to: {
        name: 'Pedagogia',
      },
    },
    {
      icon: mdiCurrencyUsd,
      text: 'Financeiro',
      to: {
        name: 'Financeiro',
      },
    },
    {
      icon: mdiAccountCircle,
      text: 'Profile',
      to: {
        name: 'Profile',
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
