<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="BeforeFooter">
    <div class="before-footer--">
      <a aria-label="text content" href="/paragraph_88888">Market With Us, Leave Your Mark</a>
      <div>
        <a aria-label="text content" href="/paragraph_88888">Register As A Volunteer</a>
        <a aria-label="text content" href="/paragraph_88888">Register By Contacting Us</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.BeforeFooter {
  // background-color: red;
  position: relative;
  z-index: 100;
  // *****************************************************************************************

  .before-footer-- {
    // the login div
    // background: linear-gradient(to left, #e66465, #9198e5);
    background: linear-gradient(to right, var(--Primary-color), #222);
    width: 88%;
    margin: auto;
    border-radius: 30px;
    text-align: center;
    padding: 45px 0 65px;
    margin-top: 50px;
    margin-bottom: -35px;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 18px #55555585 inset;

    div {
      // background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 22px;

      a:nth-child(2) {
        display: inline-block;
        background-color: rgb(255, 255, 255);
        outline: 3.5px solid var(--Primary-color);
        outline-offset: 4px;
      }

      a:nth-child(1) {
        display: inline-block;
        background-color: var(--Primary-lite-color);
        color: #fff;
        text-shadow: 0.5px 1.5px 5px #000;
      }
    }

    a {
      // width: fit-content;
      // margin: auto;
      padding: 11px 30px;
      font-size: 1.4rem;
      border-radius: 30px;
      margin-top: 20px;

      &:nth-child(1) {
        display: block !important;
        // background-color: var(--Primary-lite-color);
        font-size: 1.56rem;
        color: #fff;
        text-shadow: 0.5px 1.5px 5px #000;
        font-weight: 600;
      }




    }


  }




}



@media (max-width:820px) {
  .BeforeFooter .before-footer-- {
    width: 94%;
  }

}

@media (max-width:820px) {
  .BeforeFooter {

    // .content-page {

    .before-footer-- div {
      flex-direction: column;
      // background-color: red;

      a {
        &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }

  // }
}
</style>