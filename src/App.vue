<template>
<div id="App">
  <main>

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
     <div class="main-menu">
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


</div>
          </div>
      </div>
       <transition name="moveInUp">
         <router-view></router-view>
       </transition> 
        <div class="footer-area section-bg" :style="cssProps" >
    <div class="container">
        <div class="footer-top footer-padding">
            <div class="row d-flex justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                    <div class="single-footer-caption mb-50">
                        <!-- logo -->
                        <div class="footer-logo">
                            <a href=""><img  :src="footer" alt=""></a>
                        </div>
                        <div class="footer-tittle">
                            <div class="footer-pera">
                                <p class="info1">Receive updates and latest news direct from Simply enter.</p>
                            </div>
                        </div>
                        <div class="footer-number">
                            <h4><span>+564 </span>7885 3222</h4>
                            <p>youremail@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Location </h4>
                            <ul>
                                <li><router-link to="/management">Management</router-link></li>
                                <li><router-link to="/advanced">Advanced</router-link></li>
                                <li><router-link to="/corporate">Corporate</router-link></li>
                                <li><router-link to="/customer">Customer</router-link></li>
                                <li><router-link to="/information">Information</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Explore</h4>
                            <ul>
                              <li><router-link to="/cookies">Cookies</router-link></li>
                              <li><router-link to="/about">About</router-link></li>
                              <li><router-link to="/privacy">Privacy Policy</router-link></li>
                              <li><router-link to="/properties">Properties</router-link></li>
                              <li><router-link to="/licenses">Licenses</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Location</h4>
                            <div class="footer-pera">
                                <p class="info1">Subscribe now to get daily updates</p>
                            </div>
                        </div>
                        <!-- Form -->
                        <div class="footer-form">
                            <div id="mc_embed_signup">
                                <form target="_blank" action="#" method="get" class="subscribe_form relative mail_part" novalidate="true">
                                    <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " class="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'">
                                    <div class="form-icon">
                                        <button type="submit" name="submit" id="newsletter-submit" class="email_icon newsletter-submit button-contactForm">
                                            SIGN UP
                                        </button>
                                    </div>
                                    <div class="mt-10 info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-xl-9 col-lg-8">
                    <div class="footer-copy-right">
                      <p>All rights are reserved</p>  
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                    <!-- Footer Social -->
                    <div class="footer-social f-right">
                        <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'twitter' }"
                    /></a>
                        <a href="#"><font-awesome-icon
                        :icon="{ prefix: 'fab', iconName: 'facebook' }"
                    /></a>
                        <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                    /></a>
                        <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'google-plus' }"
                    /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>   
          </main>
</div>


</template>

<script>

export default {
  name: "App",
   data() {
    return {
     viaJs: require("./assets/img/logo/logo.png"),
     footer: require("./assets/img/logo/logo2_footer.png"),
     cssProps: {
          backgroundImage: `url(${require('@/assets/img/gallery/footer_bg.jpg')})`
        }
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
	font-weight: 400;
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
