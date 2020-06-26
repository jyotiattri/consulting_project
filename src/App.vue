<template>
<div id="App">

  <!-- top header -->
 <div class="header-area">
    <div class="main-header ">
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="col-xl-12">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="header-info-left">
                <ul>
                  <li>
                    <font-awesome-icon icon="clock" /> Mon - SAT: 6.00 am -
                    10.00 pm
                  </li>
                  <li>Sun: Closed</li>
                </ul>
              </div>
              <div class="header-info-right">
                <ul class="header-social">
                  <li>
                    <a href="#"
                      ><font-awesome-icon
                        :icon="{ prefix: 'fab', iconName: 'facebook' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                    ><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'twitter' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'google-plus' }"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- navbar -->
      <div class="header-bottom  header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo -->
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <a href=""
                  ><img :src="viaJs" alt="" /></a
                >
              </div>
            </div>

            <div class="col-xl-10 col-lg-10">
              <div class="menu-wrapper  d-flex align-items-center justify-content-end">
     <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                         <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
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
            </div>

    <div class="container">
       <transition name="moveInUp">
         <router-view></router-view>
       </transition>   
      </div>

</div>
          </div>
      </div>
</div>


</template>

<script>

export default {
  name: "App",
   data() {
    return {
     viaJs: require("./assets/img/logo/logo.png"),
      }
    }
};
</script>

<style>
li.nav-item {
    display: inline-block;
    position: relative;
    z-index: 1;
}
a.nav-link {
	color: #0d2d3e;
	font-weight: 600;
	padding: 39px 19px;
	display: block;
	font-size: 16px;
	-webkit-transition: all 0.3s ease-out 0s;
	-moz-transition: all 0.3s ease-out 0s;
	-ms-transition: all 0.3s ease-out 0s;
	-o-transition: all 0.3s ease-out 0s;
	transition: all 0.3s ease-out 0s;
	text-transform: capitalize;
}
a.nav-link.router-link-exact-active.router-link-active {
    color: #14435c;
}
</style>
