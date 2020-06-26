<template>
  <div id="app">
    <!-- header -->
    <CategoryComponent />
    <SupportComponent />
    <ServicesComponent />
    <teamComponent />
    <WanttoworkComponent />
    <BlogComponent />
    <Footer />


  </div>
</template>

<script>
import teamComponent from "../components/teamComponent";
import CategoryComponent from "../components/CategoryComponent";
import SupportComponent from "../components/SupportComponent";
import ServicesComponent from "../components/ServicesComponent";
import WanttoworkComponent from "../components/WanttoworkComponent";
import BlogComponent from "../components/BlogComponent";
import Footer from "../components/Footer";

export default {
  name: "App",
  
  components: {
    teamComponent,
    CategoryComponent,
    SupportComponent,
    ServicesComponent,
    WanttoworkComponent,
    BlogComponent,
    Footer,
  },
  computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    goback() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
};
</script>

<style lang="css" src="../styles/style.css"></style>
<style lang="css" src="../styles/bootstrap.min.css"></style>
