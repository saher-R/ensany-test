<script setup>
import { computed, onMounted, ref, onUnmounted, watch } from 'vue'
import { useTranslations } from '../stores/useTranslations';
import TheSwitchBtnSec from '../components/TheSwitchBtnSec.vue';
// import Modal from '../Custom_Components/Modal.vue';
// import
// import 
import Modal from '../Custom_Components/Modal.vue';
//////////////////// 


const openModal_1 = ref(false);
const openModal_2 = ref(false);
const openModal_3 = ref(false);

function toggleModal1() {
  openModal_1.value = !openModal_1.value;
}

function toggleModal2() {
  openModal_2.value = !openModal_2.value;
}

function toggleModal3() {
  openModal_3.value = !openModal_3.value;
}

const refScroll1 = ref();
const refScroll2 = ref();




/////////////////////////////**************************************
// FOR Donors..........
// from the api
const allOfDonors = ref([...Array(25)]);
///////
const arrOfDonors = ref(allOfDonors.value.slice(0, 4));
const currNumberCalled = computed(() => arrOfDonors.value.length);
/////////

watch(arrOfDonors, () => {
  const elementX = refScroll1.value;
  setTimeout(() => {
    elementX.scroll({ top: elementX.scrollHeight, behavior: 'smooth' })
  }, 1)
})


function increseDonorsByNum(_num) {
  if (currNumberCalled.value == undefined) return;
  else if (currNumberCalled.value == 0) return 'No Donors'
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
  // refScroll1.scrollIntoView({ block: "end", behavior: "smooth" });
}


// from the api
const allOfDonors2 = ref([...Array(9)]);
///////
const arrOfDonors2 = ref(allOfDonors2.value.slice(0, 4));
let currNumberCalled2 = computed(() => arrOfDonors2.value.length);
/////////

watch(arrOfDonors2, () => {
  const elementX = refScroll2.value;
  setTimeout(() => {
    elementX.scroll({ top: elementX.scrollHeight, behavior: 'smooth' })
  }, 1)
})

function increseDonorsByNum2(_num) {
  if (currNumberCalled2.value == undefined) return;
  else if (currNumberCalled2.value == 0) return 'No Donors'
  else if (currNumberCalled2.value < 5) {
    arrOfDonors2.value = allOfDonors2.value.slice(0, _num * 2);
  } else if (currNumberCalled2.value < 9) {
    arrOfDonors2.value = allOfDonors2.value.slice(0, _num * 3);
  } else if (currNumberCalled2.value < 13) {
    arrOfDonors2.value = allOfDonors2.value.slice(0, _num * 4);
  } else if (currNumberCalled2.value < 17) {
    arrOfDonors2.value = allOfDonors2.value.slice(0, _num * 5);
  } else if (currNumberCalled2.value < 21) {
    //to get all items.
    arrOfDonors2.value = allOfDonors2.value.slice();
  }

}



//////////////// 
onMounted(() => {
  window.addEventListener("scroll", fixedDonation);

  function fixedDonation() {
    let nav = document.querySelector(
      ".SingleDonationPage .donate-now-section"
    );
    /////
    let detailsSection = document.querySelector(
      ".SingleDonationPage .details-section"
    );
    if (-document.body.getBoundingClientRect().top > 120) {
      nav.classList.add("fixed-when-scroll");
      //
      detailsSection.style.width = "calc(100% - 366px)";
    } else {
      nav.classList.remove("fixed-when-scroll");
      //
      detailsSection.style.width = "100%";
    }
  }

});










//Translation...////////////////////////////
const translations = useTranslations(),
  SingleDonationPage_Translations = translations.SingleDonationPage_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = SingleDonationPage_Translations.ar;
const en_Lang = SingleDonationPage_Translations.en;
const tr_Lang = SingleDonationPage_Translations.tr;

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


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const countdownDate = new Date("2023-11-23").getTime();

onMounted(() => {
  const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      countdown.value = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      countdown.value = {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }, 1000);

});


/////
const isCopied = ref(true);

