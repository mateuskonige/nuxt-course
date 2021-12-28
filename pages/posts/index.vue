<template>
  <div>
    <h2>Making API request | Vue way</h2>
    <hr>
    <div class="container row">
      <CardComponent class="mx-auto" v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import CardComponent from '../../components/CardComponent.vue'

  export default {
    components: {
      CardComponent,
    },

    data() {
      return {
        posts: '',
      }
    },

    async asyncData() {
      let {
        data
      } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      return {
        posts: data
      }
    },

    head: {
      title: 'NuxtApp | Lista de posts'
    }

    // data() {
    //     return {
    //         posts: [],
    //     }
    // },
    // mounted() {
    //     axios.get('')
    //     .then(response => {
    //         console.log(response.data)
    //         this.posts = response.data
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
  }

</script>
