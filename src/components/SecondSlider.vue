<script setup>
import { onMounted, ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// // import required modules
import { Navigation, Autoplay } from "swiper";
const modules = [Navigation, Autoplay];

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



//////////////////////////



//Translation...////////////////////////////
const translations = useTranslations(),
  SecondSlider_Translations = translations.SecondSlider_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = SecondSlider_Translations.ar;
const en_Lang = SecondSlider_Translations.en;
const tr_Lang = SecondSlider_Translations.tr;

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

/////////////////////////////////





/////////////////////////////////

</script>



<template>
  <!-- <div :class='`SecondSlider ${currentLanguage == "ar" && "rtl"}`'> -->
  <div :class='`SecondSlider contianer ${currentLanguage == "ar" && "rtl"}`'>
    <div class="main-title">الحملات</div>
    <div style="user-select: none" data-aos="fade-up">

      <swiper :slidesPerView="'auto'" :autoplay="{
        delay: 1800,
        disableOnInteraction: true, pauseOnMouseEnter: true,
      }" :spaceBetween="20" :navigation="true" :loop="true" :modules="modules" class="mySwiper">

        <swiper-slide v-for="(_, i) in 8" :key="i">
          <div class="card-slider">
            <a aria-label="text content" href="/paragraph_88888">
              <img src="https://front.digital-evolution.online/1609962455.avif" alt="text content">
            </a>
            <h3>
              <a aria-label="text content" href="/paragraph_88888">
                A Better Better Better Place For 130 Orphans In Rumah Amal Limpahan Kasih
              </a>
            </h3>
            <div class="line-div---">
              <div class="line-persent">
                <div class="number-persent">
                  <div class="number">
                    % 35
                  </div>
                </div>
              </div>
            </div>
            <div class="nums">
              <span>
                <div>
                  <span>USD</span>
                  <span>3580</span>
                </div>
                <div>
                  Target
                </div>
              </span>
              <span>
                <div>
                  <span>USD</span>
                  <span>0</span>
                </div>
                <div>
                  collected
                </div>
              </span>
            </div>
            <div class="donate-div">
              <a aria-label="text content" href="/paragraph_88888" class="donate-now">
                donate now
                <i class="fa-solid fa-gift"></i>
              </a>
              <a aria-label="text content" href="/paragraph_88888" class="more">
                show more
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </swiper-slide>


      </swiper>

    </div>
    <a aria-label="text content" href="/paragraph_88888" className="main-btn---">
      {{ useTheLang.seeAllCampaigns }}
      <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</template>


<style lang="scss" >
.SecondSlider {
  .main-title+div {
    /* background: red; */
    padding: 0 5%;
  }
}

.SecondSlider .carousel__pagination {
  // background-color: red;

}

.SecondSlider {
  // padding: 60px 8px;
  padding: 60px 80px;


  &.rtl {
    // background-color: red;
    direction: rtl;

    .items-container-div {
      direction: rtl;
    }

    .items-container-div>*:nth-child(2) {
      text-align: right;
    }

    .items-container-div>*:nth-child(1) .theLineCardPercent {
      right: 0.5px;
    }

  }

  a.main-btn--- {
    margin: 18px auto !important;
    // display: block !important;
    width: fit-content !important;
    top: 10px;
  }

  ///////


  .swiper-slide {

    // width: 350px;
    width: calc(33% - 12px);

    // margin: 0 40px;
    .card-slider {
      background-color: #fff;
      border-radius: 14px;
      overflow: hidden;
      padding: 9.5px;
      padding-bottom: 25px;
      box-shadow: 0 0 8px #ccc inset;


      >a {
        width: 100%;
        padding: 0 !important;

        >img {
          width: 100%;
          height: 240px;
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
          //
          min-height: 70px; 

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
      top: calc(50% - 18px);

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



@media (max-width: 600px) {
  .SecondSlider {
    .main-title+div {
      padding: 0 1%;
    }
  }
}


//******************** */
@media (max-width: 1200px) {
  .SecondSlider {
    padding-left: 0;
    padding-right: 0;
  }

}

@media (max-width: 1030px) {
  .SecondSlider .swiper-slide {
    width: calc(50% - 12px);
  }

}

@media (max-width: 675px) {
  .SecondSlider .swiper-slide {
    width: calc(100% - 12px);
  }

}
</style>