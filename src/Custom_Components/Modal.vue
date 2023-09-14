<script setup>
import {
  onMounted,
  ref,
  watch,
} from 'vue';

/////////////////////

const props = defineProps({
  open: Boolean,
  toggleModal: Function,
})


watch(() => props.open, () => {
  if (props.open) {
    document.body.style.overflow = 'hidden';
  }
  else document.body.style.overflow = 'auto';
})

function toggleModalDiv(e) {
  if (e.target.classList.contains('custom-modal')) {
    props.toggleModal()
  }
}


</script>

<template>
  <div class="custom-modal" :class='{ open: open }' @click="toggleModalDiv">
    <div class="content-modal" :class='{ open: open }'>
      <slot />
    </div>
  </div>
</template>


<style lang="scss">
.custom-modal {
  position: fixed;
  left: 0;
  top: 0;
  // 
  visibility: hidden;
  opacity: 0;
  margin-top: -430px;
  // 
  transition: all 0.3s, background-color 0.9s, backdrop-filter 0.9s;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.345);
  backdrop-filter: blur(3px);
  z-index: 1000;

  &.open {
    visibility: visible;
    opacity: 1;
    margin-top: 0;
  }

  .content-modal {
    background-color: #fefefe;
    padding: 5px 0;
    border: 1px solid #888;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    visibility: hidden;
    opacity: 0;
    margin-top: -150px;
    scale: 0.3;
    transition: 0.7s;
    overflow: hidden;
    width: 492px;
    max-height: 91.5vh;
    max-width: 95vw;
    border-radius: 12px;

    &.open {
      visibility: visible;
      opacity: 1;
      margin-top: 0;
      scale: 1;

      &>*:first-child>* {
        margin-top: 0;
      }
    }

    &>*:first-child>* {
      margin-top: -350px;
      transition: 1s;
    }

  }


}
</style>