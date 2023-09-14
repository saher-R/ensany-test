<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="CollectDonations ">
    <div class="content container">
      <!-- <span> -->
      <a aria-label="text content" href="javascript:;" >

        <small>Make Your Effect</small>
        <h3>Collect Donations <br>to ...</h3>

        
      </a>
      <a aria-label="text content" href="/paragraph_88888">
        <!-- <img src="https://ensany.com/theme/img/self.png" alt="text content"> -->
        <img src="https://front.digital-evolution.online/self.webp" alt="text content">
        <span>my self</span>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </a>
      <a aria-label="text content" href="/paragraph_88888">
        <!-- <img src="https://ensany.com/theme/img/self.png" alt="text content"> -->
        <img src="https://front.digital-evolution.online/self.webp" alt="text content">
        <span>my self</span>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </a>
      <a aria-label="text content" href="/paragraph_88888">
        <!-- <img src="https://ensany.com/theme/img/self.png" alt="text content"> -->
        <img src="https://front.digital-evolution.online/self.webp" alt="text content">
        <span>my self</span>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </a>
      <!-- </span> -->

    </div>
  </div>
</template>


<style lang="scss">
.CollectDonations {
  // background-color: red;
  background-color: #f5f7fb;
  padding: 100px 0;
  margin: 50px 0;

  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 22px;

    >* {
      width: 20%;
      // margin: 5px;
      min-height: 280px;
      border: 2px solid transparent;
      text-align: center;
      padding: 14px;
      padding-bottom: 25px;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.45s;

      &:hover {
        border: 2px solid var(--Primary-color);

      }

      >img {
        width: 100%;
        // max-width: 100px;
        height: 200px;
        object-fit: contain;
      }

      >span {
        font-size: 1.4rem;
        font-weight: 600;
        color: #373737;
        display: block;
      }

      >i {
        font-size: 1.8rem;
        padding-top: 16px;
        display: block;
        color: #444;
      }


      &:first-child {
        display: flex !important;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        padding: 0 40px;
        background-color: transparent;
        pointer-events: none;

        &:hover {
          border: 2px solid transparent;

        }

        small {
          font-size: 0.965rem;
          margin-top: -50px;
        }

        h3 {
          font-size: 1.38rem;
          color: #333;
        }

      }

    }

  }



}

@media (max-width: 1200px) {
  .CollectDonations .content>* {
    width: 40%;
  }
}

@media (max-width: 500px) {
  .CollectDonations .content>*:first-child {
    padding: 0;
  }
}
</style>