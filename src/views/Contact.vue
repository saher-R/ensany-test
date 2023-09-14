<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

/////////////
//Translation...////////////////////////////
const translations = useTranslations(),
  Contact_Translations = translations.Contact_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = Contact_Translations.ar;
const en_Lang = Contact_Translations.en;
const tr_Lang = Contact_Translations.tr;

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



</script>

<template>
  <div class="ContactPage">

    <div :class='`content-page ${currentLanguage == "ar" && "rtl"}`'>
      <!-- {/* 1 */} -->
      <div>
        <div>{{ useTheLang.title }}</div>
        <div>{{ useTheLang.p1 }}</div>
      </div>
      <!-- {/* 2 */} -->
      <div>
        <div>
          <i class="fa-solid fa-gift"></i>
          <span>{{ useTheLang.card_p1 }}</span>
          <a href="mailto:Indonesia@ensany.com">Indonesia@ensany.com</a>
          <a href="tel:+62 821-9983-8557">+62 821-9983-8557</a>
        </div>
        <div>
          <i class="fa-solid fa-gift"></i>
          <span>{{ useTheLang.card_p2 }}</span>
          <a href="mailto:info.tr@ensany.com">info.tr@ensany.com</a>
          <a href="tel:+905348347476⁩">+905348347476⁩</a>
        </div>
        <div>
          <i class="fa-solid fa-gift"></i>
          <span>{{ useTheLang.card_p3 }}</span>
          <a href="mailto:Indonesia@ensany.com">platform@ensany.com</a>
          <a href="tel:+60 11-1111 1084">+60 11-1111 1084</a>
        </div>
      </div>
      <!-- {/* 3 */} -->
      <div>
        <!-- {/**/} -->
        <div>
          <div>{{ useTheLang.title }}</div>
          <div>{{ useTheLang.p2 }} </div>
          <form>
            <input type="text" :placeholder='useTheLang.input1' required />
            <input type="email" :placeholder='useTheLang.input2' required />
            <input type="text" :placeholder='useTheLang.input3' required />
            <input type="text" :placeholder='useTheLang.input4' required />
            <textarea :placeholder='useTheLang.input5' required></textarea>
            <button class="main-btn---">{{ useTheLang.submit }}</button>
          </form>
        </div>
        <!-- {/*the map*/} -->
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130275.79726995336!2d29.130436759395142!3d41.10904110422829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z2KXYs9i32YbYqNmI2YTYjCDYqtix2YPZitin!5e0!3m2!1sar!2s!4v1680171688140!5m2!1sar!2s"
            width="600" height="480" style="border: 0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <!-- {/* the icons div */} -->
      <div>
        <div>{{ useTheLang.title2 }}</div>
        <div>
          <a href="">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="scss">
