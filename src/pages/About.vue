<template>
  <div>
    <AboutOurMisson />
    <ServicesComponent />
  </div>
</template>

<script>
import AboutOurMission from "../components/AboutOurMission";
import ServicesComponent from "../components/ServicesComponent";
export default {
  name: "About",
  components: {
    AboutOurMission,
    ServicesComponent
  }
};
</script>
