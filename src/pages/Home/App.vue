<template>
  <div id="app">
    <!-- header -->
    <Header />
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
import Header from "../../components/Header";
import teamComponent from "../../components/teamComponent";
import CategoryComponent from "../../components/CategoryComponent";
import SupportComponent from "../../components/SupportComponent";
import ServicesComponent from "../../components/ServicesComponent";
import WanttoworkComponent from "../../components/WanttoworkComponent";
import BlogComponent from "../../components/BlogComponent";
import Footer from "../../components/Footer";

export default {
  name: "App",
  
  components: {
    Header,
    teamComponent,
    CategoryComponent,
    SupportComponent,
    ServicesComponent,
    WanttoworkComponent,
    BlogComponent,
    Footer,
  },
};
</script>

<style lang="css" src="../../styles/style.css"></style>
<style lang="css" src="../../styles/bootstrap.min.css"></style>