function copyTheText() {
  navigator.clipboard.writeText('https://ensany.com/ar/1663915792');
  isCopied.value = false;
  setTimeout(() => {
    isCopied.value = true;
  }, 2000);

}



const currentPercentDontae = ref(120);

  /////////////////////


















////////////////// 
</script>

<template>
  <div class="SingleDonationPage">

    <div :class='`content-page ${currentLanguage == "ar" && "rtl"}`'>
      <!-- {/*****************************************/} -->
      <!-- {/* details-section */} -->
      <div class="details-section">
        <div class="img-big-div">
          <img src="https://www.newarab.com/sites/default/files/2022-11/GettyImages-1244286473.jpg" alt="" />
          <div class="short-info">
            <a href="">صحة و طوارئ</a>
            <h2>حملة شتاء دافئ في الشمال السوري</h2>
            <div class="line-div">
              <div class="the-current-area"
                :style="{ width: `${currentPercentDontae > 100 ? '100%' : `${currentPercentDontae}%`}` }">
                <div class="percent-num-div">{{ currentPercentDontae > 100 ? '100%' : `${currentPercentDontae}%` }}</div>
              </div>
            </div>
          </div>
          <div class="times-div">
            <li>
              <span>{{ countdown.days }}</span>
              <span>{{ useTheLang.days }}</span>
            </li>
            <li>
              <span>{{ countdown.hours }}</span>
              <span>{{ useTheLang.hours }}</span>
            </li>
            <li>
              <span>{{ countdown.minutes }}</span>
              <span>{{ useTheLang.minutes }}</span>
            </li>
            <li>
              <span>{{ countdown.seconds }}</span>
              <span>{{ useTheLang.seconds }}</span>
            </li>
          </div>
        </div>
        <!-- {/*******************************************/} -->
        <div class="date-of-donation">
          <div>
            {{ useTheLang.collected }}:<span>USD 1603</span>
          </div>
          <div>
            {{ useTheLang.days }}:<span>52</span>
          </div>
          <div>
            {{ useTheLang.donate }}
            <span>83</span>
          </div>
          <div>
            {{ useTheLang.campaignObjective }}:<span>USD 2222</span>
          </div>
        </div>
        <!-- {/************/} -->
        <a href="">
          <div>
            <img src='../assets/logo-light.png' alt="" />
          </div>
          <span>{{ useTheLang.ENSANY_GLOBAL }}</span>
        </a>
        <div>
          <div class="share-donate">
            <a href="#">{{ useTheLang.donateNow }}</a>
            <a href="#" @click="toggleModal3">
              {{ useTheLang.shareNow }}
            </a>
          </div>
          <div class="lang-btns">

            <!--  -->
            <div>
              <a class='active' href="#" @click="translations.currentLanguage = 'ar'">العربية</a>
              <a href="#" @click="translations.currentLanguage = 'tr'">Türkçe</a>
            </div>
            <!--  -->

          </div>
        </div>

        <!-- {/************/} -->
        <TheSwitchBtnSec />

      </div>

      <!-- {/*****************************************/} -->
      <!-- {/* donate-now-section */} -->
      <div class="donate-now-section">
        <!-- {/* p1 */} -->
        <div class="p1">
          <h3>8516 USD</h3>
          <span>{{ useTheLang.collected }}</span>
          <div class="the-line--container">
            <div class="the-line-"></div>
          </div>
          <div>69 {{ useTheLang.donate }}</div>
        </div>

        <!-- {/* p2 */} -->
        <div class="p2">
          <a href="javascript:;" @click="toggleModal3">
            <i class="fa-solid fa-share"></i>
            {{ useTheLang.shareNow }}
          </a>
          <a href="javascript:;">
            {{ useTheLang.makeYourDonationToTheOneYouLove }}
          </a>
          <a href="javascript:;">{{ useTheLang.donateNow }}</a>
        </div>

        <!-- {/* p3 */} -->
        <div class="p3">
          <i class="fa-solid fa-arrow-trend-up"></i>
          <span>69 {{ useTheLang.donate }}</span>
          <!-- {/* */} -->
          <div class="person_donater">
            <div class="the-i-">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div class="the-info">
              <div>Hanna Kadir</div>
              <div>
                <span>MYR 30.00</span>
                <span>{{ useTheLang.recentDonation }}</span>
              </div>
            </div>
          </div>

          <div class="person_donater">
            <div class="the-i-">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div class="the-info">
              <div>Mohamed Nazir Bin Mohd Yusof</div>
              <div>
                <span>MYR 12000.00</span>
                <span>{{ useTheLang.topDonation }}</span>
              </div>
            </div>
          </div>

          <div class="person_donater">
            <div class="the-i-">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div class="the-info">
              <div>Emad Barakat</div>
              <div>
                <span>MYR 100.00</span>
                <span>{{ useTheLang.firstDonation }}</span>
              </div>
            </div>
          </div>
          <!-- {/* */} -->
        </div>

        <!-- {/* p4 */} -->
        <div class="p4">
          <a href="javascript:;" @click="toggleModal1">
            {{ useTheLang.viewAll }}
          </a>
          <a href="javascript:;" @click="toggleModal2">
            {{ useTheLang.topDonors }}
          </a>
        </div>
      </div>


      <!-- Modal 1 -->
      <Modal :open="openModal_1" :toggleModal="toggleModal1">
        <div class="modal-1">
          <div class="p3">
            <h3>{{ useTheLang.allDonors }}</h3>
            <a class="donate-now-btn" href="#">{{ useTheLang.donateNow }}</a>
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>69 {{ useTheLang.donate }}</span>
            <!-- {/* */} -->

            <div ref="refScroll1" style="overflow: auto; max-height: 55vh; margin: 14px 0 ;">
              <div v-for="(_, i) in arrOfDonors" class="person_donater" :key='i'>
                <div class="the-i-">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div class="the-info">
                  <div>Mohamed Nazir Bin Mohd Yusof</div>
                  <div>
                    <span>MYR 12000.00</span>
                    <span>منذ 5 أيام</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; padding-top: 6px;">
              <button @click='increseDonorsByNum(4)'>
                <template v-if="currNumberCalled === allOfDonors.length">
                  {{ useTheLang.alldisplayed }}
                </template>
                <template v-else>
                  {{ useTheLang.viewMore }}
                </template>
              </button>
              <button @click="toggleModal1"
                style="scale: 0.93; border-radius: 20px!important; background-color: #9f9f9f; margin-right: 12px;">
                {{ useTheLang.btn_close }}
              </button>
            </div>

          </div>

        </div>
      </Modal>

      <!-- Modal 2 -->
      <Modal :open="openModal_2" :toggleModal="toggleModal2">
        <div class="modal-1">
          <div class="p3">
            <h3>{{ useTheLang.topDonors }}</h3>
            <a class="donate-now-btn" href="#">{{ useTheLang.donateNow }}</a>
            <i class="fa-solid fa-arrow-trend-up"></i>
            <span>69 {{ useTheLang.donate }}</span>

            <div ref="refScroll2" style="overflow: auto; max-height: 55vh; margin: 14px 0 ;">
              <div v-for="(_, i) in arrOfDonors2" class="person_donater" :key='i'>
                <div class="the-i-">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div class="the-info">
                  <div>Mohamed Nazir Bin Mohd Yusof</div>
                  <div>
                    <span>MYR 12000.00</span>
                    <span>منذ 3 أيام</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; padding-top: 6px;">
              <button @click='increseDonorsByNum2(4)'>
                <template v-if="currNumberCalled2 === allOfDonors2.length">
                  {{ useTheLang.alldisplayed }}
                </template>
                <template v-else>
                  {{ useTheLang.viewMore }}
                </template>
              </button>
              <button @click="toggleModal2"
                style="scale: 0.93; border-radius: 20px!important; background-color: #9f9f9f; margin-right: 12px;">
                {{ useTheLang.btn_close }}
              </button>
            </div>

          </div>
        </div>
      </Modal>

      <!-- Modal 3 -->
      <Modal :open="openModal_3" :toggleModal="toggleModal3">
        <div class="modal-2">
          <div class="p3">
            <div>
              <h4>{{ useTheLang.helpUsBySharingTheCampaign }}</h4>
              <i class="fa-solid fa-xmark" @click="toggleModal3"></i>
            </div>
            <p>{{ useTheLang.p1_modal }} </p>
            <div class="icons-div">
              <a href="">
                <img src="../assets/icons-social-media/icon-facebook.png" alt="" />
                <span>{{ useTheLang.facebook }}</span>
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-twitter.png' alt="" />
                <span>{{ useTheLang.twitter }}</span>
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-telegram.png' alt="" />
                <span>{{ useTheLang.telegram }}</span>
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-whatsapp.png' alt="" />
                <span>{{ useTheLang.whatsapp }}</span>
              </a>
            </div>
            <div class="copy-link-div">
              <input type="text" value="https://ensany.com/ar/1663915792" readOnly />
              <button @click="copyTheText">
                <template v-if="isCopied">
                  {{ useTheLang.copyLink }}
                </template>
                <span v-else
                  style="display: inline-block; scale: 1.1; width: 100px; padding: 4px; animation: span-anim-copy-div 4s;">
                  {{ useTheLang.linkCopied }}
                </span>
              </button>
            </div>
            <div>
              <b>{{ useTheLang.tips }}</b>
              {{ useTheLang.tip1 }}
            </div>
            <div>
              <a href="">
                <img src='../assets/icons-social-media/icon-instagram.png' alt="" />
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-slack.png' alt="" />
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-youtube.png' alt="" />
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-tik-tok.png' alt="" />
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-linktree.png' alt="" />
              </a>
              <a href="">
                <img src='../assets/icons-social-media/icon-ellipsis.png' alt="" />
              </a>
            </div>
          </div>
        </div>
      </Modal>

    </div>

  </div>
