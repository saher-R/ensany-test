<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

//////////// 


//Translation...////////////////////////////
const translations = useTranslations(),
  CommonQuestions_Translations = translations.CommonQuestions_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = CommonQuestions_Translations.ar;
const en_Lang = CommonQuestions_Translations.en;
const tr_Lang = CommonQuestions_Translations.tr;

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
    useTheLang.value.paragraph2,
    useTheLang.value.paragraph3,
    // <p>ابدأ في جمع الأموال الآن ...</p>,
    null,
    useTheLang.value.paragraph4,
    useTheLang.value.paragraph5,
    useTheLang.value.paragraph6,
    useTheLang.value.paragraph7,
    useTheLang.value.paragraph8,
    useTheLang.value.paragraph9,
    useTheLang.value.paragraph10,
    useTheLang.value.paragraph11,
    useTheLang.value.paragraph12,
    useTheLang.value.paragraph13,
    useTheLang.value.paragraph14,
    useTheLang.value.paragraph15,
    useTheLang.value.paragraph16,
    useTheLang.value.paragraph17,
    useTheLang.value.paragraph18,
    useTheLang.value.paragraph19,
    useTheLang.value.paragraph20,
    useTheLang.value.paragraph21,
  ],
];

// setTimeout(() => {

console.log(paragraphs[0])
// }, 2000)

</script>

<template>
  <div class="CommonQuestions">
    <Navbar />
    <section :class='`about-section ${currentLanguage == "ar" && "rtl"}`'>
      <div class="about-left">
        <img src='../assets/insany-img-about.jpg' alt="About Img" />
      </div>

      <div class="about-right">
        <h4>{{ useTheLang.paragraph1 }}</h4>
        <h1>{{ useTheLang.title }}</h1>
        <div class="cotainer-paragraphs">
          <p v-for="(item, i) in paragraphs[0]" :key="i">
            {{ item }}
          </p>
        </div>
        <div class="address">
          <ul>
            <li>
              <span class="address-logo">
                <i class="fas fa-paper-plane"></i>
              </span>
              <p>{{ useTheLang.address }}</p>
              <span class="saprater">:</span>
              <p>Jaipur, Dokinsa, Canada</p>
            </li>
            <li>
              <span class="address-logo">
                <i class="fas fa-phone-alt"></i>
              </span>
              <p>{{ useTheLang.phoneNumber }}</p>
              <span class="saprater">:</span>
              <p>+50 984-114-4321</p>
            </li>
            <li>
              <span class="address-logo">
                <i class="far fa-envelope"></i>
              </span>
              <p>{{ useTheLang.email }}</p>
              <span class="saprater">:</span>
              <p>crowa668oder@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>


<style lang="scss">
.CommonQuestions {

  .about-section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 40px 9%;

    &.rtl {
      direction: rtl;

      .cotainer-paragraphs p:nth-child(even):not(:nth-child(2))::after {
        top: 14px;
        right: -14px;
      }

      .address {
        .address-logo {
          margin-right: 5px;
          margin-left: 8px;
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

    .cotainer-paragraphs p {
      color: #444;
      line-height: 26px;
      // font-size: 6rem;
      line-height: 33px;
      margin: 8px 0;
      // background-color: red;

      &:nth-child(even):not(:nth-child(2)) {
        // background-color: red;
        margin-top: 38px;
        font-weight: 600;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          top: 11.5px;
          left: -11.8px;
          width: 8.5px;
          height: 8.5px;
          border-radius: 50%;
          background-color: #e74d06d1;
        }
      }
    }

    .address {
      margin: 25px 0;

      ul {
        li {
          margin-top: 5px;
          margin-bottom: 16px;
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
      margin-right: 8px;
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
    padding: 20px 5% 60px !important;
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