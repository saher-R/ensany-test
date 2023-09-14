<script setup>
import { onMounted, watch, computed, ref } from 'vue';
import { useTranslations } from '../stores/useTranslations';
////////////////////////
async function fixedNav() {
  let nav = await document.querySelector("nav");
  if (-document.body.getBoundingClientRect().top > 150) {
    nav.classList.add("when-fixed");
  } else {
    nav.classList.remove("when-fixed");
  }
}
onMounted(() => {
  window.addEventListener("scroll", fixedNav);
})

function toggleNavMenu() {
  document.querySelector("nav .mobile-fixed-menu").classList.toggle('open-mobile-fixed-menu');

  const mobileMenu = document.querySelector("nav .mobile-fixed-menu").classList;

  if (mobileMenu.contains('open-mobile-fixed-menu')) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'auto';
  }
}

onMounted(() => {
  document.querySelectorAll('nav .mobile-fixed-menu a').forEach((e) => {
    e.addEventListener('click', toggleNavMenu)
  })
})

//Translation...
const translations = useTranslations(),
  ar_Lang = translations.NavBar_Translations.ar,
  en_Lang = translations.NavBar_Translations.en,
  tr_Lang = translations.NavBar_Translations.tr;
// currentLanguage = translations.currentLanguage;

const useTheLang = computed(() => checkLocaleStorageLang())