</template>


<style lang="scss">
.SingleDonationPage {

  .content-page {
    display: flex;
    padding: 25px 80px 80px;
    gap: 35px;
    min-height: 1500px;

    &.rtl {
      direction: rtl;

      .donate-now-section.fixed-when-scroll {
        left: 5%;
      }

      .details-section .img-big-div .short-info .line-div .the-current-area .percent-num-div {
        // right: -25px;
        // text-align: left;
        // left: -25px;
        right: 97%;
        border-radius: 8px 30px 30px 8px;
      }
    }


    .details-section {
      border: 2px solid var(--Primary-dark-color);
      width: 100%;
      background-color: #fff;
      // overflow: hidden;

      // 
      .img-big-div {
        img {
          width: 100%;
          height: 100%;
          max-height: 500px;
          object-fit: cover;
        }

        position: relative;

        .short-info {
          position: absolute;
          bottom: 3.2px;
          right: 0;
          width: 100%;
          background: linear-gradient(360deg, #000000b8, transparent);

          width: 100%;

          a {
            padding: 5px 20px 6px;
            margin: 0 25px;
            border-radius: 30px;
            background-color: var(--Primary-dark-color);
            color: #fff;
          }

          h2 {
            font-size: 1.365rem;
            font-weight: 800;
            color: #fff;
            text-shadow: 0 0 8px #111;
            margin: 10px 15px 18px;
          }

          // 
          .line-div {
            width: 100%;
            height: 8px;
            background-color: #bbb;

            .the-current-area {
              position: relative;
              width: 17%;
              height: 100%;
              background-color: var(--Primary-lite-color);
              animation: cccX 1.1s infinite;

              @keyframes cccX {
                0% {
                  background-color: var(--Primary-lite-color);
                }

                30% {
                  background-color: var(--Primary-lite-2-color);
                  box-shadow: 0 0 10px #555 inset;
                  // scale: 1.1;
                  transform: scaleY(1.3) scaleX(1.02);
                }

                100% {
                  background-color: var(--Primary-lite-color);

                }
              }

              .percent-num-div {
                position: absolute;
                top: 35%;
                right: -25px;
                transform: translateY(-50%);
                background-color: var(--Primary-dark-color);
                border-radius: 30px 8px 8px 30px;
                padding: 3.5px 6.5px;
                color: #fff;
                font-weight: 600;
                font-size: 0.8rem;
                text-shadow: 0.8px 1.5px 2.6px #00000023;
                animation: cccXX 1.3s infinite;
                min-width: 45px;

                @keyframes cccXX {
                  0% {
                    scale: 0.9;
                  }

                  50% {
                    scale: 1;
                  }

                  100% {
                    scale: 0.9;
                  }

                }

              }
            }
          }

        }

        .times-div {
          position: absolute;
          top: 30px;
          left: 30px;

          display: flex;
          gap: 7px;

          li {
            display: flex;
            gap: 1.5px;
            flex-direction: column;
            background-color: #0000004a;
            color: #fff;
            padding: 6px 7px;
            border-radius: 3px;
            box-shadow: 0 0 2px #aaa;

            >span {
              &:first-child {
                letter-spacing: 1px;
                color: #fff;
                font-weight: 900;
                font-size: 1.1rem;
              }
            }

          }
        }

      }

      ////// 
      //*****************************************************************************
      .date-of-donation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-items: start;
        text-align: center;
        padding: 30px 30px 18px;
        background-color: #fff;

        &>div {
          color: var(--black);
          font-size: 1.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-wrap: wrap;
          padding: 0 7px;

          span {
            color: var(--Primary-color);
            font-weight: 600;
            text-shadow: 0.5px 1px 0.5px #666;
            padding: 5px;
            font-size: 1.23rem;
            // justify-self: start;

          }
        }
      }

      &>*:nth-child(3) {
        display: flex !important;
        // justify-content: space-around; 
        align-items: center;
        gap: 10px;
        padding: 12px 8px 0;
        background-color: #eee;
        border-top: 1px solid #ccc;
        border-radius: 18px 18px 0 0;

        &>div:first-child {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #fff;
          border: 1px solid #d4deea;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        span {
          font-weight: 800;
          font-size: 1.08rem;
          color: #444;
        }


      }

      &>*:nth-child(4) {
        display: flex;
        justify-content: space-between;
        padding: 16px 7px;
        background-color: #eee;

        a {
          font-size: 0.95rem !important;
          padding: 8px 18px;
          border-radius: 18px !important;
          margin: 0 3px;
          font-weight: 600;
          background-color: var(--Primary-2-color);
          color: #fff;

          &:first-child {
            // background-color: var(--Socndary-color);
            outline: 2px solid var(--Primary-color);
            outline-offset: 2.5px;
            margin: 0 8px;
          }

          &:last-child {
            background-color: var(--Socndary-color);
          }

        }

        >div.lang-btns {

          // background-color: red;
          a {
            background-color: #666;
            font-weight: 400;
            text-shadow: none;

            outline: 0;

            &.active {
              outline: 2px solid var(--Primary-color);
            }

          }
        }
      }

      >.lang-btns {}

    }

    //////////////////////////// 

    .donate-now-section {
      max-width: 366px;
      width: 100%;
      border: 2px solid var(--Primary-dark-color);
      padding: 15px 25px;
      background-color: #fff;
      height: fit-content;
      // margin: 0 auto;
      z-index: 9;

      &.fixed-when-scroll {
        // position: fixed;
        position: sticky;
        top: 85px;
        right: 5%;
        // z-index: 1;

        // &:hover {
        //   z-index: 2;
        // }
      }

      .p1 {
        h3 {
          display: inline-block;
          margin: 0 3px 0 7px;
        }

        .the-line--container {
          width: 96%;
          height: 5px;
          background-color: #ddd;
          border-radius: 2px;
          margin: 12px 0 15px;
          position: relative;
          overflow: hidden;

          .the-line- {
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 100%;
            width: 25%;
            background-color: var(--Primary-color);
          }
        }

        >*:nth-child(4) {
          // background-color: red;
          font-size: 0.95rem;
          color: #555;
        }

      }

      .p2 {
        padding: 20px 0;

        a {
          width: 100%;
          display: block;
          padding: 10px;
          margin-bottom: 15px;
          text-align: center;
          color: #fff;
          font-weight: 700;
          background-color: var(--Primary-dark-color);
          border-radius: 30px;
          transition: 0.12s;
          font-size: 0.92rem;

          &:not(:last-child) {
            background-color: var(--Socndary-color);
          }

          &:hover {
            scale: 1.025;
          }

          &:nth-child(1) {
            i {
              margin: 0 5px;
            }
          }

          &:nth-child(3) {
            outline: 4.5px solid var(--Primary-lite-color);
            outline-offset: 3.8px;
          }
        }

      }

      .p3 {
        &>i {
          padding: 12px 11px;
          background-color: var(--Primary-dark-color);
          color: #fff;
          border-radius: 50%;
        }

        &>span {
          margin: 0 8px;
          font-size: 0.985rem;
          font-weight: 600;
          color: var(--black-light);
        }

        margin-left: 10px;

        .person_donater {
          display: flex;
          margin: 9px 0;
          border-bottom: 0.5px solid #eee;
          padding-bottom: 5.5px;

          &>*:nth-child(1) {
            // margin: 10px 0;
            // background-color: red;
            // margin: 0 0 0 10px;
            margin-left: 0;

            i {
              width: 40px;
              height: 40px;
              padding: 12px;
              background-color: var(--Primary-lite-2-color);
              color: var(--Primary-color);
              border-radius: 50%;
            }
          }

          // &>*:nth-child(2) { OR
          .the-info {
            margin-left: 10px;

            // background-color: red;
            &>*:nth-child(1) {
              // text-align: right;
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
                  min-width: 130px;
                }

                &:nth-child(2) {
                  color: var(--black-light) !important;
                }
              }

            }
          }

          // }
        }

      }

      .p4 {
        display: flex;
        justify-content: space-around;
        margin: 18px 0 7px;
        gap: 9.5px;

        a {

          padding: 10px 40px;
          background: linear-gradient(130deg, var(--Primary-color), #666);
          color: #fff;
          border-radius: 14px;
          text-shadow: 0.8px 1.2px #333;
          transition: 0.15s;

          &:last-child {
            background: linear-gradient(-130deg, var(--Primary-color), #666);

          }

          &:hover {
            text-shadow: 2.2px 1.8px #333;

          }
        }

      }

    }

  }

}

