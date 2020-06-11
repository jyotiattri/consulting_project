 <template>
     <section class="wantToWork-area w-padding2 section-bg" :style="cssProps">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-xl-7 col-lg-9 col-md-8">
                    <div class="wantToWork-caption wantToWork-caption2">
                        <h2>Are you Searching<br> For a First-Class Consultant?</h2>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4">
                    <a href="#" class="btn btn-black f-right">More About Us</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "WanttoworkComponent",
     data() {
    return {
        cssProps: {
          backgroundImage: `url(${require('@/assets/img/gallery/section_bg03.jpg')})`
        }
    }
}
}
</script>
