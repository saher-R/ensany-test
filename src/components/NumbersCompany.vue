<script setup>
import { onMounted, computed, watch } from 'vue';
// import { CountUp } from '../../node_modules/countup.js/src/countUp'
import { CountUp } from '../../node_modules/countup.js/dist/countUp.min.js'
import { useTranslations } from '../stores/useTranslations';

/////////////////

onMounted(() => {




  function countUpShort(id, num, enableScrollSpy = true, scrollSpyOnce = true, duration = 4.5) {

    num = numShort_withoutPoints(num, id).num;
    return (
      new CountUp(id, num, {
        enableScrollSpy,
        scrollSpyOnce,
        duration,
      })
    )
  }

  function numShort_withoutPoints(num, idItem) {

    num = formatNumberToShorts(Number(num));


    num = String(num);

    //// 
    for (const char of num) {
      if (isNaN(char) && char != '.' && char != ' ' && char != '') {
        num = num.replace(char, '');

        document.querySelectorAll(`#${idItem}`).forEach((ele) => {
          ele.nextElementSibling.textContent = char;
        })
      }
    }

    return {
      num
    };

  }

  function formatNumberToShorts(num) {
    num = Number(num);
    if (Number(num)) {
      return (Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(num));
    }
  }

  // 
  countUpShort('countUp1', 350200);
  countUpShort('countUp2', 1000000);
  countUpShort('countUp3', 6549812);
  countUpShort('countUp4', 3110);
  countUpShort('countUp5', 39);
  // with change parameters when needed.
  countUpShort('countUp6', 750, undefined, undefined, undefined);

  ///////////////


})

//Translation...////////////////////////////
const translations = useTranslations(),
  NumbersCompany_Translations = translations.NumbersCompany_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = NumbersCompany_Translations.ar;
const en_Lang = NumbersCompany_Translations.en;
const tr_Lang = NumbersCompany_Translations.tr;

let useTheLang = computed(() => checkLocaleStorageLang());

// OR use (watch) Function instead of (computed) Function
// watch(currentLanguage, () => {
//   useTheLang = checkLocaleStorageLang();
// })

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

onMounted(() => {
  // [...document.querySelector('.NumbersCompany > div').children].forEach(e => {
  //   e.setAttribute('data-aos', 'fade-up')
  // })

  // OR...
  [...document.querySelectorAll('.NumbersCompany *')].forEach(e => {
    e.setAttribute('data-aos', 'fade-up')
  })

})

</script>

<template>
  <div :class='`NumbersCompany ${currentLanguage == "ar" && "rtl"}`'>
    <div>
      <!-- data-aos="fade-up" -->

      <div v-for="(_, index) in 6" class="card">
        <!-- <img src="../assets/imgs_home/camp.jpg" alt=""> -->
        <img src="https://front.digital-evolution.online/camp.avif" alt="text content">
        <span class="name">Company</span>

        <div class="num-with-letters">
          <span class="num" :id="`countUp${index + 1}`"></span>
          <span class="letter">

          </span>
        </div>
      </div>

    </div>
  </div>
</template>


<style lang="scss">
.NumbersCompany {

  display: flex;
  justify-content: center;
  align-items: center;

  >div {
    display: flex;
    justify-content: center;
    // flex-wrap: wrap;
    width: calc(90%);
    // background-color: aqua;
    max-width: 1400px;
    background-color: #FFF;
    border-radius: 28px;
    margin-top: -72px;
    z-index: 1;
    box-shadow: 3.5px 10px 33px #5555552c;

    >.card {
      // padding: 8px;
      min-width: 150px;
      width: 100%;
      // background-color: blue;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 12px;
      padding: 25px 10px;

      border-right: 1px solid #ececec;

      &:last-child {
        border-right: none;

      }

      &:hover {
        .num {
          scale: 1.18;
        }
      }

      &::first-letter {
        // scale: 2;
        color: red !important;
      }

      >img {
        border-radius: 8px;
        margin-bottom: 10px;
      }

      .name {
        font-size: 1.1rem;
        padding-bottom: 2px;
        text-align: center;
      }  




      .num-with-letters {
        display: flex;
        align-items: center;
        gap: 7.5px;

        span.letter {
          color: #efffe4;
          font-size: 1.685rem;
          -webkit-text-stroke: 1px #408012;
          text-shadow: -1px 1px 2px #408012, 1px 1px 2px #408012, 1px -1px 0 #408012, -1px -1px 0 #408012, 1.5px 1.5px 0.85px #408012;
          font-weight: 900;
          transform: scaleX(1.085);


          position: relative;

          &::after {
            content: '';
            position: absolute;
            top: 50%;

          }

        }

        .num {
          font-size: 1.35rem;
          font-size: 1.55rem;
          color: var(--Primary-2-color);
          text-shadow: 0.3px 0.42px 0.45px #666;
          font-weight: 800;
          transition: 0.28s;
        }
      }



    }

  }


}


@media (max-width:945px) {
  .NumbersCompany>div {
    flex-wrap: wrap !important;

    .card {
      width: 30% !important;
    }
  }
}

@media (max-width:485px) {
  .NumbersCompany {

    padding: 15px 0 !important;

    >div {
      flex-wrap: wrap !important;

      .card {
        padding: 0 !important;
        width: 50% !important;
        margin: 8px 0;

        img {
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>