@media (max-width:550px) {
  .SingleDonationPage {
    .date-of-donation {
      padding: 20px 0 !important;

      >div {
        padding: 0 0px;
      }
    }

  }
}


@media (max-width:975px) {
  .SingleDonationPage {
    .content-page {
      flex-direction: column;
      padding: 30px 20px 80px;


      .fixed-when-scroll {
        position: relative !important;
        top: 0 !important;
        left: 0 !important;
        max-width: 90%;
        margin: 0 auto;
      }

      .details-section {
        width: 100% !important;
      }

      .donate-now-section {
        margin: 0 auto;
      }


    }

  }

  .SingleDonationPage .content-page .donate-now-section.fixed-when-scroll {
    right: 0;
  }
}

@media (max-width:600px) {
  .SingleDonationPage {
    .content-page {
      padding: 30px 2px;
    }
  }

}

@media (max-width:500px) {
  .custom-modal .content-modal .modal-2 .p3 .icons-div>* {
    padding: 30px 0 !important;
  }
}

@media (max-width:600px) {
  .SingleDonationPage .content-page .details-section>*:nth-child(4) {
    flex-direction: column;
    gap: 12px;

    &>div {
      &:nth-child(2) {
        display: flex;
        justify-content: end;
      }
    }
  }
}

@keyframes modal-anim {
  0% {
    margin-top: -100%;
    opacity: 0;
    scale: 0.85;
  }
}


