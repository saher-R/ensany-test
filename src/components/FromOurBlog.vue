<script setup>
import { computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';
// import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

///////////////////////

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// // import required modules
import { Navigation, Autoplay } from "swiper";
const modules = [Navigation, Autoplay];

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


//Translation...////////////////////////////
const translations = useTranslations(),
  FromOurBlog_Translations = translations.FromOurBlog_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = FromOurBlog_Translations.ar;
const en_Lang = FromOurBlog_Translations.en;
const tr_Lang = FromOurBlog_Translations.tr;

let useTheLang = computed(() => checkLocaleStorageLang());

function checkLocaleStorageLang() {
  switch (currentLanguage.value) {
    case "en":
      return en_Lang;
    case "ar":
      return ar_Lang;
    case "tr":
      return tr_Lang;
    default:
      return en_Lang;
  }
}

////////////////////////
// const settings = {
//   // itemsToShow: 1,
//   wrapAround: true,
// }
// const breakpoints = {
//   1: {
//     itemsToShow: 1,
//   },
//   810: {
//     itemsToShow: 2,
//   },
//   1185: {
//     itemsToShow: 3,
//   },
//   1123: {
//     itemsToShow: 3,
//   },

//   1400: {
//     itemsToShow: 5,
//   },
// }




</script>

<template>
  <div :class='`FromOurBlog container ${currentLanguage == "ar" && "rtl"}`'>
    <div class="main-title" style='margin-bottom: 10px'>
      {{ useTheLang.title }}
    </div>
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" style="user-select: none">
      <!-- the Slider -->
      <!-- <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="slide in 12" :key="slide">
          <div className="container-card">
            <div>
              <img
                src="https://media.istockphoto.com/id/1283154274/photo/woman-holding-cardboard-donation-box-full-with-folded-clothes.jpg?s=612x612&w=0&k=20&c=bqJFhv_hRXV3Milqrmuh54eyIiScjgqP6z0iwnnT84I="
                alt="" />
            </div>
            <div className="second-div">
              <a href="javascript:;">Server-Side Rendering</a>
              <div>
                <a href="javascript:;">SPORT</a>
                <p>21 Dec 16</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel> -->

      <swiper :slidesPerView="'auto'" :autoplay="{
        delay: 1800,
        disableOnInteraction: true, pauseOnMouseEnter: true,
      }" :spaceBetween="42" :navigation="true" :loop="true" :modules="modules"
        class="mySwiper">

        <!-- <swiper-slide v-for="(item, i) in ['Food & Drinks', 'Vegetables', 'Dried Foods', 'Bread & Cake', 'Fish & Meat']" -->
        <swiper-slide v-for="(_, i) in 8" :key="i">
          <a aria-label="text content" href="/paragraph_88888">
            <div class="card-slider">
              <a aria-label="text content" href="/paragraph_88888">
                <!-- <img src="https://ensany.com/platform_images/1609962455.jpeg" alt=""> -->
                <img src="https://front.digital-evolution.online/1609962455.avif" alt="text content">
              </a>
              <h3>
                <a aria-label="text content" href="/paragraph_88888">
                  A Better Better Better Place For 130 Orphans In Rumah Amal Limpahan Kasih
                </a>
              </h3>

              <div class="donate-div">

                <a aria-label="text content" href="/paragraph_88888" class="more">
                  show more
                  <i class="fa-solid fa-arrow-right"></i>
                </a>

                <span>35 May 2023</span>

              </div>
            </div>
          </a>
        </swiper-slide>


      </swiper>

    </div>
  </div>
</template>


