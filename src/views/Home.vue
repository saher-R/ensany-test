<script setup>
import MainSlider from '../components/MainSlider.vue';
import NumbersCompany from '../components/NumbersCompany.vue';
import SecondSlider from '../components/SecondSlider.vue';
import GeneralSec from '../components/GeneralSec.vue';
import FromOurBlog from '../components/FromOurBlog.vue';
import Categories from '../components/Categories.vue';
import CollectDonations from '../components/CollectDonations.vue';
import OurPartners from '../components/OurPartners.vue'
import WhoWeProvide from '../components/WhoWeProvide.vue'
import QuickDonation from '../components/QuickDonation.vue'
///////////////////// 



</script>

<template>
  <div class="home">
    <!-- <router-link to="/about">Go to About</router-link> -->
    <!--******-->
    <MainSlider />
    <NumbersCompany />
    <SecondSlider />
    <Categories />
    <GeneralSec />
    <CollectDonations />
    <FromOurBlog />
    <OurPartners />
    <WhoWeProvide />
    <!--********-->
    <QuickDonation />

  </div>
</template>


<style lang="scss" scoped>
.ppX {
  // background-color: red;
  // font-size: 3rem;

}
</style>
