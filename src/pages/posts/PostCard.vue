<script >
export default {
  props:{
    post:Object
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <router-link :to="{name:'postId',params:{id:post.id}}">{{ post.title }}</router-link>
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>{{ post.body}}</p>
      </blockquote>
      <router-link class="btn btn-warning" :to="{name:'postEdit',params:{id:post.id}}">Edit Post</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>