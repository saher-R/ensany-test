<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import LoaddingOnMounted from './components/LoaddingOnMounted.vue';
///////////////
onMounted(() => {
  // AOS.init();

  onMounted(() => {
    setTimeout(() => {
      document.querySelectorAll('img').forEach((img) => {
        const srcImg = img.src;
        img.src = '';
        img.setAttribute('loading', 'lazy');
        setTimeout(() => {
          img.src = srcImg;
        }, 1.5)
      })
    }, 1.5)


    // document.querySelector('#app').classList.add('rtl');
    // console.log(document.querySelector('#app'));;

  })

})

const timerLoadding = ref(true);

onMounted(() => {
  setTimeout(() => {
    timerLoadding.value = false;
    document.body.style.overflow = 'auto';
  }, 2400)

})

</script>

<template>
  <!-- loadding -->
  <LoaddingOnMounted
    :style="{ opacity: `${timerLoadding ? '1' : '0'}`, visibility: `${timerLoadding ? 'visibile' : 'hidden'}` }" />
  <!--  -->

  <NavBar />

  <RouterView />

  <Footer />
</template>

<style lang="scss">
.swiper {
  user-select: none;
}

.swiper-button-disabled {
  pointer-events: auto !important;
  cursor: not-allowed !important;
}

.swiper {
  direction: ltr !important;

  * {
    direction: ltr !important;

  }
}

#app {
  &.rtl {

    direction: rtl;

    * {
      text-align: right;
    }


    .SecondSlider .swiper-slide .card-slider .line-div--- .line-persent {
      left: unset !important;
      right: 0 !important;

    }

    .SecondSlider .swiper-slide .card-slider .line-div--- .number-persent {
      right: unset !important;
      left: -25px !important;
    }

    .SecondSlider .swiper-slide .card-slider>.donate-div {
      flex-direction: row-reverse;
    }

    .SecondSlider .swiper-slide .card-slider>.donate-div .more {
      flex-direction: row-reverse;
    }

    .Categories .container-categories .flip-card-inner {
      text-align: center;

      * {
        text-align: center;

      }
    }

    .GeneralSec .sec-ninth .repate-the-cards-camera .items-container-div .line-div--- .line-persent {
      left: unset !important;
      right: 0 !important;
    }


    .GeneralSec .sec-ninth .repate-the-cards-camera .items-container-div .line-div--- .number-persent {
      right: unset !important;
      left: -25px !important;
    }

    .donate-div .more i {
      rotate: 180deg;
    }


    .CollectDonations .content>* * {
      text-align: center;
    }

    .CollectDonations .content>*:first-child * {
      text-align: right;
    }


    .FromOurBlog .swiper-slide .card-slider>.donate-div {
      justify-content: end;

      .more {
        flex-direction: row-reverse;
      }
    }

    .fa-arrow-right,
    .fa-angle-right {
      rotate: 180deg;
    }

    // .fa-angle-right {}

    footer>.container {
      * {
        text-align: right !important;
      }
    }


    nav .mobile-fixed-menu .content {
      margin-left: unset;
      margin-right: -100%;
    }

    nav .mobile-fixed-menu.open-mobile-fixed-menu {
      >.content {
        margin-right: 0;

      }
    }

    .hidden-menu-nav {
      left: unset;
      right: 0;
    }

    nav .p3-logo .p1 {
      margin-left: 0;
      margin-right: 15px;
    }

    // 

    .SingleDonationPage .content-page .donate-now-section .p2 a {
      text-align: center;

      .fa-solid,
      .fa-share {
        rotate: 180deg;
        transform: rotateX(-180deg);
      }
    }

    .SingleDonationPage .content-page .details-section .img-big-div .short-info .line-div .the-current-area .percent-num-div {
      right: unset;
      left: -25px;
    }



    .BeforeFooter .before-footer-- a:nth-child(1) {
      text-align: center !important;
    }



    .TheFinalDonationPage .content-page .form-operations .donation-amount-div .btns-amounts {
      right: unset;
      left: 5%;
    }

    .TheFinalDonationPage .content-page .form-operations .donation-amount-div2 .btns-amounts {
      right: unset;
      left: 5%;
    }

    .iti {
      direction: ltr;
      text-align: left;
    }



    .TheFinalDonationPage .content-page .form-operations button[type=submit] {
      text-align: center;
    }


    .Campaigns .content-page>*:nth-child(1) span::after {
      float: left;
      margin-left: 0;
      margin-right: 14px;
    }


    svg.h-4.w-4 {
      rotate: 180deg;
    }



    .ContactPage .content-page>*:nth-child(4)>*:nth-child(1) {
      text-align: center !important;
    }


    .NewDetails .container>section.more-news>div.search>form button {
      display: flex;
      justify-content: center;
      align-items: center;
    }


    .AboutUs .about-section .address .address-logo {
      margin-right: 0;
      margin-left: 10px;
    }



    .QuickDonation {
      left: unset;
      right: 0;
      border-radius: 4.5px 0 0 4.5px;
      direction: rtl;
      text-align: right;

      .iti,
      .iti * {
        direction: ltr;
        text-align: left;
      }
    }

    .QuickDonation>.open-div {
      border-radius: 4.5px 0 0 4.5px;
    }

    .QuickDonation>form {
      transform-origin: top right;
    }

    .QuickDonation .relative-div>.open-div>i {
      border-radius: 4.5px 0 0 4.5px;
    }

    .Add_NGO>.container .content>.inputs-steps--- button[type=submit] {
      text-align: center;
    }


    .Add_NGO>.container .content>.inputs-steps--- .second-step>.imgs .background label.img-put {
      right: unset;
      left: 4%;
    }

    .Add_NGO>.container .content>.inputs-steps--- .second-step>.imgs .main-img label.img-put {
      right: unset;
      left: -12%;
    }

    .Add_NGO>.container .content>.inputs-steps--- .second-step .link-association {

      &,
      * {
        direction: ltr;
        text-align: left;
      }

      p {
        direction: rtl;
        text-align: right;
      }
    }

    .Add_NGO>.container>.section-titles>span.card.active {
      border-right: none;
      border-left: 3px solid var(--Primary-color);
    }

    .Add_NGO>.container>.section-titles>span.card>i {
      right: unset;
      left: 15px;
    }

    .Add_NGO>.container .content>.inputs-steps--- .third-step .info>a.add_campaigns {
      text-align: center;
    }


    .NumbersCompany .num-with-letters {
      direction: ltr;
      text-align: left;
    }

    .FromOurBlog .swiper-slide .card-slider>.donate-div {
      justify-content: space-between;
    }



    .SingleDonationPage .content-page .donate-now-section .p1 .the-line--container .the-line- {
      left: unset;
      right: 0;
    }


    .Campaigns .content-page>.cards .repate-the-cards-camera .items-container-div .line-div--- .line-persent {
      left: unset;
      right: 0;
    }

    .Campaigns .content-page>.cards .repate-the-cards-camera .items-container-div .line-div--- .number-persent {
      right: unset;
      left: -25px;
    }


  }
}
</style>
