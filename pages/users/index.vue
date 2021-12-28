<template>
    <div class="users-child">
        <h1>Users page!</h1>
        <div class="form-group">
            <input type="text" class="form-control" v-model="id">
            <button class="btn btn-dark" @click="LoadUser">Load user</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: ''
        }
    },

    methods: {
        LoadUser() {
            return this.$router.push(`/users/${this.id}`)
        }
    }
}
</script>

<style>
    .users-child {
        background-color: azure;
    }
</style>