function checkLocaleStorageLang() {
  switch (translations.currentLanguage) {
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

watch(() => translations.currentLanguage, () => {
  fixedNav();
})

function handleChangeLang(lang) {
  translations.currentLanguage = lang;
  //
  if (lang === "en") {
    useTheLang = en_Lang
    localStorage.setItem("currentLang", "en");
  } else if (lang === "ar") {
    useTheLang = ar_Lang
    localStorage.setItem("currentLang", "ar");
  } else if (lang === "tr") {
    useTheLang = tr_Lang
    localStorage.setItem("currentLang", "tr");
  }
}

onMounted(() => {
  addEventListener('resize', () => {
    const campaignsLink = document.querySelector('#campaignsLink');
    if (window.innerWidth < 850) {
      campaignsLink.setAttribute('href', 'javascript:;');
    } else
      campaignsLink.setAttribute('href', '');
  })
})



const openSearchNav = ref(false);


////////////////////////////////////////////// 

</script>

<template>
  <nav class="nav" :class="{ rtl: translations.currentLanguage == 'ar' }"
    :style="{ 'overflow': openSearchNav ? 'hidden' : 'visible' }">
    <!-- OR -->
    <!-- <nav :class="`nav ${translations.currentLanguage == 'ar' && 'rtl'}`"> -->
    <div class="p3-logo">
      <a aria-label="text content" href="/paragraph_88888">
        <!-- <img src='../assets/logo-light.png' alt="" /> -->
        <img src='https://front.digital-evolution.online/ezgif-4-a4faf21a3d.avif' alt="text content" />
      </a>
      <!-- p1 -->
      <div class="p1 close-menu" id="nav-p1">
        <li>
          <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.home }}</a>
        </li>
        <li>
          <a aria-label="text content" href="/paragraph_88888">Volunteer registration</a>
        </li>
        <li>
          <a aria-label="text content" href="/paragraph_88888" id="campaignsLink">{{ useTheLang.campaigns }}</a>
          <ul class="hidden-menu-nav second-part-nav">
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.activeCampaigns }}</a>
            </li>
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.successStories }}</a>
            </li>
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.featuredVideos }}</a>
            </li>
          </ul>
        </li>
        <li class="close-menu-btn" @click='toggleNavMenu'>
          <i class="fa-solid fa-x"></i>
        </li>

        <li>
          <i class="fa-solid fa-user"></i>
          <ul class="hidden-menu-nav">
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.enterTheAssociationManager }}</a>
            </li>
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.volunteerEntry }}</a>
            </li>
            <li>
              <a aria-label="text content" href="/paragraph_88888">{{ useTheLang.registerAsAVolunteer }}</a>
            </li>
          </ul>
        </li>
        <li style="position: static;" @click="openSearchNav = !openSearchNav">
          <i class="fa-solid fa-magnifying-glass"></i>

        </li>

        <li>
          <a aria-label="text content" href="/paragraph_88888" class="create-btn">
            {{ useTheLang.createYourSite }}
          </a>
        </li>
      </div>
    </div>

    <!-- search sec -->
    <form action="#" :class="`search-part-nav ${openSearchNav && 'open-search'}`">
      <div class="close-btn" @click="openSearchNav = false">
        <i class="fa-solid fa-x"></i>
      </div>
      <input type="text" :placeholder='useTheLang.searchHere' required />
      <button type="submit" aria-label="text content">
        <a aria-label="text content" href="/paragraph_88888">
          <i class="fa-solid fa-magnifying-glass icons-inhidden"></i>
        </a>
      </button>
    </form>


    <div class="p2 close-menu" id="nav-p2">

      <!--  -->
      <li class="lang_li">
        <img src="https://www.worldometers.info/img/flags/sa-flag.gif" alt="">
        {{ translations.currentLanguage == "en"
          ? "En"
          : translations.currentLanguage == "ar"
            ? "ع"
            : translations.currentLanguage == "tr"
              ? "Tü"
              : null }}
        <ul class="hidden-menu-nav">
          <li @click='handleChangeLang("en")'>
            <a aria-label="text content" href="/paragraph_88888" class="custom-nav-underlin">
              <img src="https://www.worldometers.info/img/flags/sa-flag.gif" alt="">
              En
            </a>
          </li>
          <li @click='handleChangeLang("ar")'>
            <a aria-label="text content" href="/paragraph_88888" class="custom-nav-underlin">
              <img src="https://www.worldometers.info/img/flags/us-flag.gif" alt="">
              ع
            </a>
          </li>
          <li @click='handleChangeLang("tr")'>
            <a aria-label="text content" href="/paragraph_88888" class="custom-nav-underlin"> <img
                src="https://www.worldometers.info/img/flags/sa-flag.gif" alt="">
              Tü
            </a>
          </li>
        </ul>
      </li>
      <li>
        USD
        <ul class="hidden-menu-nav">
          <li>
            <a aria-label="text content" href="/paragraph_88888">
              <span>
                USD
              </span>
              <span>
                United States dollar
              </span>
            </a>
          </li>
          <li v-for="_ in 7">
            <a aria-label="text content" href="/paragraph_88888">
              <span>
                EUR
              </span>
              <span>
                European euro
              </span>
            </a>
          </li>

        </ul>
      </li>
      <li>
        <a aria-label="text content" href="/paragraph_88888">Register for the weekly giveaway
          <i class="fas fa-bell" style="padding: 0 8px;color: var(--Primary-color);"></i>
        </a>
      </li>
    </div>


    <!-- <input  type="button" value="⚎"  /> -->
    <button aria-label="text content" class="menu-btn-nav" @click='toggleNavMenu'>
      <i class="fa-solid fa-bars"></i> </button>



    <!-- Menu Mobile -->
    <div class="mobile-fixed-menu">
      <div class="black-screen" @click="toggleNavMenu"></div>
      <div class="content">
        <div class="logo-div">
          <img src="https://front.digital-evolution.online/ezgif-4-a4faf21a3d.avif" alt="text content">
          <i class="fa-solid fa-x" @click="toggleNavMenu"></i>
        </div>
        <div class="search-div">
          <form action="#">
            <input type="text" placeholder="Search...">
            <button aria-label="text content" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <!--  -->
        <a aria-label="text content" href="/paragraph_88888">Home</a>
        <a aria-label="text content" href="/paragraph_88888">Volunteer registration</a>
        <a aria-label="text content" href="/paragraph_88888" class="create-btn">
          Create Your Site
        </a>

        <!--  -->
        <div class="tab">
          <input type="checkbox" id="chck-1" />
          <label class="tab-label" for="chck-1">campaigns</label>
          <div class="tab-content">
            <a v-for="(_, i) in 3" aria-label="text content" href="/paragraph_88888">
              link {{ i }}
            </a>
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck-2" />
          <label class="tab-label" for="chck-2">
            <i class="fa-solid fa-user"></i>
          </label>
          <div class="tab-content">
            <a v-for="(_, i) in 3" aria-label="text content" href="/paragraph_88888">
              link {{ i }}
            </a>
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck-3" />
          <label class="tab-label" for="chck-3">
            USD
          </label>
          <div class="tab-content">
            <a v-for="(_, i) in 8" aria-label="text content" href="/paragraph_88888">
              <span>
                USD
              </span>
              <span>
                United States dollar
              </span>
            </a>
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck-4" />
          <label class="tab-label" for="chck-4">
            English
          </label>
          <div class="tab-content">
            <a v-for="(_, i) in 3" aria-label="text content" href="/paragraph_88888">
              Arabic
            </a>
          </div>
        </div>

        <a aria-label="text content" href="/paragraph_88888">
          <i class="fas fa-bell" style="padding: 0 8px;color: var(--Primary-color);"></i>
          Register for the weekly giveaway
        </a>




        <div class="soial-media-div">
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-brands fa-facebook"></i>

          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-brands fa-twitter"></i>

          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-brands fa-tiktok"></i>

          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-solid fa-envelope"></i>

          </a>
          <a aria-label="text content" href="/paragraph_88888">
            <i class="fa-brands fa-youtube"></i>

          </a>

        </div>
      </div>
    </div>


  </nav>


  <!--  -->
