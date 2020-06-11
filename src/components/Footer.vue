<template>
    <div class="footer-area section-bg" :style="cssProps" >
    <div class="container">
        <div class="footer-top footer-padding">
            <div class="row d-flex justify-content-between">
                <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                    <div class="single-footer-caption mb-50">
                        <!-- logo -->
                        <div class="footer-logo">
                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""></a>
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
                                <li><a href="#">Advanced</a></li>
                                <li><a href="#"> Management</a></li>
                                <li><a href="#">Corporate</a></li>
                                <li><a href="#">Customer</a></li>
                                <li><a href="#">Information</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                    <div class="single-footer-caption mb-50">
                        <div class="footer-tittle">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Proparties</a></li>
                                <li><a href="#">Licenses</a></li>
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
</template>
<script>
export default {
    name: "Footer", 
  data() {
      return {
        cssProps: {
          backgroundImage: `url(${require('@/assets/img/gallery/footer_bg.jpg')})`
        }
      }
    }
}
</script>