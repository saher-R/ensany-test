<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';
///////
// import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
// import '@ocrv/vue-tailwind-pagination/styles';
import Custom_pagination from '../components/Custom_pagination.vue';

//Translation...////////////////////////////
const translations = useTranslations(),
  Campaigns_Translations = translations.Campaigns_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = Campaigns_Translations.ar;
const en_Lang = Campaigns_Translations.en;
const tr_Lang = Campaigns_Translations.tr;

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

//Translation...////////////////////////////
const translations2 = useTranslations(),
  GeneralSec_Translations = translations2.GeneralSec_Translations;

const ar_Lang2 = GeneralSec_Translations.ar;
const en_Lang2 = GeneralSec_Translations.en;
const tr_Lang2 = GeneralSec_Translations.tr;

let useTheLang2 = computed(() => checkLocaleStorageLang2());

function checkLocaleStorageLang2() {
  switch (currentLanguage.value) {
    case "en":
      return en_Lang2;
    case "ar":
      return ar_Lang2;
    case "tr":
      return tr_Lang2;
    default:
      return en_Lang2;
  }
}
/////////////////////////////////

//////
const currentPage = ref(1);
const perPage = ref(2);
const total = ref(880);


// const currentSelectType = ref(1);

// const titleOfCartiforiesType = ref('All Categories');

// const arrOfSelectTypes = ref([
//   {
//     id: 1,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 2,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 3,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 4,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 5,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 6,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
//   {
//     id: 7,
//     text() {
//       return `Category -- type - ${this.id}`
//     }
//   },
// ]);

// function selectCati(item) {
//   currentSelectType.value = item.id;
//   titleOfCartiforiesType.value = item.text();
//   //
//   document.querySelector('.Campaigns #touch--').click();
// }


// for select-2
const countries = ref(["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"]);

const searchSelect_Country = ref('');

const spanCurrent_Country = ref('');

const openSelect_Country = ref(false);




</script>

<template>
  <div class="Campaigns">

    <div :class='`content-page container ${currentLanguage == "ar" && "rtl"}`'>
      <div class="section-top">
        <div class="title">{{ useTheLang.title }}</div>


        <div class="input-div">
          <div :class="`wrapper ${openSelect_Country && 'active'}`">
            <div class="select-btn" @click="openSelect_Country = !openSelect_Country">
              <span>{{ spanCurrent_Country == '' ? 'All Carigories' : spanCurrent_Country }}</span>
              <i class="fa-solid fa-angle-up"></i>
            </div>
            <div class="content">
              <div class="search">
                <i class="uil uil-search"></i>
                <input spellcheck="false" type="text" placeholder="Search" v-model="searchSelect_Country"
                  id="searchCountry">
              </div>
              <ul class="options">
                <li v-for="item in countries"
                  :class="`${item.toLowerCase() == spanCurrent_Country.toLowerCase() && 'selected'}`" @click="() => {
                    selectCountry = item;
                    spanCurrent_Country = item
                    openSelect_Country = false
                  }" v-show="item?.trim().toLowerCase().includes(searchSelect_Country.trim().toLowerCase())">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div>
          <label for="touch--">
            <span>{{ titleOfCartiforiesType }}</span>
          </label>
          <input type="checkbox" id="touch--" />

          <ul class="slide">
            <li v-for="(item, i) in arrOfSelectTypes" @click="selectCati(item)"
              :class="`${currentSelectType == item?.id && 'selected'}`">
              <a href="#">{{ item?.text() }}</a>
            </li>
          </ul>
          
        </div> -->




      </div>

      <div class="cards">
        <div class="repate-the-cards-camera" data-aos="fade-up">
          <!-- {[...Array(6)].map((_, i) => ( -->
          <div v-for='_ in 7' class="items-container-div">
            <a href="#">
              <img src="https://ensany.com/platform_images/1609962455.jpeg" alt="">
            </a>
            <h3>
              <a href="#">
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
              <a href="#" class="donate-now">
                donate now
                <i class="fa-solid fa-gift"></i>
              </a>
              <a href="#" class="more">
                show more
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <!-- ))} -->
        </div>
      </div>

      <!-- {/**************************************************************************/}
      {/**************************************************************************/}
      {/**************************************************************************/} -->
      <!-- <CustomPagination pageSize={pageItemsCount} total={total_items} currentPage={currentPage}
        setCurrentPage={setCurrentPage} /> -->

      <!-- <div class="pagination-div" style="padding: 15px 0 25px;">
        <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage"
          @page-changed="currentPage = $event" />

      </div> -->



      <Custom_pagination />


    </div>

  </div>
