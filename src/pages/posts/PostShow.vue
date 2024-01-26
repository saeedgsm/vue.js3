<script>

import PostCardView from "@/pages/posts/PostCard.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
export default {
  components: {
    PostCardView
  },
  setup() {
    const post = ref({});
    const loading = ref(true)
    const route = useRoute();

    function getPost() {
      axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error)
          });
    }
    getPost()
    return {post, loading}
  }
}
</script>

<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-12">
    <PostCardView :post="post"/>
  </div>
</template>

<style scoped>

</style>