</template>


<style lang="scss">
@keyframes nav-amin-fixed {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
}

@keyframes hidden-nav-animation {

  0% {
    opacity: 0.45;
    transform: translate(2.5px, 6px) skewX(2deg);
  }
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px 20px;
  padding: 0 30px;
  transition: 0.3s;
  z-index: 100000;
  width: 100%;
  height: 70px;
  // 
  position: relative;

  &.rtl {
    direction: rtl;

    .p2 {
      .hidden-menu-nav {
        right: 5px;
      }
    }

    .p1 {
      .hidden-menu-nav {
        right: 5px;
      }

      .custom-nav-underlin::after {
        right: 0;
      }
    }
  }

  li:has(.hidden-menu-nav) {
    &::after {
      border: 1px solid #3273dcbd;
      border-right: 0;
      border-top: 0;
      content: " ";
      display: block;
      width: 0.33em;
      height: 0.33em;
      pointer-events: none;
      position: absolute;
      -webkit-transform: rotate(-45deg);
      -webkit-transform-origin: center;
      transform-origin: center;
      transform: translateY(-50%) rotate(-45deg);
      left: 3px;
      top: 50%;
      /////// 
      opacity: 0;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }

  .p3-logo {
    display: flex;
    align-items: center;

    img {
      scale: 1.2;
      margin-right: 20px;
    }

    // p1 
    .p1 {
      display: flex;
      align-items: center;
      margin-left: 15px;


      * {
        cursor: pointer;
      }

      >* {
        position: relative;
        padding: 30px 12.5px;

        &:hover {
          .hidden-menu-nav {
            display: block;
          }

          // color: var(--Primary-color);
        }

      }

      li {
        a {
          padding: 6px 0;
          color: var(--black);
          transition: 0.22s;
          width: 100%;

          &:hover {
            color: var(--Primary-color);
          }

          i {
            color: #fff;
            transition: 0.2s;

            &:hover {
              color: var(--Primary-lite-color);
            }
          }
        }
      }

      a.create-btn {
        padding: 7px 15px;
        // background-color: var(--Primary-color);
        background-color: var(--Socndary-color);
        border-radius: 20px;
        color: #fff;
        transition: 0.3s;

        &:hover {
          color: #fff !important;
        }
      }
    }
  }


  .p2 {
    display: flex;
    align-items: center;


    >li {
      display: inline-block;
      padding: 30px 15px;
      cursor: pointer;
      // background-color: red;

      &.lang_li {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        >img {
          aspect-ratio: 16/14;
          width: 21.5px;
          border-radius: 5px;
        }

        // background-color: red;
        &,
        * {
          text-transform: uppercase;
        }

        .hidden-menu-nav {
          li {
            a {
              display: flex !important;
              justify-content: unset;
              gap: 0.8rem;

              img {
                aspect-ratio: 16/14;
                width: 21.5px;
                border-radius: 5px;
              }
            }
          }

          // background-color: blue;
        }
      }

      a {
        padding: 0;
        padding-bottom: 20px;
        color: var(--black);
        transition: 0.22s;
        margin-bottom: -22px;

        &:hover {
          color: var(--Primary-color);
        }

        &:last-child {
          font-size: 0.88rem;
        }
      }

      position: relative;

      &:last-child {
        // position: relative;
        // background-color: red;
      }

      &:hover {
        .hidden-menu-nav {
          display: block;
        }
      }

      .hidden-menu-nav {
        li {
          padding-bottom: 10px;

          a {
            padding: 12px 0 !important;
            width: 100%;

          }
        }
      }
    }

    .hidden-menu-nav {
      li {
        padding-bottom: 20px !important;
      }
    }

  }


  ////
  // mobile-fixed-menu
  .mobile-fixed-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.532);
    z-index: 100;
    visibility: hidden;
    pointer-events: none;
    transition: 0.18s;
    display: none;

    &.open-mobile-fixed-menu {
      visibility: visible;
      pointer-events: all;

      .content {
        margin-left: 0;
        box-shadow: 0 0 20px #000000a6;
      }

      .black-screen {
        background-color: #00000032;
      }
    }

    a.create-btn {
      padding: 7px 15px;
      // background-color: var(--Primary-color);
      background-color: var(--Socndary-color);
      border-radius: 20px;
      color: #fff;
      transition: 0.3s;

      width: fit-content !important;
      padding: 10px 30px !important;
      color: #fff !important;
      margin-top: 8px !important;
      margin-bottom: 15px !important;
      letter-spacing: 0.85px;

      &:hover {
        color: #fff !important;
        padding: 10px 38px !important;
        letter-spacing: 1.4px;
      }
    }

    .black-screen {
      position: fixed;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: transparent;
    }

    .content {
      background-color: #fff;
      position: relative;
      margin-left: -100%;
      width: fit-content;
      height: 100vh;
      min-width: 350px;
      //*******/
      padding: 3rem 2rem;
      padding-top: 1rem;
      overflow-y: auto;
      transition: 0.85s;
      // background-color: red;

      >*:not(.logo-div, .search-div) {
        // background-color: red;
        border-top: 1px solid #eee;
      }

      // 
      .logo-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;

        >i {
          cursor: pointer;
          padding: 18px;
        }

        >img {
          width: 125px;
        }
      }

      .search-div {
        // background-color: red;
        cursor: auto;

        form {
          padding: 8px 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            border: 2px solid #e4ecf2;
            padding-top: 18px;
            padding-bottom: 18px;
            border-radius: 2px !important;
            cursor: auto;
            visibility: visible;
            position: relative;
            width: 310px;
            padding-right: 50px;

            // color: #000;
            &::placeholder {
              font-size: 1rem;
              color: #666;
            }
          }

          button {
            position: absolute;
            background-color: #ececec;
            border: 3px solid #000 !important;
            right: 3%;
            height: 55%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            color: #000;
            border: 0 !important;
            background-color: transparent;
            font-size: 1.1rem !important;
            scale: 1;
          }
        }

      }


      .tab {
        width: 100%;
        color: white;
        overflow: hidden;

        &-label {
          display: flex;
          justify-content: space-between;
          gap: 6px;
          padding: 1em;
          color: #000;
          font-weight: bold;
          cursor: pointer;
          transition: 0.12s;

          /* Icon */
          &:hover {
            box-shadow: 0 0 12px #2c3e5033 inset;
          }

          &::after {
            content: "\276F";
            width: 1em;
            height: 1em;
            text-align: center;
            transition: 0.2s;
          }
        }

        &-content {
          max-height: 0;
          padding: 0 1em;
          color: #2c3e50;
          background: white;
          transition: 0.35s;

          a {
            padding-top: 5px;
            padding-bottom: 5px;
            margin: 16px 0;
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 6.5px;


            &:nth-child(1) {
              padding-top: 0;
              margin-top: 0;
            }
          }
        }

        &-close {
          display: flex;
          justify-content: flex-end;
          padding: 1em;
          font-size: 0.75em;
          background: #2c3e50;
          cursor: pointer;

          &:hover {
            background: darken(#2c3e50, 10%);
          }
        }
      }

      >a {
        display: block !important;
        padding: 1em;
        color: #000;
        font-weight: bold;
      }

      a {
        display: block !important;
      }

      input {
        position: absolute;
        visibility: hidden;
      }

      // :checked
      input:checked {
        +.tab-label {
          box-shadow: 0 0 12px #2c3e504e inset;

          &::after {
            transform: rotate(90deg);
            margin-top: 5px;
            margin-left: 8.5px;
          }
        }

        ~.tab-content {
          max-height: 100vh;
          padding: 1em;
          padding-bottom: 0;
        }
      }
    }


    // soial-media-div
    .soial-media-div {
      display: flex;
      gap: 12px;
      padding: 10px;
      padding-top: 18px;
      flex-wrap: wrap;
      margin-top: 16px;

      a>i {
        display: inline-block;
        padding: 8px;
        font-size: 1.4rem;
        background-color: #e4ecf25e;
        border-radius: 3px;
        cursor: pointer;
        color: #424242;

        &:hover {
          background-color: var(--Primary-color);
          color: #fff;
        }
      }
    }


  }


}

