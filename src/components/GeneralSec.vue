<script setup>
import { computed } from 'vue'
import { useTranslations } from '../stores/useTranslations';
//////////////////// 

//Translation...////////////////////////////
const translations = useTranslations(),
  GeneralSec_Translations = translations.GeneralSec_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = GeneralSec_Translations.ar;
const en_Lang = GeneralSec_Translations.en;
const tr_Lang = GeneralSec_Translations.tr;

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
</script>

<template>
  <div :class='`GeneralSec container ${currentLanguage == "ar" && "rtl"}`'>
    <div class="sec-ninth">
      <div class="main-title">{{ useTheLang.title }}</div>
      <div class="repate-the-cards-camera" data-aos="fade-up">
        <div v-for='_ in 7' class="items-container-div">
          <a aria-label="text content" href="/paragraph_88888">
            <!-- <img src="https://ensany.com/platform_images/1609962455.jpeg" alt=""> -->
            <img src="https://front.digital-evolution.online/1609962455.avif" alt="text content" />
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
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.GeneralSec {

  &.rtl {

    direction: rtl;

    .items-container-div>*:nth-child(2) {
      text-align: right !important;
      width: 100%;
    }

    .sec-ninth .repate-the-cards-camera .items-container-div .theline-area .the-line-- {
      right: 0;
    }
  }


  .sec-ninth {
    padding-top: 130px;
    padding-bottom: 40px;

    >* {
      &:nth-child(2) {
        text-align: center;
      }
    }

    .repate-the-cards-camera {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-wrap: wrap;
      gap: 22px;
      // >* {
      //   width: 340px;
      // }


      // margin: 0 40px;
      .items-container-div {
        width: calc(30% - 12px);
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
            text-align: left;
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


  }
}


@media (max-width:1200px) {
  .GeneralSec .sec-ninth .items-container-div {
    width: 300px !important;
  }
}

@media (max-width:990px) {
  .GeneralSec .sec-ninth .items-container-div {
    width: 370px !important;
  }
}

@media (max-width:800px) {
  .GeneralSec .sec-ninth .items-container-div {
    width: 450px !important;
  }
}
</style>