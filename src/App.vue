<template>
<div id="App">
<!-- navbar -->
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
                        <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>

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
                  </nav>
                </div>
    </div>
    <div class="container">
       <transition name="moveInUp">
         <router-view/>
       </transition>
        
      </div>
</div>

</template>

<script>
export default {
  name: "App",
   data() {
    return {
     viaJs: require("../assets/img/logo/logo.png"),
      }
    }
};
</script>

<style>
</style>
