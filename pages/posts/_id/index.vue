<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <pre>{{ post.body }}</pre>
        <nuxt-link to="/posts">Voltar para todos os posts</nuxt-link>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data() {
      return {
        post: '',
      }
    },

    async asyncData(context) { //podemos simplicar a chamada usando parametro {params}, tirando o 'context' do link
      let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
      return {post: data}
    },

    head() { //função com callback pode ser renderizada pelo servidor
      return {
          title: `NuxtApp | ${this.post.title}`
      }
    }
  }
</script>
