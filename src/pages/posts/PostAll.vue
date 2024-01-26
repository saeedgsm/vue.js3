<script >

import {defineComponent, ref} from "vue";
import PostCardView from "@/pages/posts/PostCard.vue";
import axios from "axios";

export default defineComponent({
  components: {PostCardView},
  setup(){
    const posts = ref([]);
    const loading=ref(true);

    function getPosts() {
      axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(function (response) {
            posts.value=response.data;
            loading.value=false;
          })
          .catch(function (error) {
            console.log(error)
          });
    }

    getPosts();

    return {posts,loading}
  }
})
</script>

<template>
  <router-link class="btn btn-info" :to="{name:'postCreate'}">Add Post</router-link>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-6" v-for="post in posts" :key="post.id" >
    <PostCardView :post="post" />
  </div>
</template>

<style scoped>

</style>