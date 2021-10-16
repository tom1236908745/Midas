import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '~/plugins/firebase'
export const strict = false

export const state = () => ({
  user: {
    uid: null,
    email: '',
    name: '',
  },
})

export const mutations = {
  setUserInfo(state, payload) {
    state.user.email = payload?.email
    state.user.uid = payload?.uid
  },
  setUserName(state, payload) {
    state.user.name = payload
  },
}

export const actions = {
  signUp({ commit }, { auth, email, password }) {
    return createUserWithEmailAndPassword(auth, email, password)
  },

  signInWithEmail({ commit }, { auth, email, password }) {
    return signInWithEmailAndPassword(auth, email, password)
  },

  signOut({ commit }, { auth }) {
    return signOut(auth)
  },
}

export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user.uid
  },
}
