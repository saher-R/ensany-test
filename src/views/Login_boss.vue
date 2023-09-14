<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//////////////
onMounted(() => {
  document.body.style.overflow = 'hidden';
  document.querySelector('footer').style.display = 'none';
})
onUnmounted(() => {
  document.body.style.overflow = 'auto';
  document.querySelector('footer').style.display = 'block';
})


</script>

<template>
  <div class="Login_boss">
    <div class="grid align__item">

      <div class="register">

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84"
            viewBox="77.7 214.9 274.7 412">
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stop-color="#8ceabb" />
                <stop offset="100%" stop-color="#378f7b" />
              </linearGradient>
            </defs>
            <path fill="url(#a)"
              d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" />
          </svg>

          <h2>Sign In to Insani Global Platform</h2>

          <form action="#" method="post" class="form">

            <div class="form__field">
              <label for="email">Email:</label>
              <input id="email" type="email" placeholder="info@mailaddress.com" required>
            </div>

            <div class="form__field">
              <label for="password">password:</label>
              <input id="password" type="password" placeholder="••••••••••••" required>
            </div>

            <div class="form__field">
              <input type="submit" value="Sign In">
            </div>

          </form>
        </div>

      </div>

    </div>
  </div>
</template>


<style lang="scss">
.Login_boss {
  // background-color: red;

  $base-bgcolor: #354152;
  $base-color: #7e8ba3;
  $base-font-weight: 300;
  $base-font-size: 1rem;
  $base-line-height: 1.5;
  $base-font-family: Helvetica Neue;
  $base-font-family-fallback: sans-serif;


  background-color: $base-bgcolor;
  color: $base-color;
  font: $base-font-weight #{$base-font-size}/#{$base-line-height} $base-font-family,
  $base-font-family-fallback;

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 10000;
  position: fixed;
  overflow: auto;


  .site {


    &__logo {
      margin-bottom: 2rem;
    }

  }

  $input-placeholder-color: #7e8ba3;

  input {
    border: 0;
    font: inherit;

    &::placeholder {
      color: $input-placeholder-color;
    }

  }

  .form {

    &__field {
      margin-bottom: 1rem;
    }

    input {
      outline: 0;
      padding: .5rem 1rem;

      &[type="email"],
      &[type="password"] {
        width: 100%;
      }

    }

  }

  $grid-max-width: 25rem;
  $grid-width: 100%;

  .grid {
    margin: 0 auto;
    max-width: $grid-max-width;
    width: $grid-width;
  }

  h2 {
    font-size: 1.33rem;
    font-weight: 100;
    margin: 0 0 1rem;
    text-transform: uppercase;
  }

  svg {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  $link-color: #7e8ba3;

  a {
    color: $link-color
  }

  .register {
    box-shadow: 0 0 250px #000;
    text-align: center;
    padding: 2rem 2rem;
    max-height: 82vh;
    min-height: 82vh;
    overflow: auto;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;


    .form__field {
      label {
        text-align: left;
        display: block;
        padding-bottom: 6.5px;
      }

      input {
        border: 1px solid #596473;
        border-radius: 999px;
        background-color: transparent;
        color: #f3f3f3;
        text-shadow: 0 0 2.2px #444;
        letter-spacing: 0.75px;

        &[type="email"],
        &[type="password"] {
          background-repeat: no-repeat;
          background-size: 1.5rem;
          background-position: 1rem 50%;
        }

        &[type="submit"] {
          background-image: linear-gradient(160deg, #8ceabb 0%, #378f7b 100%);
          color: #fff;
          width: 100%;
        }

      }

    }




  }


  ::-webkit-scrollbar {
    width: 6.5px;
  }

  ::-webkit-scrollbar-track {
    background: #283445;
    border-top: 4px solid #202935;
    border-bottom: 4px solid #202935;

  }

  ::-webkit-scrollbar-thumb {
    background: #59626d;
  }

  ::-webkit-scrollbar-thumb:horizontal:hover,
  ::-webkit-scrollbar-thumb:vertical:hover {
    background-color: #7c8692;
  }


}
</style>