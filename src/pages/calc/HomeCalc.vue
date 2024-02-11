<script setup>
import SearchContact from "@/pages/calc/SearchContact.vue";
</script>

<template>
  <div class="d-flex justify-content-center">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#all-contents" type="button" role="tab" aria-controls="all-contents" aria-selected="true">همه مخاطبین</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#search-content" type="button" role="tab" aria-controls="search-content" aria-selected="false">جستجو</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#add-content" type="button" role="tab" aria-controls="add-content" aria-selected="false">افزودن مخاطب</button>
      </li>
    </ul>
  </div>
    <div class="row">
      <div class="tab-content" id="myTabContent">
        <div class="d-flex justify-content-center tab-pane fade show active" id="all-contents" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <div class="card  mx-5" style="height: 200px;width: 345px">
            <SearchContact></SearchContact>
          </div>
        </div>
        <div class="tab-pane fade" id="search-content" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="add-content" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
      </div>
    </div>



</template>

<style scoped>

</style>