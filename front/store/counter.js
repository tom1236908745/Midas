export const state = () => ({
    counter: 0,
    subCounter: 0,
   })
   
   export const mutations = {
    setIncrease(state, index) {
      if (index === 0) {
        state.counter++
      } else if (index === 1) {
        state.subCounter++
      }
    },
    setDecrease(state, index) {
      if (index === 0) {
        state.counter--
      } else if (index === 1) {
        state.subCounter--
      }
    },
   }
   
   export const getters = {
    counter(state) {
      return state.counter
    },
    subCounter(state) {
      return state.subCounter
    }
   }