<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

//////////////////////////
const activeContent = ref("content1");
function handleTabClick(tabNumber) {
  activeContent.value = tabNumber;
}

/////////////////////////////**************************************
// FOR Donors..........
// from the api
//
//*** Array.from(Array(25)) Similar To  [...Array(25)]
const allOfDonors = ref([...Array(25)]);
///
const arrOfDonors = ref(allOfDonors.value.slice(0, 4));
const currNumberCalled = computed(() => arrOfDonors.value.length);

/////////
const refScroll = ref();

function increseDonorsByNum(_num) {
  if (currNumberCalled.value == undefined) return;
  else if (currNumberCalled.value == 0) return 'No Donors';
  else if (currNumberCalled.value < 5) {
    arrOfDonors.value = allOfDonors.value.slice(0, _num * 2);
  } else if (currNumberCalled.value < 9) {
    arrOfDonors.value = allOfDonors.value.slice(0, _num * 3);
  } else if (currNumberCalled.value < 13) {
    arrOfDonors.value = allOfDonors.value.slice(0, _num * 4);
  } else if (currNumberCalled.value < 17) {
    arrOfDonors.value = allOfDonors.value.slice(0, _num * 5);
  } else if (currNumberCalled.value < 21) {
    //to get all items.
    arrOfDonors.value = allOfDonors.value.slice();
  }
  //////
  if (currNumberCalled.value <= allOfDonors.value.length + 1) {
    const element = document.querySelector(".SingleDonationPage .p3 button");

    const positionBtn =
      element.getBoundingClientRect().top + window.scrollY - 350;

    window.scrollTo({
      top: positionBtn,
      behavior: "smooth",
    });
  }
}


/////////////////////////////**************************************
// FOR Pictures..........
// from the api
const arrOfPictures = ref([
  "https://www.arageek.com/wp-content/uploads/2155.jpg",
  "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1395/01/05/139501051259356767397484.jpg",
  "https://img.youm7.com/ArticleImgs/2019/2/1/83668-%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-(3).jpg",
  "https://img.youm7.com/ArticleImgs/2019/2/1/58030-%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-(4).jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0GXZyw69WD2IMEjXXT_gatupPVT7hRjQMg&usqp=CAU",
  "https://www.dreamboxgate.com/imgcache/2014/290849_dreambox-sat.com.jpg",
]);

/////////////////////////////**************************************
// FOR Pictures..........
// from the api
const arrOfUpdates = ref([...Array(4)]);
////// 


//Translation...////////////////////////////
const translations = useTranslations(),
  TheSwitchBtnSec_Translations = translations.TheSwitchBtnSec_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = TheSwitchBtnSec_Translations.ar;
const en_Lang = TheSwitchBtnSec_Translations.en;
const tr_Lang = TheSwitchBtnSec_Translations.tr;

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
/////////////////////////////////////////////



</script>