</template>


<style lang="scss">
.Campaigns {

  .content-page {

    &.rtl {
      direction: rtl;
    }

    // &>* {
    .section-top {
      background-color: #fff;
      // width: 92%;
      margin: 22px auto 10px;
      padding: 10px;
      font-size: 0.95rem;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;

      ///////
      >div.title {
        transform: translateY(9px);
        padding: 0 5px;
        font-weight: 500;
      }

      // &>div:last-child {
      //   text-align: center;
      //   border-radius: 6px;
      //   overflow: hidden;
      //   border: 2px solid var(--Primary-lite-color);
      // }

      // span {
      //   padding: 10px;
      //   // border-bottom: 2px solid var(--Primary-so-lite-color);

      //   font-size: 0.95rem;
      //   cursor: pointer;
      //   display: block;

      //   &::after {
      //     float: right;
      //     right: 10%;
      //     content: "+";
      //     margin-left: 14px;
      //     font-size: 1.2rem;
      //     margin-top: -5px;
      //     filter: drop-shadow(0 0 0.4px #000);
      //   }
      // }

      // .slide {
      //   clear: both;
      //   width: 100%;
      //   // height: 0;
      //   max-height: 0;
      //   overflow: hidden;
      //   text-align: center;
      //   transition: max-height .55s ease;
      //   // max-height: 80vh;

      //   li {
      //     transition: 0.2s;
      //     border-bottom: 1px solid var(--Primary-so-lite-color);
      //     padding-top: 5px;

      //     &.selected {
      //       background-color: #ddd;
      //       pointer-events: none;
      //     }

      //     &:nth-child(1) {
      //       // border-top: 2px solid var(--Primary-color);
      //     }

      //     a {
      //       text-decoration: none;
      //       padding: 8px 30px;
      //       color: #2d2f31;
      //       width: 100%;
      //     }

      //     &:hover {
      //       background-color: var(--Primary-so-lite-color);
      //       border-bottom: 1px solid var(--Primary-color);
      //     }
      //   }
      // }

      // #touch-- {
      //   position: absolute;
      //   scale: 0;

      //   &:checked+.slide {
      //     // height: 233px;
      //     // height: 267.5px;
      //     max-height: 52vh;
      //     overflow: auto;

      //   }
      // }

      >.input-div {
        // flex-direction: column;
        // gap: 2px;
        width: 340px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;


        label {
          font-size: 1.15rem;
          color: #607195;
          width: fit-content;
        }

        input {
          padding: 12px 12px;
          border: 2px solid transparent !important;
          border-radius: 2.5px !important;
          width: 100%;
          // background-color: red;
          padding-left: 15px !important;
          padding-right: 15px !important;

          // &#phone_NGO {
          //   padding-left: 50px;
          // }

          &::placeholder {
            color: #ccc;
            font-size: 0.955rem;
          }

          &:focus {
            border: 2px solid #707e9c !important;
          }

          &#searchCountry,
          &#searchCity {
            border-color: #ddd !important;


            &:focus {
              border: 2px solid #707e9c !important;
            }
          }

        }


        ////////////////////
        /// for select-2 
        .wrapper {
          // width: 370px;
          // margin: 85px auto 0;
        }

        .select-btn,
        li {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .select-btn {
          padding: 12px 15px;
          font-size: 1rem;
          color: #999;
          background: #fff;
          border-radius: 7px;
          justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 0 5.5px 2px rgba(0, 0, 0, 0.068);

          span {
            // background-color: red;
            color: #2d3954;
            // font-weight: 600;
            font-size: 0.955rem;
          }
        }

        .select-btn i {
          font-size: 25px;
          color: #666;
          transition: transform 0.3s linear;
          filter: drop-shadow(0 -7.5px 0 #ddd);
        }

        .wrapper.active .select-btn i {
          transform: rotate(-180deg);
        }

        .content {
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
          padding: 20px;
          padding-top: 13px;
          position: absolute;
          top: 107%;
          width: 100%;
          z-index: 1000;
          background: #fff;
          border-radius: 7px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .wrapper.active .content {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
        }

        .content .search {
          position: relative;
        }

        .search i {
          top: 50%;
          left: 15px;
          color: #999;
          font-size: 20px;
          pointer-events: none;
          transform: translateY(-50%);
          position: absolute;
        }

        .search input {
          height: 50px;
          width: 100%;
          outline: none;
          font-size: 17px;
          border-radius: 5px;
          padding: 0 20px 0 43px;
          border: 1px solid #B3B3B3;
        }

        .search input:focus {
          padding-left: 42px;
          border: 2px solid #4285f4;
        }

        .search input::placeholder {
          color: #bfbfbf;
        }

        .content .options {
          margin-top: 10px;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 7px;
        }

        .options::-webkit-scrollbar {
          width: 7px;
        }

        .options::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 25px;
        }

        .options::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 25px;
        }

        .options::-webkit-scrollbar-thumb:hover {
          background: #b3b3b3;
        }

        .options li {
          font-size: 1.12rem;
          padding: 8px;
        }

        .options li:hover,
        li.selected {
          border-radius: 5px;
          background: #f2f2f2;
        }


      }


    }

    // the container cards (className: repate-the-cards-camera)
    >.cards {

      // 
      .repate-the-cards-camera {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        gap: 22px;
        padding: 22px 0;
        // >* {
        //   width: 340px;
        // }


        // margin: 0 40px;
        .items-container-div {
          width: calc(33% - 12px);
          max-width: 350px;
          background-color: #fff;
          border-radius: 14px;
          overflow: hidden;
          padding: 9.5px;
          padding-bottom: 25px;
          box-shadow: 0 0 25px #e4e4e4;
          transition: 0.145s;


          &:hover {
            box-shadow: 2.5px 1px 32px #c3c3c3;

          }

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
            // 
            font-size: 1.06rem;
            font-weight: 700;

            a {
              display: -webkit-box !important;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              // 
              color: #2a3144 !important;
              padding-top: 14px;
              // 
              font-weight: 600;
              font-size: 1.08rem;

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
    }


    p {
      font-size: 0.97rem;
      padding: 8px 18px;
      color: #444;
      word-spacing: 1.3px;
      letter-spacing: 0.2px;
      margin: 2px 0 16px;
    }



    // }


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

    @keyframes for-paganate-scaling {
      0% {
        scale: 0;
      }
    }

  }



}

.custom-pagination-component {
  // direction: ltr;
}




@media (max-width:1200px) {
  .Campaigns .items-container-div {
    width: 300px !important;
  }
}

@media (max-width:990px) {
  .Campaigns .items-container-div {
    width: 370px !important;
  }
}

@media (max-width:800px) {
  .Campaigns .items-container-div {
    width: 450px !important;
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

@media (max-width:560px) {
  .Campaigns .content-page .section-top {
    flex-direction: column;
    gap: 24.5px;

    .input-div {
      width: 100%;
    }

  }

  .Campaigns .content-page>.cards .repate-the-cards-camera {
    padding-top: 4px;
  }

}

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


.Campaigns {

  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--Primary-2-color), var(--Primary-2-color));
    font-weight: 700;
    color: #fff;
    width: 35px;
    height: 35px;
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


@media (min-width: 1400px) {
  .container {
    max-width: 1140px;
  }
}
</style>