<template>
  <div class="categories-area section-padding30">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- Section Tittle -->
          <div class="section-tittle mb-70">
            <span>Our Top Services</span>
            <h2>Our Best Services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6"
          v-for="service in services"
          :key="service.servicename"
        >
          <div class="single-cat text-center mb-50">
            <div class="cat-icon">
              <span :class="service.serviceicon"></span>
            </div>
            <div class="cat-cap">
              <h5>
                <a href="services.html">{{ service.servicename }} </a>
              </h5>
              <p>{{ service.servicedetails }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  data() {
    return {
      services: [
        {
          serviceicon: "flaticon-development",
          servicename: "Strategy Planning",
          servicedetails:
            "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
        },
        {
          serviceicon: "flaticon-result",
          servicename: "Insurance Service",
          servicedetails:
            "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
        },
        {
          serviceicon: "flaticon-team",
          servicename: "Audit & Evaluation",
          servicedetails:
            "There are many variations of passages of lorem Ipsum available but the new majority have suffered.",
        },
      ],
    };
  },
};
</script>
