<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTranslations } from '../stores/useTranslations';
/////////
////////////////////////////////
// const theSildesInfo = [
//   {
//     imgUrl:
//       "https://cdn.theatlantic.com/thumbor/0TNxIYFIXhL4OWhRqzyCOSkIoxQ=/900x584/media/img/photo/2016/11/black-skies-above-mosul/b20_AP16306521517479/original.jpg",
//     title: "Egypt Pyramids",
//     paragraph:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgUrl:
//       "https://cdn.theatlantic.com/thumbor/0TNxIYFIXhL4OWhRqzyCOSkIoxQ=/900x584/media/img/photo/2016/11/black-skies-above-mosul/b20_AP16306521517479/original.jpg",
//     title: "مصر القديمة",
//     paragraph:
//       " والدول التي انجوت مصر الثديمة هي  والدول التي انجوت  والدول التي انجوت احدى المدن والدول التي انجوت كثيرا جدا",
//   },
//   {
//     imgUrl:
//       "https://cdn.theatlantic.com/thumbor/iWhKWOwVsFKC8_vspB1HTgMMtYw=/900x600/media/img/photo/2016/11/black-skies-above-mosul/b22_621959168/original.jpg",
//     title: "Winter Mountains",
//     paragraph:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgUrl:
//       "https://cdn.theatlantic.com/thumbor/k6b2XYbPjzO5QC8AxRNZTnghNmA=/900x600/media/img/photo/2016/11/black-skies-above-mosul/b18_616063680/original.jpg",
//     title: "Tropical Desert",
//     paragraph:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgUrl:
//       "https://www.worldbank.org/content/dam/photos/780x439/2022/jan-2/deep-blue-sea_shutterstock_1512728810.jpg",
//     title: "Steaming Volcanoes",
//     paragraph:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     imgUrl:
//       "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/22/16/enhanced/webdr04/original-5397-1429735545-3.jpg?downsize=900:*&output-format=auto&output-quality=auto",
//     title: "Steaming Volcanoes",
//     paragraph:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

