<template>
  <div class="services-area section-padding3">
    <div class="container">
      <div class="row">
        <div class="cl-xl-7 col-lg-8 col-md-10">
          <!-- Section Tittle -->
          <div class="section-tittle mb-70">
            <span>Our Portfolios of cases</span>
            <h2>Featured Case Study</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-sm-10"
          v-for="item in items"
          :key="item.itemname"
        >
          <div class="single-services mb-100">
            <div class="services-img">
              <img :src="item.itemimage" alt="" />
            </div>
            <div class="services-caption">
              <span>{{ item.itemname }}</span>
              <p>
                <a href="#">{{ item.itemdetails }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServicesComponent",
  data() {
    return {
      items: [
        {
          itemimage: require("@/assets/img/gallery/services1.png"),
          itemname: "Strategy planing",
          itemdetails: "Within the construction industry as their overdraft",
        },
        {
          itemimage: require("@/assets/img/gallery/services2.png"),
          itemname: "Insurance Service",
          itemdetails: "Within the construction industry as their overdraft",
        },
        {
          itemimage: require("@/assets/img/gallery/services3.png"),
          itemname: "Audit & Evaluation",
          itemdetails: "Within the construction industry as their overdraft",
        },
        {
          itemimage: require("@/assets/img/gallery/services4.png"),
          itemname: "Documentation",
          itemdetails: "Within the construction industry as their overdraft",
        },
      ],
    };
  },
};
</script>
