<script>
import axios from "axios";
import {ref} from "vue";
import UserCardView from "@/components/CardView.vue";
import {useRoute} from "vue-router";

export default {
  components: {
    UserCardView
  },
  setup() {
    const user = ref({});
    const loading = ref(true)
    const route = useRoute();

    function getUser() {
      axios
          .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            console.log(response.data);
            user.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error)
          });
    }

    getUser()

    return {user, loading}
  }
}
</script>

<template>

  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4">
    <UserCardView :user="user"/>
  </div>
</template>

<style scoped>

</style>