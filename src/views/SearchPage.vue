<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="SearchPage">
    <section class="container">
      <div class="content">
        <h1 class="title-SearchPage">Compaigns</h1>
        <div class="items">
          <span v-for="_ in 10" class="item">
            <div>
              <a href="#">
                <img src="https://ensany.com/platform_images/1617952762.jpg" alt="">
              </a>
            </div>
            <a href="#">Ramadan campaign (providing iftar meals to the needy in Yemen)</a>
            <span>June 20, 2021</span>
          </span>
        </div>
      </div>
    </section>
    

    <section class="container">
      <div class="content">
        <h1 class="title-SearchPage">news</h1>
        <div class="items">
          <span v-for="_ in 10" class="item">
            <div>
              <a href="#">
                <img src="https://ensany.com/platform_images/campaigns_1677389802_4268.png" alt="">
              </a>
            </div>
            <a href="#">Ramadan campaign (providing iftar meals to the needy in Yemen)</a>
            <span>June 20, 2021</span>
          </span>
        </div>
      </div>
    </section>

    <!-- <section></section> -->
  </div>
</template>


<style lang="scss">
.SearchPage {
  // background-color: #fff;


  >section {
    background-color: #fff;


    margin-top: 25px;
    margin-bottom: 25px;
    border: 1px solid #e5e8f3;
    background: #fff;
    padding: 20px;
    // margin: 0 0 40px;
    border-radius: 0.4rem;

    // >.container {

    >.content {
      border: 1px solid #e5e8f3;
      background: #fff;
      padding: 20px;
      border-radius: 0.4rem;


      div.items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 18px;
        padding: 20px 0;
        padding-top: 12px;

        >.item {
          width: 48%;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 5px 0;

          >div>a>img {
            width: 120px;
            max-height: 100px;
            object-fit: cover;
            border-radius: 8px;
          }

          >a {
            width: fit-content;
            line-height: 24px;
            transition: 0.0s !important;

            &:hover {
              color: #2d3954;
            }
          }

          >span {
            color: #72809d;
            margin-top: -4px;
          }

        }
      }


    }

    // }

  }

  .title-SearchPage {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2d3954;
  }


}


@media (max-width:560px) {
  .SearchPage>section>.content div.items>.item {
    width: 100%;
  }
}
</style>