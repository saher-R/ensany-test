<script setup>
import { ref, onMounted } from 'vue'
//////////////
// Lightgallery *** *** *** *** *** *** *** ***
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video/lg-video.umd';
import lgVideo__ from 'lightgallery/plugins/vimeoThumbnail/lg-vimeo-thumbnail.umd';


const plugins = [lgThumbnail, lgZoom, lgVideo, lgVideo__]


//////////////////////////

</script>

<template>
  <div class="FeaturedVideos">

    <div class="container">
      <div class="title">
        Featured Videos
      </div>
      <section class="videos-section">
        <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide">

          <a data-src="https://www.youtube.com/watch?v=nT20JV1nRZg">
            <img alt="img2" src="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg" />
            <span class="title-img">
              Campaign to distribute winter clothing to the camps of northern Syria
            </span>
          </a>
          <a data-src="https://www.youtube.com/watch?v=nT20JV1nRZg">
            <img alt="img2" src="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg" />
            <span class="title-img">
              Campaign to distribute winter clothing to the camps of northern Syria
            </span>
          </a>
          <a href="https://www.youtube.com/watch?v=CH50zuS8DD0">
            <img alt="img2"
              src="https://st4.depositphotos.com/1194063/41838/i/600/depositphotos_418384530-stock-photo-composition-variety-organic-food-products.jpg" />
          </a>

        </lightgallery>
      </section>
    </div>


  </div>
</template>


<style lang="scss">
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
@import 'lightgallery/css/lg-video.css';

.FeaturedVideos {
  // background-color: red;

  .container {

    .title {
      padding: 12px;
      background-color: #fff;
      font-size: 1.35rem;
      color: #2d3954;
      font-weight: 600;
      border: 1px solid #ebedf1;
      margin: 20px 0;
      border-radius: 8px;
    }


    .videos-section {

      .lightgallery-vue {

        display: flex;
        // justify-content: start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 18px;

        >a {
          // width: 26vw !important;
          width: 31.5% !important;
          min-width: 0 !important;
          cursor: pointer !important;
          display: flex !important;
          // justify-content: space-between;
          flex-direction: column;
          background-color: #fff;
          height: fit-content;

          >img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 8px 8px 3px 3px;
            cursor: pointer !important;

          }

          .title-img {
            padding: 20px 16px;
            font-size: 1.072rem;
            font-weight: 600;
            color: #2d3954;
          }

        }


      }


    }

  }



}

@media (max-width:770px) {

  .FeaturedVideos .container .videos-section .lightgallery-vue>a {
    width: 48% !important;
  }
}

@media (max-width:500px) {

  .FeaturedVideos .container .videos-section .lightgallery-vue>a {
    width: 100% !important;
  }
}
</style>