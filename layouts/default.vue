<template>
    <div class="container">
        <nav-component></nav-component>
        <div class="jumbotron"></div>
        <Nuxt/>
    </div>
</template>

<script>
import NavComponent from '/components/NavComponent.vue'
export default {
    components: {
        NavComponent
    }
}
</script>

<style>

</style>