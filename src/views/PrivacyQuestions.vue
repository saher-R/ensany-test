<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

//////////// 


//Translation...////////////////////////////
const translations = useTranslations(),
  PrivacyQuestions_Translations = translations.PrivacyQuestions_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = PrivacyQuestions_Translations.ar;
const en_Lang = PrivacyQuestions_Translations.en;
const tr_Lang = PrivacyQuestions_Translations.tr;

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

const paragraphs = [
  [
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
    {
      typeEel: 'div',
      text: useTheLang.value.paragraph1
    },
    {
      typeEel: 'p',
      text: useTheLang.value.paragraph2
    },
  ],
];




</script>

<template>
  <div class="PrivacyQuestions">
    <div class="AboutUs">

      <section :class='`about-section ${currentLanguage == "ar" && "rtl"}`'>
        <div class="about-left">
          <img src='../assets/insany-img-about.jpg' alt="About Img" />
        </div>

        <div class="about-right">
          <h1>{{ useTheLang.title }}</h1>
          <div class="cotainer-paragraphs">
            <template v-for="item in paragraphs[0]">
              <div v-if="item.typeEel == 'div'">
                {{ item.text }}
              </div>
              <p v-if="item.typeEel == 'p'">
                {{ item.text }}
              </p>
            </template>
          </div>
          <div class="address">
            <ul>
              <li>
                <span class="address-logo">
                  <i class="fas fa-paper-plane"></i>
                </span>
                <p>العنوان</p>
                <span class="saprater">:</span>
                <p>Jaipur, Dokinsa, Canada</p>
              </li>
              <li>
                <span class="address-logo">
                  <i class="fas fa-phone-alt"></i>
                </span>
                <p>رقم الهاتف</p>
                <span class="saprater">:</span>
                <p>+50 984-114-4321</p>
              </li>
              <li>
                <span class="address-logo">
                  <i class="far fa-envelope"></i>
                </span>
                <p>Email</p>
                <span class="saprater">:</span>
                <p>crowa668oder@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>


<style lang="scss">
.PrivacyQuestions {

  .about-section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 40px 9%;

    &.rtl {
      .about-right .cotainer-paragraphs *:nth-child(odd)::after {
        right: -15.5px;
      }

      .about-right {
        .cotainer-paragraphs * {
          margin-left: 0;
          margin-right: 18px;
        }
      }
    }
  }

  .about-left {
    img {
      width: 30vw;
      // height: fit-content;
      border-radius: 5px;
    }

    // margin-top: 20px;
    margin-bottom: 20px;
  }

  .about-right {
    width: 54%;

    ul {
      li {
        display: flex;
        align-items: center;
      }
    }

    h1 {
      color: #e74d06;
      font-size: 2.2rem !important;
      margin-bottom: 5px;
    }

    .cotainer-paragraphs * {
      color: #444;
      line-height: 26px;
      font-size: 15px;
      line-height: 33px;
      margin: 8px 0;
      margin-left: 17px;

      &:nth-child(odd) {
        // background-color: red;
        margin-top: 38px;
        font-weight: 600;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 12.35px;
          // right: -15.5px;
          left: -15.5px;
          width: 8.5px;
          height: 8.5px;
          border-radius: 50%;
          background-color: #e74d06d1;
        }

      }

      &:first-child {
        margin-top: 16px;
      }
    }

    .address {
      margin: 25px 0;

      ul {
        li {
          margin-bottom: 15px;
        }
      }
    }

  }

  .address {
    position: relative;
    padding-top: 14px;
    margin-top: 40px !important;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      // right: -15.5px;
      width: 80%;
      height: 3px;
      // margin: auto!important;
      // display: block;
      // border-radius: 50%;
      background-color: #e74d066c;
    }

    .address-logo {
      margin-right: 15px;
      color: #e74d06;
    }

    .saprater {
      margin: 0 10px;
    }
  }

}



@media (max-width:1200px) {
  .about-section {
    padding: 60px 5%;
  }
}

@media (max-width:1200px) {
  .about-section {
    padding: 60px 10%;

    .about-left {
      img {
        // width: 330px;
      }
    }


  }


}

@media (max-width:1000px) {
  .about-section {
    padding: 60px 5%;

    .about-left {
      img {
        // width: 330px;
      }
    }


  }


}

@media (max-width:900px) {
  .about-section {
    // padding: 60px 10%;
    flex-direction: column;

    .about-left {
      img {
        width: 40vw;
      }
    }

    .about-right {
      width: 100%;
    }


  }

}

@media (max-width:600px) {
  .about-section {
    // padding: 60px 10%;
    flex-direction: column;

    .about-left {
      img {
        width: 100%;
      }
    }

    .about-right {
      width: 100%;
    }


  }


}
</style>