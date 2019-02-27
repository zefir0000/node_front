import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedNews: [],
      loadedMem: []
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      setNews(state, news) {
        state.loadedNews = news;
      },
      setMem(state, mem) {
        state.loadedMem = mem;
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('http://localhost:8080/getTopTen')
          .then(res => {
            vuexContext.commit('setPosts', res.data)
            return axios.get('http://localhost:8080/getNews')
              .then(res => {
                vuexContext.commit('setNews', res.data)
                return axios.get('http://localhost:8080/getMems')
                  .then(res => {
                    return vuexContext.commit('setMem', res.data)
                  })
                  .catch(e => context.error(e));
              })
              .catch(e => context.error(e));
          })
          .catch(e => context.error(e));
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      setNews(vuexContext, news) {
        vuexContext.commit("setNews", news);
      },
      setMem(vuexContext, mem) {
        vuexContext.commit("setMem", mem);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedNews(state) {
        return state.loadedNews;
      },
      loadedMem(state) {
        return state.loadedMem;
      }
    },

  });
};

export default createStore;
