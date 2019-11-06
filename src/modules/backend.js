// Utilities
import {
  make,
} from 'vuex-pathify'

// Icons
import {
  mdiAccount,
  mdiAccountCircle,
  mdiBookOpenPageVariant,
  mdiGoogleClassroom,
  mdiMonitorDashboard,
  mdiSchool,
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
      icon: mdiAccount,
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
