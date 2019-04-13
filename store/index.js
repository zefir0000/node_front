import Vuex from "vuex";
import { getUser } from "../api";

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLogged: false,
      user: null
    },

    mutations: {
      authUser(state, isLogged) {
        state.isLogged = isLogged
      },
      userData(state, user) {
        state.user = user
      }
    },

    actions: {
      async nuxtServerInit(vuexContext, { req }) {
        if (req.session.passport) {
          if (req.session.passport.user){
            req.session.user = req.session.passport.user
          }
        }
        if (req.session.user) {
          const userData = await getUser(req.session.user)
          vuexContext.commit('userData', userData)
          vuexContext.commit('authUser', true)

        } else {
          vuexContext.commit('userData', null)
          vuexContext.commit('authUser', false)
        }
      },
      async logout({ commit }) {
        commit('userData', null)
        commit('authUser', false)
      }
    },

    getters: {
      isLogged(state) {
        return state.isLogged;
      },
      user(state) {
        return state.user;
      }
    },
  });
};

export default createStore;
