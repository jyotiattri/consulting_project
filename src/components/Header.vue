<template>
  <div class="header-area">
    <div class="main-header ">
      <div class="header-top d-none d-lg-block">
        <div class="container">
          <div class="col-xl-12">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="header-info-left">
                <ul>
                  <li>
                    <font-awesome-icon icon="clock" /> Mon - SAT: 6.00 am -
                    10.00 pm
                  </li>
                  <li>Sun: Closed</li>
                </ul>
              </div>
              <div class="header-info-right">
                <ul class="header-social">
                  <li>
                    <a href="#"
                      ><font-awesome-icon
                        :icon="{ prefix: 'fab', iconName: 'facebook' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"
                    ><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'twitter' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'linkedin' }"
                    /></a>
                  </li>
                  <li>
                    <a href="#"><font-awesome-icon 
                      :icon="{ prefix: 'fab', iconName: 'google-plus' }"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
   data () {
    return {
      title: 'Home',
    }
   }
};
</script>