.ContactPage {

  .content-page {

    &.rtl {
      // background-color: red;
      direction: rtl;

      >*:nth-child(5) a:nth-child(2) {
        // transform: translateX(20px);
      }
    }

    &>*:nth-child(1) {
      background: linear-gradient(201deg, rgba(0, 0, 0, 0.6) 55%, rgba(0, 0, 0, 0.54) 120%), url('https://thumbs.dreamstime.com/b/contact-us-booking-flight-ticket-air-travel-vacations-concept-hands-smart-phone-world-map-background-contact-us-104187034.jpg') center;
      background-size: cover;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;

      >* {
        &:nth-child(1) {
          font-size: 1.95rem;
          font-weight: 600;
          margin-bottom: 7px;
          color: #fff;
        }
      }
    }

    &>*:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -70px;


      &>* {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        margin: 14px;
        width: 370px;
        height: 300px;
        border-radius: 12px;
        // 
        box-shadow: 0 -5px 15px #333;

        &>* {
          margin: 6px;

          &:nth-child(1) {
            // background-color: red!important;
            font-size: 3.4rem;
            margin: 12px;
            // color: var(--Primary-lite-color);
            color: #555555;
          }

          &:nth-child(2) {
            font-weight: 600;
            font-size: 1.2rem;
            color: #666666;
            text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
          }

          &:nth-child(3) {
            color: rgb(103, 103, 103);
          }

          &:nth-child(4) {
            color: rgb(103, 103, 103);
          }
        }

      }
    }


    &>*:nth-child(3) {
      padding: 100px 60px;
      // background-color: #00000018;
      display: flex;
      justify-content: space-between;


      >*:nth-child(1) {
        // background-color: rgb(202, 170, 170);
        width: 55%;
        background-color: #fff;
        box-shadow: 0 0 45px 35px #fff;

        &>* {

          &:nth-child(1) {
            font-size: 1.95rem;
            font-weight: 600;
            margin-top: 7px;
            margin-bottom: 7px;
            // color: #fff;
          }

          &:nth-child(2) {
            margin-top: 10px;
            margin-bottom: 22px;
            // background-color: red;
            font-size: 0.98rem;
            // font-weight: 600;
            // margin-bottom: 7px;
            color: #555;
          }
        }


        form {
          margin-top: 20px;

          // background-color: red;
          input,
          textarea {
            margin: 18px 0;
            width: 90%;
            padding: 10px 1px;
            display: block;
            background-color: transparent;
            color: #222;
            border-bottom: 2px solid #aaa;
            border-radius: 0 !important;

            &::placeholder {
              color: #555;
            }

            &:focus {
              border-bottom: 2px solid #888;
            }
          }

          textarea {
            border: 0;
            border-bottom: 2px solid #aaa;
            resize: vertical;
            max-height: 200px;
            font-size: 0.98rem;
            height: 70px;

            &:focus {
              outline: 0;
            }
          }

          .main-btn--- {
            // text-align: center;
            // width: fit-content;
            // margin: auto;
            display: block;
            margin: 0 auto;
            transform: translateX(-24px);
          }
        }
      }

      >*:nth-child(2) {
        // the map div
        background-color: transparent;
        width: 45%;
        overflow: hidden;
        border-radius: 8px;

        &>* {
          border-radius: 8px;
          outline: 3px solid #0000001b;
        }
      }

    }

    &>*:nth-child(4) {

      // the icons div
      &>* {
        text-align: center;

        &:nth-child(1) {
          font-size: 1.9rem;
          font-weight: 600;
          color: var(--Primary-color);
          text-shadow: 0 0.1px 1px #000;
        }

        &:nth-child(2) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 15px;


          a {
            background-color: #ddd;
            border-radius: 9px;
            padding: 12px;
            filter: drop-shadow(2.5px 4px 0px var(--Primary-dark-color));
            transition: all 0.3s, color 0.045s;

            i {
              font-size: 1.35rem;
            }

            &:hover {
              background-color: var(--Primary-color);
              color: #fff;
            }
          }
        }
      }



    }

    &>*:nth-child(5) {
      // the login div
      // background: linear-gradient(to left, #e66465, #9198e5);
      background: linear-gradient(to right, var(--Primary-color), #222);
      width: 88%;
      margin: auto;
      border-radius: 30px;
      text-align: center;
      padding: 45px 0 65px;
      margin-top: 50px;
      margin-bottom: -35px;
      position: relative;
      z-index: 2;

      div {
        // background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 22px;

        a:nth-child(2) {
          display: inline-block;
          background-color: rgb(255, 255, 255);
          outline: 4px solid var(--Primary-color);
        }

        a:nth-child(1) {
          display: inline-block;
          background-color: var(--Primary-lite-color);
          color: #fff;
          text-shadow: 0.5px 1.5px 5px #000;
        }
      }

      a {
        // width: fit-content;
        // margin: auto;
        padding: 11px 30px;
        font-size: 1.4rem;
        border-radius: 30px;
        margin-top: 20px;

        &:nth-child(1) {
          display: block !important;
          // background-color: var(--Primary-lite-color);
          font-size: 1.56rem;
          color: #fff;
          text-shadow: 0.5px 1.5px 5px #000;
          font-weight: 600;
        }




      }


    }

  }


}


@media (max-width:1280px) {
  .ContactPage .content-page>*:nth-child(2) {

    &>* {
      width: 340px;
      // margin: 10px;
    }
  }
}


@media (max-width:800px) {
  .ContactPage .content-page>*:nth-child(2) {
    flex-direction: column;

    &>* {
      width: 75vw;
      // margin: 10px;
    }
  }
}

@media (max-width:650px) {

  .ContactPage .content-page>*:nth-child(3) {
    flex-direction: column;

    padding-top: 35px;
  }

  .ContactPage .content-page>*:nth-child(3)>*:nth-child(1),
  .ContactPage .content-page>*:nth-child(3)>*:nth-child(2) {
    width: 100%;
  }

  .ContactPage .content-page>*:nth-child(3)>*:nth-child(2) {
    margin-top: 25px;
  }

  .ContactPage .content-page>*:nth-child(3)>*:nth-child(1) form input,
  .ContactPage .content-page>*:nth-child(3)>*:nth-child(1) form textarea {
    width: 100%;
  }

}

@media (max-width:820px) {
  .ContactPage {

    .content-page {

      >*:nth-child(5) div {
        flex-direction: column;

        a {
          &:nth-child(2) {
            margin-top: 0;
          }
        }
      }
    }
  }
}

@media (max-width:820px) {
  .ContactPage .content-page>*:nth-child(5) {
    width: 94%;
  }

}
</style>