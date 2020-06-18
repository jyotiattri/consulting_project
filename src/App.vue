<template>
<div id="App">
<!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/contact">contact</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>



      <div class="header-bottom  header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <a href="index.html"
                  ><img :src="viaJs" alt="" /></a
                >
              </div>
            </div>
            <div class="col-xl-10 col-lg-10">
              <div class="menu-wrapper  d-flex align-items-center justify-content-end">
     <div class="main-menu d-none d-lg-block">
                  <nav>

                     <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
                    <ul id="navigation">
        <li><a
            href="home.html"
          >Home</li>

        <li>
          <a
            href="about.html"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="service.html"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="blog.html"
          >
            Blog
          </a>
          <ul class="submenu">
            <li>
          <a
            href="blog_details.html"
          >
           Blog-Details
          </a>
            </li>
              <li>
          <a
            href="elements.html"
          >
            Elements
          </a>
            </li>
          </ul>
        </li>
       <li>
          <a
            href="contact.html"
          >
            Contact
          </a>
        </li>
        
      </ul>
                  </nav>
                </div>
    </div>
</div>

</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
