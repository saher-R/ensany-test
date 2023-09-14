<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="OurPartners">
    <div class="content container">
      <div class="main-title">
        Our Partners
      </div>
      <div class="cards">
        <div class="card" v-for="_ in 8">
          <a aria-label="text content" href="/paragraph_88888">
            <!-- <img src="https://ensany.com/storage/partners/2023/6/1MyekkUZNT4NROIzQt3DHJqqBevOGCyAhuuHMuyo.jpg" alt="text content"> -->
            <img src="https://front.digital-evolution.online/1MyekkUZNT4NROIzQt3DHJqqBevOGCyAhuuHMuyo.avif" alt="text content">
            <div class="text">
              <span>Ehsane Way</span>
              <div class="shape"></div>
            </div>
          </a>
        </div>
        <div class="card">
          <a aria-label="text content" href="/paragraph_88888">
            <!-- <img src="https://ensany.com/storage/partners/2023/6/6lMsU0iE6wnTCOdI2KWA0roLbFFWqqwSaarKwsC3.jpg" alt="text content"> -->
            <img src="https://front.digital-evolution.online/1MyekkUZNT4NROIzQt3DHJqqBevOGCyAhuuHMuyo.avif" alt="text content">
            <div class="text">
              <span>Ehsane Way</span>
              <div class="shape"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.OurPartners {

  .content {
    padding: 80px 0;

    .cards {
      display: flex;
      justify-content: center;
      gap: 33px;
      flex-wrap: wrap;

      .card {
        // background-color: red;
        width: 230px;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 0 9.5px 1.2px #ededed;
        height: fit-content;

        >a {
          width: 100%;

          >img {
            width: 100%;
            border-radius: 8px;
            // height: 100%;
            height: 185px;
            object-fit: cover;
            padding: 5.5px;
            background-color: #e2e2e2;

          }

          >.text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            transition: 0.35s;


            &:hover {
              >span {
                opacity: 1;
              }

              .shape {
                transform: translate(-50%, -50%) rotate(45deg);
                width: 150%;

              }
            }

            >span {
              // position: relative;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1;
              opacity: 0;
              transition: opacity 0.3s;
              transition-delay: 0.2s;
              font-weight: 600;
              padding: 0 18px;

            }

            .shape {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 150%;
              height: 200%;
              // z-index: 100;
              background-color: var(--Primary-color);
              transition: 0.35s;
              transform: translate(-50%, -50%) rotate(45deg);
              width: 0;
            }

          }
        }

      }
    }

  }

}
</style>