<template>
  <div>
      <h4>Este título é visto em todas as páginas de Posts</h4>
      <nuxt-child/>
      <button class="btn btn-danger" v-scroll-to="'body'">Voltar ao topo</button>
  </div>
</template>

<script>
export default {

}
</script>