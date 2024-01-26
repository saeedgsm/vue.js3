<script>
import {reactive, ref} from "vue";
import axios from "axios";

export default {
  setup(){
    const form = reactive({
      title:"",
      titleErrorText:"",
      body:"",
      bodyErrorText:"",
    });
    const loading=ref(false);

    function validate(){
      if (form.title===''){
        form.titleErrorText='Title is required!';
      }else {
        form.titleErrorText="";
      }
      if (form.body===''){
        form.bodyErrorText='Body is required!';
      }else {
        form.bodyErrorText="";
      }

      if (form.title !=='' && form.body !== ''){
        loading.value=true;
        createPost();
      }
    }

    function createPost() {
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title:form.title,
        body:form.body,
        userId:1
      }).then(function (response){
        loading.value=false;
        console.log(response)
      }).catch(function (error){
        loading.value=false;
        console.log(error)
      })
    }


    return{form,validate,loading}
  }
}
</script>

<template>
 <div class="col-md-6">
   <form @click.prevent="validate">
     <div class="mb-3">
       <label for="exampleInputTitle1" class="form-label">title</label>
       <input type="text" class="form-control" id="exampleInputTitle1" v-model.lazy="form.title" aria-describedby="titleHelp">
       <div id="titleHelp" class="form-text text-danger">{{ form.titleErrorText }}</div>
     </div>
     <div class="mb-3">
       <label for="exampleInputBody1" class="form-label">Body</label>
       <textarea type="text" class="form-control" id="exampleInputBody1" v-model.lazy="form.body"
                 rows="5" aria-describedby="bodyHelp"></textarea>
       <div id="bodyHelp" class="form-text text-danger">{{ form.bodyErrorText }}</div>
     </div>
     <button type="submit" class="btn btn-primary" :disabled="loading">
       <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
       Create Post</button>
   </form>
 </div>
</template>

<style scoped>

</style>