<template>
  <div class="TheSwitchBtnSec">
    <div class="button-container">
      <button :class='`btn ${activeContent === "content1" && "active"}`' @click="handleTabClick('content1')">
        {{ useTheLang.description }}
      </button>
      <button :class='`btn ${activeContent === "content2" && "active"}`' @click="handleTabClick('content2')">
        {{ useTheLang.pictures }}
      </button>
      <button :class='`btn ${activeContent === "content3" && "active"}`' @click="handleTabClick('content3')">
        {{ useTheLang.donors }}
      </button>
      <button :class='`btn ${activeContent === "content4" && "active"}`' @click="handleTabClick('content4')">
        {{ useTheLang.updates }}
      </button>
    </div>

    <!-- {/*******************************/} -->
    <div class="content-container">
      <!-- {/* content1 */} -->
      <div :class='`content the-donors-section ${activeContent === "content1" && "active"}`'>
        HTML Sent...
      </div>

      <!-- {/* content2 */} -->
      <div :class='`content ${activeContent === "content2" && "active"}`'>
        <div class="pictures-section">
          <img v-for="(imgUrl, i) in arrOfPictures" :src="imgUrl" alt="" :key="i">
        </div>
      </div>

      <!-- {/* content3 */} -->
      <div :class='`content ${activeContent === "content3" && "active"}`'>
        <!-- {/* p3 */} -->
        <div class="p3">
          <i class="fa-solid fa-arrow-trend-up"></i>
          <span>69 {{ useTheLang.donate }}</span>

          <div ref='refScroll' style="overflow: auto;">

            <div v-for="(_, i) in arrOfDonors" class="person_donater" :key='i'>
              <div class="the-i-">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="the-info">
                <div>Mohamed Nazir Bin Mohd Yusof</div>
                <div>
                  <span>MYR 12000.00</span>
                  <span>منذ 2 أيام</span>
                </div>
              </div>
            </div>

          </div>

          <button @click='increseDonorsByNum(4)'>
            <template v-if="currNumberCalled == allOfDonors.length">
              {{ useTheLang.allDisplayed }}
            </template>
            <template v-else>
              {{ useTheLang.seeMore }}
            </template>
          </button>

        </div>
      </div>

      <!-- {/* content4 */} -->
      <div :class='`content ${activeContent === "content4" && "active"}`'>
        <div class="updates-section">
          <div v-for="(_, i) in arrOfUpdates">
            <h4>اضافات في المستلمين في المدرسة</h4>
            <div>HTML Sent</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.TheSwitchBtnSec {

  background-color: #fff;
  padding: 18px 20px 20px;


  .button-container {
    display: flex;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 12px;

    .btn {
      background-color: #999;
      color: #fff;
      // margin: 0 3px;
      text-shadow: 0 0 16px #444;
      font-weight: 600;
      font-size: 1.05rem !important;

      &.active {
        background-color: var(--Primary-color);
        text-shadow: 0.85px 0.5px 3.35px #000;
      }
    }
  }

  .content-container {
    // border: 1px solid #bbb;

    .content {
      display: none;
    }

    .content.active {
      display: block;
      animation: dfff 0.7s;
    }

    @keyframes dfff {
      0% {
        filter: blur(6px);
        opacity: 0;
        transform: scaleY(0.85) skew(9deg);
        transform-origin: top;
        border-radius: 30px;
      }
    }


    //********************
    // .the-donors-section {
    .p3 {
      padding: 18px 20px;

      &>i {
        padding: 12px 11px;
        background-color: var(--Primary-dark-color);
        color: #fff;
        border-radius: 50%;
        margin-bottom: 8px;
      }

      &>span {
        margin: 0 16px;
        font-size: 0.985rem;
        font-weight: 600;
        color: var(--black-light);
      }

      .person_donater {
        display: flex;
        margin: 9px 0;
        border-bottom: 0.5px solid #eee;
        padding-bottom: 5.5px;

        &>*:nth-child(1) {

          i {
            width: 40px;
            height: 40px;
            padding: 11px 13px;
            background-color: var(--Primary-lite-2-color);
            color: var(--Primary-color);
            border-radius: 50%;

          }
        }

        // &>*:nth-child(2) { OR }
        .the-info {
          margin-left: 14px;

          // background-color: red;
          &>*:nth-child(1) {
            text-align: right;
          }

          &>*:nth-child(2) {
            margin: 5.5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {

              // margin: auto;
              &:nth-child(1) {
                font-weight: 600;
                color: var(--black) !important;
                font-size: 0.925rem;
              }

              &:nth-child(2) {
                color: var(--black-light) !important;
              }
            }

          }
        }

      }

      button:last-child {
        margin-right: 70px;
        background-color: var(--black-light);
        padding: 4px 12px;
        // outline: 3.5px solid #999;
        border: 3.5px solid var(--Primary-dark-color);
        font-size: 1.05rem !important;
        font-weight: 600;
        letter-spacing: 2px;
        transition: 0.2s;

        &:hover {
          border: 3.5px solid var(--Primary-lite-color);
        }
      }

    }



    ////////////////////
    .pictures-section {

      // width: 600px;
      img {
        display: block;
        width: 95%;
        margin: 20px auto;
        border-radius: 10px;
        box-shadow: 0 0 15px var(--black-light);
        object-fit: cover;
      }
    }

    // }


    ////////////////////
    .updates-section {
      &>div {
        padding: 12px 18px;

        h4 {
          padding: 5px 0;
        }

        p {
          line-height: 27px;
        }

      }

    }



  }






}
</style>