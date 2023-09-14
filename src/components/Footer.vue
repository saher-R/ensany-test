<script setup>
import { computed, ref } from 'vue';
import { useTranslations } from '../stores/useTranslations';
import BeforeFooter from './BeforeFooter.vue';

const email = ref('');

//Translation...////////////////////////////
const translations = useTranslations(),
  Footer_Translations = translations.Footer_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = Footer_Translations.ar;
const en_Lang = Footer_Translations.en;
const tr_Lang = Footer_Translations.tr;

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
  <BeforeFooter />
  <!------------------>
  <footer :class='` ${currentLanguage == "ar" && "rtl"}`'>
    <div class="container">
      <span class="logo">
        <!-- <img src="https://ensany-test.online/front/assets/img/logo-light.png" alt=""> -->
        <img src="https://front.digital-evolution.online/logo-light.avif" alt="text content">
        <h4>saudi arabia</h4>
        <div class="soial-meadi-icons">
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-facebook"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-instagram"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-youtube"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-tiktok"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-snapchat"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-telegram"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </span>


      <span class="contact-info">
        <div class="title--">contact info</div>
        <span>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa fa-envelope"></i>
            info@trahum.org.sa
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa fa-phone"></i>
            9668001244344+
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-solid fa-location-dot"></i>
            saudi arabia
          </a>
        </span>
      </span>


      <span class="contact-info">
        <div class="title--">quick Links</div>
        <span>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-solid fa-angle-right"></i>
            home
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-solid fa-angle-right"></i>
            contact us
          </a>
        </span>
      </span>


    </div>


  </footer>
</template>


<style lang="scss">
footer {
  // background-color: #262729;
  background: url('../assets/footer-bg.png'), linear-gradient(#363a42, #131226);
  overflow: hidden;
  padding-top: 12px;
  position: relative;
  z-index: 1;


  &.rtl {
    // background-color: red;
    direction: rtl;

    .footer-title {
      &::after {
        right: 0;
      }
    }

    .small-icons {
      >a {
        div {
          padding-right: 7px;
        }
      }
    }

    &>div:nth-child(1)>div:nth-child(4)>*:nth-child(3) {
      >* {
        display: flex;
        gap: 5px;
      }
    }

    &>div:nth-child(2) {
      direction: ltr;
    }
  }

  * {
    color: #fff;
  }

  a {
    font-weight: 600;
    letter-spacing: 0.85px;
  }


  >.container {
    padding: 85px 0;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    >* {
      width: 25%;
      padding: 0 3.5%;
    }

    .logo {
      background-color: transparent;
      width: 42%;
      text-align: left !important;
      padding: 0;

      >img {
        width: fit-content;
        max-width: 180px;
        border-radius: 8px;
        // max-height: 880px;
      }

      >h4 {
        font-size: 1.18rem;
        letter-spacing: 0.7px;
        word-spacing: 1.12px;
        padding: 8.5px 0 0;
      }

      .soial-meadi-icons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        padding: 18px 0;

        >a {
          padding: 3.5px;
          // display: inline-block;
          font-size: 1.72rem;
        }
      }
    }

    .contact-info {
      // background-color: red;

      >span {
        margin-top: 22px;
        display: inline-block;

        >a {
          color: #bbb;
          margin: 20px 0;
          font-size: 0.912rem;
          display: flex !important;
          align-items: center;
          gap: 5px;

          >i {
            margin-top: -2.25px;
            color: #eaeaea;
          }

          &:first-child {
            margin: 0;
          }
        }

      }

    }


    .title-- {
      font-size: 1.28rem;
    }

  }





}


@media (max-width: 600px) {
  footer>.container {
    flex-direction: column;
    padding-left: 19px;
    padding-right: 19px;

    >* {
      width: 100% !important;
    }
  }

  footer {
    background-repeat: repeat-x;
    background-position: bottom;
  }


}
</style>