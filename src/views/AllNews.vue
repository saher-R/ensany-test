<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';
///////
// import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
// import '@ocrv/vue-tailwind-pagination/styles';
import Custom_pagination from '../components/Custom_pagination.vue';


/////////////////
////////
const translations = useTranslations(),
  currentLanguage = computed(() => translations.currentLanguage);

//////
// const currentPage = ref(1);
// const perPage = ref(2);
// const total = ref(880);



</script>

<template>
  <div class="TheBlog">

    <div :class='`content-page container ${currentLanguage == "ar" && "rtl"}`'>
      <div>
        <template v-if="currentLanguage == 'ar'">
          كل الأخبار
        </template>
        <template v-if="currentLanguage == 'en'">
          All News
        </template>
        <template v-if="currentLanguage == 'tr'">
          All News
        </template>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" style="user-select: none" class="cards-container">
        <!-- the Slider -->

        <div class='card' v-for="(_, i) in 16" :key="i">
          <div class="card-slider">
            <a href="#">
              <img src="https://ensany.com/platform_images/1609962455.jpeg" alt="">
            </a>
            <h3>
              <a href="#">
                A Better Better Better Place For 130 Orphans In Rumah Amal Limpahan Kasih
              </a>
            </h3>
            <div class="donate-div">

              <a href="#" class="more">
                show more
                <i class="fa-solid fa-arrow-right"></i>
              </a>

              <span>35 May 2023</span>
            </div>
          </div>
        </div>


      </div>

      <!-- {/**************************************************************************/}
      {/**************************************************************************/}
      {/**************************************************************************/} -->
      <!-- <div class="pagination-div" style="padding: 15px 0 25px;">
        <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage"
          @page-changed="currentPage = $event" />

      </div> -->

      <Custom_pagination />

    </div>

  </div>
</template>


<style lang="scss">
.TheBlog {

  .content-page {
    max-width: 1170px;

    &.rtl {
      // background-color: red;
      direction: rtl;

      >*:nth-child(2) .items-container-div>*:nth-child(1) span {
        right: 15px;
        width: fit-content;
      }

      .custom-pagination-component .Pagination-- .rc-pagination-prev {
        rotate: 360deg;
      }

      li.rc-pagination-next {
        rotate: 180deg;
      }
    }

    &>* {
      &:nth-child(1) {
        background-color: #fff;
        // width: 92%;
        margin: 22px auto 10px;
        padding: 10px;
        padding-right: 10px;
        font-size: 0.95rem;
        border-radius: 5px;
        font-size: 1.17rem;
      }

      // the container cards (className: repate-the-cards-camera)
      &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 25px;

      }


      p {
        font-size: 0.97rem;
        padding: 8px 18px;
        color: #444;
        word-spacing: 1.3px;
        letter-spacing: 0.2px;
        margin: 2px 0 16px;
      }



    }


    // ******
    .cards-container {

      // width: 350px;
      // width: calc(33% - 4px);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: start;
      gap: 23px;



      >.card {
        width: calc(33% - 23px);
        ///////// 

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
            font-weight: 600;
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




    }



    //************ */ 
    // .pagination-div {
    //   * {
    //     transition: 0.3s;
    //     animation: for-paganate-scaling 0.35s;
    //   }

    //   input {
    //     background-color: transparent;
    //   }

    //   div>section {
    //     // background-color: red;
    //     justify-content: center;
    //     gap: 15px;

    //     &>* {
    //       &:first-child {}

    //       &:last-child {
    //         scale: 0.92;
    //       }
    //     }

    //     .pr-6 {
    //       // the single item
    //       padding: 0 8px;
    //       user-select: none;

    //       &:first-child>*>*,
    //       &:last-child>*>* {
    //         background-color: #eee;

    //         &:hover {
    //           background-color: #ddd;

    //         }
    //       }
    //     }
    //   }

    //   .active-item {
    //     background-color: rgb(243 219 0) !important;
    //     font-weight: bold !important;
    //   }




    // }


  }



}

// @media (max-width:725px) {
//   .pagination-div {

//     div>section {
//       padding: 20px 5px;
//       flex-direction: column;
//       align-items: center;
//     }
//   }
// }

// @media (max-width:440px) {
//   .pagination-div {

//     div>section {
//       li.pr-6 {
//         padding: 0 5.5px !important;

//         .from-blue-400,
//         .to-indigo-400 {
//           // background-color: red!important;
//         }
//       }
//     }
//   }
// }

.TheBlog {

  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--Primary-2-color), var(--Primary-2-color));
    font-weight: 700;
    color: #fff;
    width: 35px;
    height: 35px;
    padding: 0 !important;
  }

  // .pagination-div a:has(.bg-gradient-to-r) {
  //   pointer-events: none !important;
  // }

  // .content-page.rtl {
  //   .pagination-div {
  //     direction: ltr;
  //   }
  // }

}


.TheBlog {

  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--Primary-2-color), var(--Primary-2-color));
    font-weight: 700;
    color: #fff;
    padding: 15px 16.5px;
  }

  // .content-page.rtl {
  //   .pagination-div {
  //     direction: ltr;
  //   }
  // }

}

@media (max-width:790px) {
  .TheBlog .content-page .cards-container>.card {
    width: 100%;
  }
}
</style>