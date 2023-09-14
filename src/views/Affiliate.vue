<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

/////////////

//Translation...////////////////////////////
const translations = useTranslations(),
  Affiliate_Translations = translations.Affiliate_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = Affiliate_Translations.ar;
const en_Lang = Affiliate_Translations.en;
const tr_Lang = Affiliate_Translations.tr;

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
  <div class="affiliate-page">

    <div :class='`content-page ${currentLanguage == "ar" && "rtl"}`'>
      <div>
        <div class="text-div">
          <h3>{{ useTheLang.title1 }}</h3>
          <p>{{ useTheLang.p1 }}</p>
        </div>
        <div class="text-div">
          <h3>{{ useTheLang.title2 }}</h3>
          <p>{{ useTheLang.p2 }} </p>
        </div>
      </div>
      <div>
        <a href="">{{ useTheLang.btn1 }}</a>
        <a href="">{{ useTheLang.btn2 }}</a>
      </div>
    </div>

  </div>
</template>


<style lang="scss">
.affiliate-page {

  .content-page {
    display: flex;
    margin: 30px 25px 55px;

    &.rtl {
      direction: rtl;
    }

    &>* {
      border-radius: 6px;
      border: 0.5px solid #0000001e;

      &:nth-child(1) {
        width: 60%;
        background-color: #fff;
        padding: 10px 20px;
        margin: 15px;

        .text-div {
          h3 {
            text-transform: capitalize;
            font-size: 1.42rem;
            font-weight: 600;
            margin: 10px 0;
          }

          p {
            font-size: 1.07rem;
            color: #777;
            line-height: 28px;
          }

          &:first-child {
            border-bottom: 0.5px solid #ddd;
            padding-bottom: 25px;
          }

          &:last-child {
            // border-bottom: 0.5px solid #ddd;
            padding-bottom: 25px;
          }
        }
      }


      &:nth-child(2) {
        width: 40%;
        padding: 20px;
        background-color: #fff;
        margin: 15px;
        height: fit-content;

        a {
          display: block !important;
          width: 80%;
          margin: 18px auto;
          padding: 10px 30px;
          border: 3.5px solid var(--Primary-color);
          text-align: center;
          // font-weight: 600;
          font-size: 1.1rem;
          border-radius: 5px;
          transition: 0.2s;

          &:hover {
            border-radius: 18px;
            text-shadow: 0.5px 0.5px 7px #0000001e;
          }
        }

      }
    }

  }


}


@media (max-width:930px) {
  .affiliate-page .content-page>*:nth-child(2) a {
    width: 100%;
  }
}

@media (max-width:780px) {

  .affiliate-page {
    padding: 10px;

    .content-page {
      flex-direction: column;
      margin: 20px 5px !important;


      &>* {
        width: 100% !important;
        background-color: red;
        margin-left: 5px !important;
        margin-right: 5px !important;
      }
    }

    .affiliate-page .content-page>*:nth-child(1) {
      margin: 2px !important;
    }


  }




}
</style>