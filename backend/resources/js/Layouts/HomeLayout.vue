<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Head, Link } from '@inertiajs/vue3';


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
});
</script>

<template>
    <Head title="Welcome" />
    <div class="layout-wrapper layout-content-navbar layout-without-menu">
      <div class="layout-container">
        <!-- Layout container -->
        <div class="layout-page">
          <!-- Navbar -->

          <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <!-- Search -->
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center d-none">
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search...">
                </div>
              </div>
              <!-- /Search -->

              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <!-- Place this tag where you want the button to render. -->
                <li class="nav-item lh-1 me-3">
                  <span></span>
                </li>
                
                <!-- User -->
                <li v-if="$page.props.auth.user" class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                      <img :src="$page.props.ziggy.url+'/backend/assets/img/avatars/1.png'" alt="" class="w-px-40 h-auto rounded-circle">
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img :src="$page.props.ziggy.url+'/backend/assets/img/avatars/1.png'" alt="" class="w-px-40 h-auto rounded-circle">
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block" v-if="$page.props.auth.user">{{ $page.props.auth.user.name }}</span>
                            <small class="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                            <a class="dropdown-item" :href="route('profile.edit')">
                                <i class="bx bx-user me-2"></i>
                                <span class="align-middle">My Profile</span>
                            </a>
                            </li>
                            <li>
                            <div class="dropdown-divider"></div>
                            </li>
                            <li>
                            <a class="dropdown-item" :href="route('logout')">
                                <i class="bx bx-power-off me-2"></i>
                                <span class="align-middle">Log Out</span>
                            </a>
                            </li>
                  </ul>
                </li>
                <div v-if="!$page.props.auth.user">
                  <Link
                    :href="route('login')"
                    class="font-semibold btn btn-primary text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                    Log in
                </Link>
                </div>
                <!--/ User -->
              </ul>
            </div>
          </nav>

          <!-- / Navbar -->

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y" id="home">
              <!-- Layout Demo -->
              <div class="layout-demo-wrapper">
                <div class="card-bg container-fluid">
                  <div class="container">
                    <div class="row">
                      
                      <!-- Note: content -->
                      <slot />
                      
                      <!-- End -->
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
                        <a href="https://abduamigo.com" class="footer-link me-4" target="_blank">About</a>
                        <a
                            href="https://abduamigo.com#contact"
                            target="_blank"
                            class="footer-link me-4"
                            >Contact</a
                        >

                  <a
                      href="https://abduamigo.com#contact"
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
</style>