////////////////////////////////////////////////
// Style Modals ***************************************
.custom-modal {
  .content-modal {

    /*****************/
    .modal-1 {
      transition: 0.3s;
      animation: modal-anim 0.35s;
      overflow: hidden;

      //*************** 
      &.rtl {
        direction: rtl;

        .the-info {
          margin-left: 0;
          margin-right: 10px;
        }
      }

      ////////////////////
      ///  
      .p3 {
        padding: 20px 30px;

        h3 {
          padding: 4px 0 4px;
          font-size: 1.45rem;
        }

        .donate-now-btn {
          display: block;
          width: 99%;
          margin: 10px auto 15px;
          font-weight: 600;
          transition: 0.35s;
          background-color: var(--Primary-2-color);
          text-align: center;
          color: #fff;
          padding: 7px 0;
          border-radius: 8px;
          font-size: 1.1rem;
          letter-spacing: 0.45px;

          &:hover {
            scale: 0.97;
          }

        }

        button:first-child {
          // background-color: red;
        }

        &>i {
          padding: 12px 11px;
          background-color: var(--Primary-dark-color);
          color: #fff;
          border-radius: 50%;
        }

        &>span {
          margin: 0 8px;
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
            margin-left: 0;

            i {
              width: 40px;
              height: 40px;
              padding: 12px;
              background-color: var(--Primary-lite-2-color);
              color: var(--Primary-color);
              border-radius: 50%;
            }
          }

          // &>*:nth-child(2) { OR
          .the-info {
            margin-left: 10px;

            // background-color: red;
            &>*:nth-child(1) {
              // text-align: right;
            }

            &>*:nth-child(2) {
              margin: 5.5px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;

              span {
                // background-color: blue;
                min-width: 130px !important;

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

          // }
        }

      }

    }

    /*****************/
    .modal-2 {
      transition: 0.3s;
      animation: modal-anim 0.8s;
      overflow: hidden;

      .p3 {

        &>*:nth-child(1) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 8px 5px;

          h4 {
            font-size: 1.3rem;
            padding: 8px 5px 0;

          }

          i {
            height: fit-content;
            padding: 5px 8px;
            font-size: 1.5rem;
            cursor: pointer;
            border-radius: 5px;
            background-color: #ccc;
            color: #666;
            margin: 0 5px;
            transition: 0.35s;

            &:hover {
              background-color: #ffb7b7;
              color: #8b0808;
            }
          }

        }

        &>*:nth-child(2) {
          // the P
          color: #333;
          padding: 1px 12px 20px;
          line-height: 25px;
        }

        //////
        .icons-div {
          display: flex;
          justify-content: center;
          // align-items: center;
          margin-bottom: 5px;

          &>* {
            width: 25%;
            padding: 30px;
            border-top: 1px solid #ddd;
            padding-top: 20px;

            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            span {
              transition: 0.1s;

            }

            &:hover span {
              scale: 1.07;
            }
          }

          img {
            width: 30px;
            pointer-events: none;
          }
        }


        //////
        .copy-link-div {
          display: flex;
          justify-content: space-between;

          &>* {
            margin: 5px 14px;
          }

          * {
            transition: 0.3s !important;
          }

          input {
            width: 82%;
            background-color: transparent;
            border: 1px solid #888;

            &:focus {
              border: 1px solid var(--Primary-color);
            }
          }

          button {
            width: 150px;
            font-weight: 600;
            font-size: 0.95rem !important;
            padding: 6px !important;
          }


          //
          @keyframes span-anim-copy-div {
            0% {
              display: inline-block;
              scale: 1.28;
              background-color: var(--Primary-dark-color);
              padding: 4px;
              border-radius: 5px;
            }
          }

        }


        &>*:nth-child(5) {
          margin: 15px;
          text-align: center;
        }

        &>*:nth-child(6) {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          margin-bottom: 25px;

          a {
            display: inline-block;
            border-radius: 5px;
            transition: 0.2s;

            &:hover {
              background-color: var(--Primary-lite-2-color);
            }

            padding:10px;

            img {
              width: 18px;
            }
          }
        }

      }

    }


  }
}


#app {

  &.rtl {
    
    .custom-modal .modal-1 {
      h3 {
        text-align: right!important;
      }
      a.donate-now-btn {
        text-align: center!important;
      }
      .p3 .person_donater .the-info {
        margin-left: 0;
        margin-right: 10px;
      }
    }

    .SingleDonationPage .content-page .donate-now-section .p3 {
      margin-left: 0;
      margin-right: 10px;
    }

    .SingleDonationPage .content-page .donate-now-section .p3 .person_donater .the-info {
      margin-left: 0;
      margin-right: 10px;
    }

  }

}



</style>