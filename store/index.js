import axios from 'axios'

/**
 * Criando uma store para posts
 */
export const state = () => ({
  posts: {}
});

/**
 * Getters
 */
export const getters = {
  posts(state) {
    return state.posts
  }
}

/**
 * Mutations
 */
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

/**
 * Actions
 */
export const actions = {
  async nuxtServerInit() {
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    commit("SET_POSTS", data)
  }

//   setPosts({ commit }, posts) {
//       commit("SET_POSTS", posts)
//   }
}
