<template>
  <div>
      <h1>This is an id {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
    validate(context) { //podemos trocar context por {params}, assim, o acessando diretamente
        return /^\d+$/.test(context.params.id)
    }
}
</script>
