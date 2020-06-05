<template>
  <div id="app">
    <!-- header -->
    <Header />
    <teamComponent />
  </div>
</template>

<script>
import Header from "./components/Header";
import teamComponent from "./components/teamComponent";

export default {
  name: "App",
  components: {
    Header,
    teamComponent: teamComponent
  }
};
</script>

<style lang="css" src="./styles/style.css"></style>
<style lang="css" src="./styles/bootstrap.min.css"></style>
