<template>
  <div>
    <h1>Hello world!</h1>
    <no-ssr>
      <v-select v-model="selected" placeholder="Selecione a categoria" :options="['foo', 'bar']"></v-select>
    </no-ssr>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
export default {
  name: 'IndexPage',

  data() {
    return {
      selected: '',
    }
  }
}
</script>
