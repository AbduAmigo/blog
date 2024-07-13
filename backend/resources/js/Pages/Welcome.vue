<script setup>
import { Head } from '@inertiajs/vue3';
import { reactive } from 'vue';
import { router } from '@inertiajs/vue3';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    blogOnly: {
        type: Object,
        default: () => ({}),
    },
    blogs: {
        type: Object,
        default: () => ({}),
    },
    categories: {
        type: Object,
        default: () => ({}),
    }
});
</script>

<template>
    <Head title="Blog" />
    <div class="layout-wrapper layout-content-navbar layout-without-menu bg-white">
      <div class="layout-container">
        <!-- Layout container -->
        <div class="layout-page">
          

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y" id="home">
              <!-- Layout Demo -->
              <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
                  <div class="container">
                      <a class="navbar-brand" href="#!">am!go Blog</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                              <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Blog</a></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              
              <div class="layout-demo-wrapper">
                <div class="container">
                  <div class="row">
                      <!-- Blog entries-->
                      <div class="col-lg-8">
                          <!-- Featured blog post-->
                          <div class="card mb-4" :key="blogOnly.id">
                              <a :href="`/blogs/${blogOnly.id}`"><img class="card-img-top" :src="`/public/blogs/${blogOnly.image}`" alt="..."></a>
                              <div class="card-body">
                                  <div class="small text-muted">{{blogOnly.date}}</div>
                                  <h2 class="card-title">{{blogOnly.title}}</h2>
                                  <p class="card-text">{{blogOnly.content}}</p>
                                  <a class="btn btn-primary" :href="`/blogs/${blogOnly.id}`">Read more →</a>
                              </div>
                          </div>
                          <!-- Nested row for non-featured blog posts-->
                          <div class="row">
                              <div class="col-lg-6" v-for="blog in blogs" :key="blog.id">
                                  <!-- Blog post-->
                                  <div class="card mb-4">
                                      <a :href="`/blogs/${blog.id}`" v-if="blog.type == 'text'">
                                        <img class="card-img-top" :src="`/public/blogs/${blog.image}`">
                                      </a>
                                      <a :href="`/blogs/${blog.id}`" v-if="blog.type == 'video'">
                                        <img class="card-img-top" :src="`${blog.thumbnail}`">
                                      </a>
                                      <div class="card-body">
                                          <div class="small text-muted">{{blog.date}}</div>
                                          <h2 class="card-title h4">{{blog.title}}</h2>
                                          <p class="card-text">{{blog.content}}</p>
                                          <a class="btn btn-primary" :href="`/blogs/${blog.id}`">Read more →</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- Side widgets-->
                      <div class="col-lg-4">
                          <!-- Search widget-->
                          <div class="card mb-4">
                              <div class="card-header">Search</div>
                              <div class="card-body">
                                  <div class="input-group">
                                      <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search">
                                      <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                                  </div>
                              </div>
                          </div>
                          <!-- Categories widget-->
                          <div class="card mb-4">
                              <div class="card-header">Categories</div>
                              <div class="card-body">
                                  <div class="row">
                                      <div class="col-sm-6" v-for="category in categories" :key="category.id">
                                          <ul class="list-unstyled mb-0">
                                              <li><a href="#!">{{category.name}}</a></li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
              </div>
              </div>
              <!--/ Layout Demo -->
            </div>
            <!-- / Content -->

            <!-- Footer -->
            <footer class="content-footer footer">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                        ©
                        2024
                        , made with ❤️ by
                        <a href="https://abduamigo.com" target="_blank" class="footer-link fw-bolder">Abdalla A</a>
                        </div>
                        <div>
                        <a href="https://abduamigo.com/about" class="footer-link me-4" target="_blank">About</a>
                        <a
                            href="https://abduamigo.com#contact"
                            target="_blank"
                            class="footer-link me-4"
                            >Contact</a
                        >

                  <a
                      href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                      target="_blank"
                      class="footer-link me-4"
                      >Support</a
                  >
                  </div>
              </div>
            </footer>
            <!-- / Footer -->

            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>
    </div>
</template>

<style>
div .layout-navbar{
  background-color: transparent !important;
  backdrop-filter: none;
}
[type=radio] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  outline: 2px solid #655dbb;
}
.custom{
  background-color: white;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #655DBB;
  border-radius: 10px;
}
.custom .svg{
  height: inherit;
}
</style>