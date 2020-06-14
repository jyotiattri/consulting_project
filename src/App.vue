<template>
  <div class="container">
     <div class="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
     <router-view></router-view>
      <div>
        <router-link to="/">
        /Home
        </router-link>
        <router-link to="/About">
        /About
        </router-link>
        <router-link to="/Services">
        /Services
        </router-link>
        <router-link to="/Blog">
        /Blog
        </router-link>
        </ul>
                  </nav>
                </div>
    </div>

</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
