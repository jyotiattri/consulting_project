 <template>
    <div class="support-company-area pt-100 pb-100 section-bg fix" :style="cssProps">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="support-location-img">
                        <img :src="viaJs" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="right-caption">
                        <!-- Section Tittle -->
                        <div class="section-tittle section-tittle2 mb-50">
                            <span>Our Top Services</span>
                            <h2>Our Best Services</h2>
                        </div>
                        <div class="support-caption">
                            <p class="pera-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p class="mb-65">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="about.html" class="btn post-btn">More About Us</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SupportComponent",
  data() {
    return {
     viaJs: require("../assets/img/gallery/about.png"),
        cssProps: {
          backgroundImage: `url(${require('@/assets/img/gallery/section_bg02.jpg')})`
        }
      }
    }
    }
</script>