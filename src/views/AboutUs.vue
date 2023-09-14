<script setup>
import { ref, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

/////////////////

//Translation...////////////////////////////
const translations = useTranslations(),
  AboutUs_Translations = translations.AboutUs_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = AboutUs_Translations.ar;
const en_Lang = AboutUs_Translations.en;
const tr_Lang = AboutUs_Translations.tr;

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
  <div class="AboutUs">
    <Navbar />
    <section :class='`about-section ${currentLanguage == "ar" && "rtl"}`'>
      <div class="about-left">
        <img src='../assets/insany-img-about.jpg' alt="About Img" />
      </div>

      <div class="about-right">
        <h4>{{ useTheLang.paragraph1 }}</h4>
        <h1>{{ useTheLang.title }}</h1>
        <p>
          {{ useTheLang.paragraph2 }}
          <br />
          <br />
          {{ useTheLang.paragraph3 }}
          <br />
          <br />
          {{ useTheLang.paragraph4 }}
          <br />
          <br />
          {{ useTheLang.paragraph5 }}
        </p>
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
              <p>+91 987-654-4321</p>
            </li>
            <li>
              <span class="address-logo">
                <i class="far fa-envelope"></i>
              </span>
              <p>{{ useTheLang.email }}</p>
              <span class="saprater">:</span>
              <p>crowncoder@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>


<style lang="scss">
.AboutUs {


  .about-section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 4.28% 9%;

    &.rtl {
      direction: rtl;

      .address .address-logo {
        margin-right: 0;
        margin-left: 10px;
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

      p {
        color: #444;
        line-height: 26px;
        font-size: 15px;
        line-height: 33px;
      }

      .address {
        margin: 25px 0;

        ul {
          li {
            margin-bottom: 5px;
          }
        }
      }

    }

    .address {
      .address-logo {
        margin-right: 10px;
        color: #e74d06;
      }

      .saprater {
        margin: 0 10px;
      }
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
    padding: 20px 5% 60px;
    flex-direction: column;


    .about-left {
      img {
        width: 80vw !important;
        height: 330px;
        object-fit: cover;
      }
    }

    .about-right {
      width: 95% !important;
    }


  }


}

</style>