const theSildesInfo = [
  {
    imgUrl:
      "https://cdn.theatlantic.com/thumbor/0TNxIYFIXhL4OWhRqzyCOSkIoxQ=/900x584/media/img/photo/2016/11/black-skies-above-mosul/b20_AP16306521517479/original.jpg",
    title: "Egypt Pyramids",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl:
      "https://cdn.theatlantic.com/thumbor/0TNxIYFIXhL4OWhRqzyCOSkIoxQ=/900x584/media/img/photo/2016/11/black-skies-above-mosul/b20_AP16306521517479/original.jpg",
    title: "مصر القديمة",
    paragraph:
      " والدول التي انجوت مصر الثديمة هي  والدول التي انجوت  والدول التي انجوت احدى المدن والدول التي انجوت كثيرا جدا",
  },
  {
    imgUrl:
      "https://cdn.theatlantic.com/thumbor/iWhKWOwVsFKC8_vspB1HTgMMtYw=/900x600/media/img/photo/2016/11/black-skies-above-mosul/b22_621959168/original.jpg",
    title: "Winter Mountains",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl:
      "https://cdn.theatlantic.com/thumbor/k6b2XYbPjzO5QC8AxRNZTnghNmA=/900x600/media/img/photo/2016/11/black-skies-above-mosul/b18_616063680/original.jpg",
    title: "Tropical Desert",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl:
      "https://www.worldbank.org/content/dam/photos/780x439/2022/jan-2/deep-blue-sea_shutterstock_1512728810.jpg",
    title: "Steaming Volcanoes",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgUrl:
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-04/22/16/enhanced/webdr04/original-5397-1429735545-3.jpg?downsize=900:*&output-format=auto&output-quality=auto",
    title: "Steaming Volcanoes",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const translations = useTranslations();
const currentLanguage = computed(() => translations.currentLanguage);

///////


// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// // import required modules
import { Navigation } from "swiper";
const modules = [Navigation];

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


</script>

<template>
  <div class="main-slider">

    <swiper :slidesPerView="'auto'" :navigation="true" :loop="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, i) in theSildesInfo" :key="i" class="slider---">
        <!-- <div class="carousel__item"
          :style="{ 'background': `linear-gradient(201deg, #0000003e 55%, rgba(0, 0, 0, 0.264) 120%), url(${item.imgUrl}) center` }"> -->
        <div class="carousel__item"
          :style="{ 'background': `linear-gradient(201deg, #0000003e 55%, rgba(0, 0, 0, 0.264) 120%), url('https://front.digital-evolution.online/ezgif-2-4f56da4f46.avif') center` }">
          <a href="/paragraph_88888" aria-label="text content" class="title">
            <h2>Help Peopel</h2>
            <div class="btn">
              <span>direct here</span>
              <div>
                <i class="fa fa-arrow-right ml-2"></i>
              </div>
            </div>
          </a>
        </div>
      </swiper-slide>


    </swiper>

  </div>
</template>


<style lang="scss">
@keyframes nav-anim {
  0% {
    /* opacity: 0; */
    filter: grayscale(1);
    margin-top: -180px;
  }

  70% {
    margin-top: 0;
  }
}

.main-slider {
  position: relative;
  background-image: repeating-linear-gradient(270deg, #111, #888 7.5%, #111 8.5%);
  width: 100%;
  min-height: 90vh;
  overflow: hidden;

  &.rtl {
    direction: rtl;

    .navigation {
      i {
        rotate: 180deg;
      }
    }

    .main-slide .info p {
      line-height: 35px;
    }

  }

  .main-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: circle(0% at 0 50%);

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .info {
      position: absolute;
      top: 30%;
      left: 43%;
      transform: translate(-50%);
      color: #222;
      width: 75%;
      padding: 20px;
      padding-bottom: 30px;
      border-radius: 5px;
      color: #fff;
      border-right: 6px solid #ffffff1a;
      background-color: #00000041;

      h2 {
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: 1px;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        font-size: 1.65rem;
        margin: 15px 0 22px;
        text-shadow: 2.2px 1px 1.5px #00000080;
        line-height: 28px;
      }

      .main-btn-- {
        padding: 6.5px 15px;
        background-color: var(--Primary-color);
        border-radius: 4px;
        color: #fff;
        transition: 0.3s;
        border: 0;
        font-weight: 600;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: var(--Primary-dark-color);
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          transition: 0.3s;
          z-index: -1;
        }

        &:hover {
          background-color: var(--Primary-dark-color);

          &::after {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }
        }
      }
    }
  }

  .main-slide.active {
    clip-path: circle(150% at 0 122%);
    transition: 0.95s ease-in;
    animation: nav-anim 2.4s;
  }

  &:hover {
    .navigation {
      opacity: 1;
    }
  }


  ///////////////////////////////
  .slider--- {
    // background-color: red;
    // min-height: 500px;
    // background: linear-gradient(201deg, #0000003e 55%, rgba(0, 0, 0, 0.264) 120%), url('https://portfolio-app-website.netlify.app/img/bg-js--.jpg') center;
    width: 100%;

    // 

    .carousel__item {
      background-size: cover !important;
      background-attachment: fixed !important;
      width: 100%;
      // height: 100%;
      min-height: 90vh;

      display: flex;
      justify-content: end;
      align-items: end;


      .title {
        // background-color: red;
        // display: flex !important;
        display: none !important;
        align-items: center;
        // background-color: red;
        gap: 12.5px;
        padding: 8px;
        // height: fit-content;
        margin-right: 60px;
        margin-bottom: 118px;



        &:hover {
          .btn {

            >div {
              // padding-left: 14px;
              padding-left: 8px;
              color: #fafafa;

              i {
                // transition: color 0.01s  !important;
                text-shadow: 0 0 4px #555;
                rotate: -9deg;
                scale: 1.4;
              }
            }
          }
        }

        h2 {
          font-size: 2.38rem;
          color: #fff;
          text-shadow: 0 0 18px #333;
          letter-spacing: 1.25px;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
          padding: 12px 18px;
          background-color: var(--Primary-color);

          >span {
            font-size: 1.12rem;
            color: #fff;
            text-shadow: 0 0 8px #888;
          }

          >div {
            i {
              font-weight: 800;
              transition: all 0.78s, color 0.01s !important;
              color: #fff;
              scale: 1.25;
            }
          }
        }
      }

      // align-items: center;
      // justify-content: e;
    }



  }



  @keyframes slide-title-anim {
    0% {
      opacity: 0;
      scale: 0.95;
      outline: 55px solid var(--Primary-color);
      outline-offset: 29px;
      // background-color: #fff;
      // background: linear-gradient(red,blue);
      background-color: var(--Primary-color);
      // background-color: #fff;
    }

    20% {
      opacity: 0;
    }

  }


  .carousel__pagination {
    display: none;
  }


  .swiper-button {

    &-next,
    &-prev {
      background-color: #eee;
      padding: 0px !important;
      border-radius: 4px;

      &::after {
        font-size: 15px;
        color: #000;
        font-weight: 600;
        scale: 1.15;
        transition: 0.1s;
      }

      &:hover {
        box-shadow: 0 0 2px 2px #333 inset;

        &::after {
          scale: 1.35;
        }
      }

    }


  }




  ////// 
  // active-slide
  .swiper-slide {
    .title {
      display: none !important;
    }

    &.swiper-slide-active {
      .title {
        display: flex !important;
        //// 
        animation: slide-title-anim 1.4s;
        outline: 5px solid transparent;
        border-radius: 12px;
      }
    }
  }


}

.navigation {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.prev-btn {
  z-index: 999;
  font-size: 2em;
  color: #222;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  cursor: pointer;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.next-btn {
  z-index: 999;
  font-size: 2em;
  color: #222;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  cursor: pointer;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.navigation-visibility {
  z-index: 999;
  display: flex;
  justify-content: center;

  .slide-icon {
    z-index: 999;
    background: rgba(255, 255, 255, 0.5);
    width: 20px;
    height: 10px;
    transform: translateY(-50px);
    margin: 0 6px;
    border-radius: 2px;
    box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
  }

  .slide-icon.active {
    background: var(--black);
    box-shadow: 2px 2px 0px var(--Primary-color);
  }
}

@media (max-width: 900px) {
  .main-slider {
    width: 100%;

    .main-slide {
      .info {
        position: relative;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media (max-width: 500px) {
  .main-slider {
    .main-slide {
      .info {
        h2 {
          font-size: 1.8em;
          line-height: 40px;
        }

        p {
          font-size: 0.9em;
        }
      }
    }
  }
}

@media (max-width: 776px) {
  .main-slider {
    .main-slide.active {
      clip-path: circle(160% at 0 122%);
    }

    .main-slide {
      .info {
        top: 11%;

        h2 {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        p {
          font-size: 1em;
          font-weight: 400;
          font-size: 1.3rem;
          margin: 15px 0 22px;
        }
      }
    }
  }
}

@media (max-width:500px) {
  .main-slider .swiper-slide.swiper-slide-active .title {
    margin-right: 0;

  }

}
</style>