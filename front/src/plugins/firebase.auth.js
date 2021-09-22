import { getAuth } from '~/src/plugins/firebase.js'

export default (context) => {
    const { store } = context

    return new Promise((resolve) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            store.commit('setUser', user)
            resolve()
        })
    })
}