<script setup>
import { ref, onMounted } from 'vue'

//////////////

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// // import required modules
import { Navigation } from "swiper";
const modules = [Navigation];

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

/////////////////////
// const arrOfImg = ref(['https://img-corp.com/images/logo@2x.png', 'https://i.ytimg.com/vi/pSLIDcWsSLU/maxresdefault.jpg', 'https://i.ytimg.com/vi/bgu-ugPATKo/maxresdefault.jpg', 'https://i.ytimg.com/vi/bFaXz7dy13U/hqdefault.jpg', 'https://www.netscribes.com/wp-content/uploads/2020/04/Company-Analysis.jpg', 'https://www.nrdcompanies.com/app/themes/vsbl/public/images/aureoles/ellipse-lower_right-desktop.webp']);
// const arrOfImg = ref(['https://img-corp.com/images/logo@2x.png', 'https://i.ytimg.com/vi/pSLIDcWsSLU/maxresdefault.jpg','https://i.ytimg.com/vi/bgu-ugPATKo/maxresdefault.jpg']);

/////////////////////

</script>

<template>
  <div class="WhoWeProvide">
    <div class="content container">
      <div class="main-title">
        Who we provide our services to (309)
      </div>
      <div class="cards">
        <swiper :slidesPerView="'auto'" :spaceBetween="25" :navigation="true" :modules="modules" class="mySwiper">

          <swiper-slide v-for="(_, i) in 8" :key="i">
            <a aria-label="text content" href="/paragraph_88888">
              <div class="card">
                <a aria-label="text content" href="/paragraph_88888">
                  <!-- <img src="https://ensany.com/platform_images/websites_1674035181_1233.jpg" alt=""> -->
                  <img src="https://front.digital-evolution.online/1MyekkUZNT4NROIzQt3DHJqqBevOGCyAhuuHMuyo.avif" alt="text content">
                  <div class="text">
                    <span>Ehsane Way</span>
                    <div class="shape"></div>
                  </div>
                </a>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <a aria-label="text content" href="/paragraph_88888" class="main-btn---">
        See all associations
        <i class="fa-solid fa-arrow-right"></i>
      </a>

    </div>
  </div>
</template>


<style lang="scss">
.WhoWeProvide {
  // background-color: red;


  .content {
    padding: 85px 0;

    .swiper-slide {

      // width: 350px;
      // width: calc(33% - 4px);
      width: calc(18% - 0px);
      // width: fit-content;

      // margin: 0 40px;
      >a {
        width: 100%;
      }

      .card {
        // background-color: red;
        // width: 195px;
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 0 9.5px 1.2px #ededed;
        height: fit-content;
        // padding: 0 20px;

        >a {
          width: 100%;

          >img {
            width: 100%;
            max-height: 210px;
            border-radius: 8px;
            object-fit: cover;
            // height: 100%;
          }

          >.text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            transition: 0.35s;


            &:hover {
              >span {
                opacity: 1;
              }

              .shape {
                // transform: translate(-50%, -50%) scaleX(1) rotate(45deg);
                transform: translate(-50%, -50%) rotate(45deg);
                width: 150%;

              }
            }

            >span {
              // position: relative;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1;
              // transform: rotate(-45deg);
              opacity: 0;
              transition: opacity 0.3s;
              transition-delay: 0.2s;
              font-weight: 600;
              padding: 0 18px;
              text-align: center;

            }

            .shape {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 150%;
              height: 200%;
              // z-index: 100;
              background-color: var(--Primary-color);
              transition: 0.35s;
              // transition: 0.35s;
              // transform: translate(-50%, -50%) scaleX(0) rotate(45deg);
              transform: translate(-50%, -50%) rotate(45deg);
              width: 0;
            }

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

    //////
    .swiper-wrapper {
      align-items: center;
    }

  }


  .main-btn--- {
    width: fit-content;
    margin: 30px auto;
  }


}


////////////////// 




////////////////// 

@media (max-width: 1030px) {
  .WhoWeProvide .swiper-slide {
    width: calc(30% + 5px) !important;
  }

}

@media (max-width: 675px) {
  .WhoWeProvide {
    padding-left: 35px;
    padding-right: 35px;

    .swiper-slide {
      width: calc(48% - 12px) !important;
    }
  }

}
</style>