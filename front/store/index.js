import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "~/plugins/firebase";
export const strict = false

export const state = () => ({
    user: null,
})

export const mutations = {
    setUser(state, payload) {
        state.user = payload
    }
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
    }
}

export const getters = {
    user(state){
        return state.user
    },
    isAuthenticated (state) {
        console.log('inside index', state.user);
        
        return !!state.user
    }
}