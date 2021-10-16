import { getAuth, onAuthStateChanged } from '~/plugins/firebase.js'

export default (context) => {
    const { store } = context
    
    return new Promise((resolve) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            store.commit('setUserInfo', user)
            resolve()
        })
    })
}