<style lang="scss">
.FromOurBlog {

  &.rtl {
    // background-color: red;
    direction: rtl;
    text-align: right;

    .second-div {
      >*:nth-child(2) {
        justify-content: end;
        flex-direction: row-reverse;

        * {
          margin-left: 8px;
        }
      }
    }
  }

  padding: 20px 100px 60px;
  // background-color: transparent!important;


  .swiper {
    padding: 0 10px;
  }

  .swiper-slide {

    // width: 350px;
    // width: calc(33% - 4px);
    width: calc(31% - 4px);

    // margin: 0 40px;
    >a {
      width: 100%;
    }

    .card-slider {
      background-color: #fff;
      border-radius: 14px;
      overflow: hidden;
      padding: 9.5px;
      padding-bottom: 25px;
      box-shadow: 0 0 10px #ccc;
      margin: 10px 0;

      >a {
        width: 100%;
        padding: 0 !important;
        position: relative;
        // background-color: red;
        // width: 200%;

        >img {
          width: 100%;
          height: 175px;
          object-fit: cover;
          border-radius: 14px 14px 3.5px 3.5px;
        }


      }

      >*:not(img) {
        padding: 0 12px;
      }

      >h3 {
        font-size: 1.08rem;
        color: #30384e !important;
        font-weight: 800;
        line-height: 27.5px;
        word-spacing: 0.82px;
        letter-spacing: 0.7px;
        overflow: hidden;

        a {
          display: -webkit-box !important;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          // 
          color: #2a3144 !important;
          padding-top: 14px;

          &:hover {
            color: #505972 !important;
          }
        }
      }

      .line-div--- {
        width: calc(100% - 40px);
        height: 6px;
        border-radius: 3px;
        background-color: #e2e5e8;
        position: relative;
        margin: 20px auto;


        .line-persent {
          position: absolute;
          left: 0;
          width: 30%;
          height: 100%;
          border-radius: 3px;
          background-color: var(--Primary-color);

        }

        .number-persent {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -25px;

          .number {
            background-color: red;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 1px 8px;
            letter-spacing: 0.8px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 0 15px #bbb;
            min-width: 50px;
          }

        }
      }

      >.nums {
        display: flex;
        justify-content: space-between;
        // padding: 5px 15px;
        margin: 15px 0;
        font-size: 0.975rem;
        color: #3d4c69;


        >span {
          display: flex;
          flex-direction: column;
          gap: 1px;

          // align-items: center;
          >div {
            display: flex;
            gap: 4px;

            &:nth-child(1) {
              font-weight: 600;
              justify-content: center;
            }
          }
        }
      }

      >.donate-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 22px;
        padding-top: 12px;
        border-top: 1px solid #2a31441a;

        .donate-now {
          padding: 10px 16px;
          background-color: var(--Primary-color);
          border-radius: 20px;
          display: flex !important;
          align-items: center;
          gap: 5.5px;
          color: #fff;
          font-weight: 600;
          text-shadow: 0 0 1.5px #888;

          >i {
            margin-top: -2.5px;
          }
        }

        .more {
          display: flex !important;
          align-items: center;
          gap: 5px;
          color: #3d4c69;
        }

        >span {
          color: #555;
          padding: 8px 14px;
          border-radius: 7px;
          background-color: #00000006;
          letter-spacing: 0.5px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 0 3.5px 1px #0000001a;
        }

      }

    }


  }



  .swiper-button {

    &-next,
    &-prev {
      background: #fff;
      right: 8px;
      border-radius: 50%;
      width: 40px;
      box-shadow: 0 0 9px #777;
      top: calc(50% + 3.5px);

      &:hover {
        box-shadow: 0 0 6px #333;
      }

      &::after {
        font-size: 1.2rem;
        color: #000;
        font-weight: 600;
        scale: 1.2;
      }
    }

  }

  .swiper-button-prev {
    left: 4px;
    right: auto;
  }


}



@media (max-width:700px) {
  .FromOurBlog {
    padding: 20px 22px 60px;

  }
}

////////////////// 

@media (max-width: 1030px) {
  .FromOurBlog .swiper-slide {
    width: calc(50% - 12px);
  }

}

@media (max-width: 675px) {
  .FromOurBlog .swiper-slide {
    width: calc(100% - 12px);
  }

}
</style>