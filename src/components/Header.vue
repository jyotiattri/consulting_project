<template>
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
              <div
                class="menu-wrapper  d-flex align-items-center justify-content-end"
              >
                <!-- Main-menu -->
                <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul class="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Element</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- Mobile Menu -->
            <div class="col-12">
              <div class="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
 
};
</script>
