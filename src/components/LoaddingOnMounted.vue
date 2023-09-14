<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//////////////

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})


</script>

<template>
  <div class="LoaddingOnMounted">

    <div class="content">


      <img src="https://ensany.com/front/assets/img/logo-light.png" alt="">

      <div id="loadding">

        <div class="divider" aria-hidden="true"></div>
        <p class="loading-text" aria-label="Loading">
          <span class="letter" aria-hidden="true">L</span>
          <span class="letter" aria-hidden="true">o</span>
          <span class="letter" aria-hidden="true">a</span>
          <span class="letter" aria-hidden="true">d</span>
          <span class="letter" aria-hidden="true">i</span>
          <span class="letter" aria-hidden="true">n</span>
          <span class="letter" aria-hidden="true">g</span>
        </p>

      </div>

    </div>


  </div>
</template>


<style lang="scss">
.LoaddingOnMounted {
  // background-color: red;

  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000000;
  background-color: #222;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  user-select: none;

  direction: ltr!important;

  .content {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 22px;


    >img {
      width: 80vw;
      max-width: 180px;
      max-height: 150px;
    }

    >#loadding {

      @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap');

      $black: #fff;
      $white: #222;

      @mixin pseudo ($content: '') {
        position: absolute;
        content: $content;
      }

      #loadding {
        position: relative;
        transform: scale(0.725);
      }

      .divider {
        position: absolute;
        z-index: 2;
        top: 65px;
        left: 200px;
        width: 50px;
        height: 15px;
        background: $white;
      }

      .loading-text {
        position: relative;
        font-size: 3.75rem;
        font-weight: 300;
        margin: 0;
        white-space: nowrap;

        &::before {
          // For dot
          @include pseudo;
          z-index: 1;
          top: 40px;
          left: 108px;
          width: 16px;
          height: 16px;
          background: $black;
          border-radius: 50%;
          animation: dotMove 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
        }

        .letter {
          display: inline-block;
          position: relative;
          color: $black;
          letter-spacing: 8px;

          &:nth-child(1) {
            // For the letter "L"
            transform-origin: 100% 70%;
            transform: scale(1, 1.275);

            &::before {
              @include pseudo;
              top: 22px;
              left: 0;
              width: 14px;
              height: 36px;
              background: $white;
              transform-origin: 100% 0;
              animation: lineStretch 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
            }
          }

          &:nth-child(5) {
            // For the letter "i"
            transform-origin: 100% 70%;
            animation: letterStretch 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;

            &::before {
              @include pseudo;
              top: 15px;
              left: 108px;
              width: 16px;
              height: 16px;
              background: $white;
            }
          }
        }
      }

      // For the dot
      @keyframes dotMove {

        0%,
        100% {
          transform: rotate(180deg) translate(-550%, -10px) rotate(-180deg);
        }

        50% {
          transform: rotate(0deg) translate(-690%, 10px) rotate(0deg);
        }
      }

      // For the letter "i"
      @keyframes letterStretch {

        0%,
        100% {
          transform: scale(1, 0.35);
          transform-origin: 100% 75%;
        }

        8%,
        28% {
          transform: scale(1, 2.125);
          transform-origin: 100% 67%;
        }

        37% {
          transform: scale(1, 0.875);
          transform-origin: 100% 75%;
        }

        46% {
          transform: scale(1, 1.03);
          transform-origin: 100% 75%;
        }

        50%,
        97% {
          transform: scale(1);
          transform-origin: 100% 75%;
        }
      }

      // For the letter "L"
      @keyframes lineStretch {

        0%,
        45%,
        70%,
        100% {
          transform: scaleY(0.125);
        }

        49% {
          transform: scaleY(0.75);
        }

        50% {
          transform: scaleY(0.875);
        }

        53% {
          transform: scaleY(0.5);
        }

        60% {
          transform: scaleY(0);
        }

        68% {
          transform: scaleY(0.18);
        }
      }





    }



  }


}

/////////////////////////////// 
@media(min-width: 48rem) {
  .LoaddingOnMounted #loadding {
    transform: scale(0.725rem);
  }
}

@media(min-width: 62rem) {
  .LoaddingOnMounted #loadding {
    transform: scale(0.85);
  }
}

@media (max-width:600px) {
  @keyframes dotMove {

    0%,
    100% {
      transform: rotate(180deg) translate(-400%, -10px) rotate(-180deg);
    }

    50% {
      transform: rotate(0deg) translate(-730%, -3px) rotate(0deg);
    }
  }

  .LoaddingOnMounted .content>#loadding .loading-text .letter:nth-child(1)::before {
    display: none;
  }
}
</style>