nav.when-fixed {
  transition: 0.3s;
  // position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  animation: nav-amin-fixed 0.7s;
  box-shadow: 0 0 15.5px #00000083;

  li:has(.hidden-menu-nav) {
    &::after {
      opacity: 1;
    }
  }

}

.menu-btn-nav {
  transition: 0.1s;
  font-size: 1.35rem !important;
  margin-left: 15px;
  padding: 8px 20px !important;
  display: none;
  background-color: var(--Primary-2-color);


  &:focus {
    outline: 1.2px solid var(--black);
  }
}

.close-menu-btn {
  display: none;
}

.hidden-menu-nav {
  position: absolute;
  top: 70px;
  left: 0;
  background-color: #fff;
  border: 0.5px solid #999;
  border-radius: 4px;
  display: none;
  animation: hidden-nav-animation 0.7s;
  animation: hidden-nav-animation 0.38s;
  padding: 10px 20px !important;
  z-index: 1000;
  min-width: 230px;
  padding-left: 0;

  li {
    border-bottom: 1px solid #ddd;
  }

  overflow: hidden;

  >li {

    >a {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      transition: 0.1s !important;

      span {
        transition: 0.1s !important;
      }

    }

    &:first-child {
      position: relative;

      &::after {
        position: absolute;
        content: "";
        top: -9.7px;
        left: -20px;
        width: 125%;
        height: 3px;
        background-color: var(--Primary-lite-color);
      }
    }
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #99999981;
    background-color: #fff;
  }

  i {
    margin-top: -27px;
    margin-left: -12px;
    background-color: var(--black-light);
    padding: 13px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}


.search-part-nav {

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) scaleY(0);
  width: 100% !important;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 1;
  height: 100%;
  padding: 10px;
  padding-left: 150px;
  padding-right: 150px;
  cursor: default !important;
  transition: 0.42s;
  pointer-events: none;

  &.open-search {
    transform: translateY(-50%) scaleY(1);
    pointer-events: all;

  }

  &:hover {
    .close-btn {
      color: #000;
    }
  }

  input {
    width: 100%;
    height: 100%;
    cursor: text !important;
    background-color: #fff;
    border: 1px solid #c4c4c4;
  }

  .close-btn {
    background-color: rgb(222 222 222);
    border-radius: 2px;
    padding: 7px;
    cursor: pointer;

    &:hover {
      i {
        color: rgb(171, 0, 0);
      }
    }
  }

  button {
    padding: 12px;
    height: 100%;
    background-color: var(--Primary-color);

    &,
    * {
      color: #fff;
    }
  }
}

.icons-inhidden {
  // position: absolute;
  // top: 35px;
  // left: 20px;
}

.second-part-nav {
  margin-top: 8px;

  >li {
    display: block !important;
    padding: 3px 0 !important;

    a {
      width: 100%;
    }
  }
}

.custom-nav-underlin {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 2px;
    background-color: var(--Primary-color);
    transition: 0.45s;
    width: 0;
  }

  &:hover {
    &::after {
      width: 60%;
    }
  }
}

.sosial-media-icons {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  right: 0;
}

.navigation-visibility {
  margin-top: 45px;
}



/* Some Media Quiry */
/* nav .p1 li a {
  } */
/* Close Menu */
// @media (max-width: 850px) {
@media (max-width: 1210px) {
  .menu-btn-nav {
    display: block;
  }

  .close-menu-btn {
    display: block;
  }



  nav {

    // &>*:not(form) {
    //   display: none!important;
    // }
    .p3-logo>*:not(a),
    .p2 {
      display: none !important;
    }

    .mobile-fixed-menu {
      display: block;
    }


  }

}


@media (max-width:640px) {
  nav .search-part-nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}


@media (max-width:1200px) {
  .Navbar {

    .mobile-fixed-menu {
      display: block !important;
    }
  }
}
</style>