<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="Categories container">
    <div class="main-title">
      Categories
    </div>
    <div class="container-categories">
      <div v-for="_ in 6" class="flip-card">
        <div class="flip-card-inner">
          <!-- <div class="flip-card-front"
            :style="{ 'background': `linear-gradient(transparent 20%,transparent 65%,#000 110%), url(${'https://ensany.com/platform_images/taxonomies_1680435028_8254.jpg'}) center` }"> -->
          <div class="flip-card-front"
            :style="{ 'background': `linear-gradient(transparent 20%,transparent 65%,#000 110%), url(${'https://front.digital-evolution.online/taxonomies_1680435028_8254.avif'}) center` }">
            <h2>Front Side</h2>
          </div>
          <div class="flip-card-back">
            <!-- Back Side -->
            <div class="content">
              <span>Education</span>
              <a aria-label="text content" href="/paragraph_88888">see all campaigns</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.Categories {
  // background-color: red;


  .container-categories {

    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    // >* {

    // }

    .flip-card {
      width: 190px;
      height: 190px;
      perspective: 1000px;
      /* Add perspective for 3D effect */
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      /* Add transition for smooth animation */
      transform-style: preserve-3d;
      /* Preserve 3D transformations */
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
      /* Flip the card on hover */
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 8px;
      /* Hide the backface of the card */
      
    }

    .flip-card-front {
      background-color: #bbb;
      color: #fff;
      background-size: cover !important;
      // background-image: !important;
      display: flex;
      align-items: end;
      justify-content: center;


      h2 {
        color: #fff;
        text-shadow: 0 0 15.5px #555;
        margin-bottom: 12px;
        letter-spacing: 0.8px;
      }

    }

    .flip-card-back {
      background-color: #fff;
      color: #fff;
      transform: rotateY(180deg);
      /* Initial state of the back side */

      // margin: 10px;
      &::after {
        content: '';
        position: absolute;
        width: 87%;
        height: 87%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        border: 2px dashed #aaa;
        // margin: 8px;
      }

      .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        text-align: center;

        >span {
          font-weight: 800;
          color: #2d3954;
          padding: 18px 0;
          display: inline-block;
          font-size: 1.1rem;
        }

        >a {
          padding: 10px;
          background-color: var(--Primary-color);
          width: 120px !important;
          border-radius: 40px;
          font-size: 0.87rem;
          color: #fff;
          font-weight: 600;
          text-shadow: 0 0 14px #444;

          &:hover {
            background-color: var(--Primary-lite-color);

          }
        }

      }

    }


  }



}


@media (max-width: 465px) {
  .Categories .container-categories {
    padding-left: 10px;
    padding-right: 10px;

    >* {
      width: 48% !important;
    }
  }
}
</style>