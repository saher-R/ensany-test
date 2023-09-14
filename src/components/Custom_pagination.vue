<script setup>
import { ref, onMounted } from 'vue'

//////////////



</script>

<template>
  <div class="Custom_pagination">

    <ul class="__pagination">
      <li class="__pagination__btn left">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="690" viewBox="0 0 800 690" fill="none">
            <path
              d="M7.47041 357.208L407.561 685.559C417.559 693.58 422.112 690.317 417.735 678.268L312.917 364.496C308.534 352.452 308.577 332.932 313.009 320.909L417.642 11.7068C422.076 -0.320079 417.518 -3.61916 407.469 4.33655L7.56446 328.283C-2.48446 336.238 -2.52693 349.193 7.47041 357.208Z"
              fill="black" />
            <path
              d="M388.07 357.208L788.161 685.559C798.159 693.58 802.712 690.317 798.335 678.268L693.516 364.496C689.134 352.452 689.177 332.932 693.609 320.909L798.241 11.7068C802.674 -0.320079 798.116 -3.61916 788.067 4.33655L388.163 328.283C378.115 336.238 378.073 349.193 388.07 357.208Z"
              fill="black" />
          </svg>
        </a>
      </li>
      <li class="__pagination__numbers">
        <a href="#">
          1
        </a>
      </li>
      <li class="__pagination__numbers active"><a href="#">
          2
        </a>
      </li>
      <li class="__pagination__numbers">
        <a href="#">
          3
        </a>
      </li>
      <li class="__pagination__numbers">
        <a href="#">
          4
        </a>
      </li>
      <li class="__pagination__numbers">
        <a href="#">
          5
        </a>
      </li>
      <li class="__pagination__numbers">
        <a href="#">
          6
        </a>
      </li>
      <li class="__pagination__dots">...</li>
      <li class="__pagination__numbers">
        <a href="#">
          10
        </a>
      </li>
      <li class="__pagination__btn right">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="690" viewBox="0 0 800 690" fill="none">
            <path
              d="M7.47041 357.208L407.561 685.559C417.559 693.58 422.112 690.317 417.735 678.268L312.917 364.496C308.534 352.452 308.577 332.932 313.009 320.909L417.642 11.7068C422.076 -0.320079 417.518 -3.61916 407.469 4.33655L7.56446 328.283C-2.48446 336.238 -2.52693 349.193 7.47041 357.208Z"
              fill="black" />
            <path
              d="M388.07 357.208L788.161 685.559C798.159 693.58 802.712 690.317 798.335 678.268L693.516 364.496C689.134 352.452 689.177 332.932 693.609 320.909L798.241 11.7068C802.674 -0.320079 798.116 -3.61916 788.067 4.33655L388.163 328.283C378.115 336.238 378.073 349.193 388.07 357.208Z"
              fill="black" />
          </svg>
        </a>
      </li>
    </ul>


  </div>
</template>


<style lang="scss">
.Custom_pagination {
  // background-color: red;


  .__pagination {
    // width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // height: 5rem;
    // margin: 3rem;
    border-radius: 0.6rem;
    background: #ffffff;
    box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
    // background-color: red;
    user-select: none;
    margin: 22px 0;

    &__numbers,
    &__btn,
    &__dots {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.8rem;
      font-size: 1.4rem;
      cursor: pointer;

      overflow: hidden;

      a {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: calc(200% - 3.5px);
      }

    }

    &__dots {
      width: 2.6rem;
      height: 2.6rem;
      color: var(#23adade1);
      cursor: initial;
    }

    &__numbers {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.4rem;

      &:hover {

        &,
        * {
          color: var(--Primary-color);
        }
      }

      &.active {

        &,
        * {
          color: #ffffff;
          background: var(--Primary-color);
          font-weight: 600;
          border: 1px solid var(--Primary-color);
        }
      }
    }

    &__btn {
      cursor: pointer;

      svg {
        width: 22px;
        height: 22px;

        * {
          fill: #626262;
        }

      }

      &.left {
        // transform: ;
      }

      &.right {
        transform: rotateY(-180deg);
      }

      &.active {
        color: var(#2d4848);
        pointer-events: initial;

        &:hover {
          color: #23adad;
        }
      }
    }
  }



}

#app {

  &.rtl {

    .Custom_pagination .__pagination__btn {

      &.left {
        transform: rotateY(180deg);
      }

      &.right {
        transform: rotateY(0deg);
      }

    }

    .Custom_pagination .__pagination__numbers a {
      text-align: center!important;
    }

  }

}
</style>