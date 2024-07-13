<template>
   <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <div class="app-brand demo">
        <a href="" class="app-brand-link">
            <!-- <img :src="url('backend/assets/img/logo.png')" width="100px"> -->
            <span class="app-brand-text demo menu-text fw-bolder ms-2">Blog</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large me-auto d-block d-xl-none">
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
        <!-- Dashboard -->
        <li class="menu-item active">
            <a href="" class="menu-link">
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
            </a>
        </li>

        <!-- users -->
        <li class="menu-item">
            <a :href="route('users.index')" class="menu-link">
            <i class="menu-icon tf-icons bx bx-user"></i>
            <div data-i18n="Users">Users</div>
            </a>
        </li>
        
        <!-- Components -->
        <li class="menu-header small text-uppercase"><span class="menu-header-text">Services</span></li>
        <!-- card -->
        <li class="menu-item">
            <a :href="route('services.index')" class="menu-link">
            <i class="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Services">Services</div>
            </a>
        </li>

        <!-- Components -->
        <li class="menu-header small text-uppercase"><span class="menu-header-text">Blogs</span></li>
        <!-- card -->
        <li class="menu-item">
            <a :href="route('blogs.category.index')" class="menu-link">
            <i class="menu-icon tf-icons bx bx-news"></i>
            <div data-i18n="Categories">Categories</div>
            </a>
        </li>
        <li class="menu-item">
            <a :href="route('blogs.index')" class="menu-link">
            <i class="menu-icon tf-icons bx bx-table"></i>
            <div data-i18n="List">List</div>
            </a>
        </li>
        <li class="menu-item">
            <a :href="route('videos')" class="menu-link">
            <i class="menu-icon tf-icons bx bx-video"></i>
            <div data-i18n="Videos">Videos</div>
            </a>
        </li>

        </ul>
    </aside>
</template>
