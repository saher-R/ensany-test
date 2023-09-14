<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//////////////
onMounted(() => {
  document.body.style.overflow = 'hidden';
  document.querySelector('nav').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.querySelector('.BeforeFooter').style.display = 'none';
})
onUnmounted(() => {
  document.body.style.overflow = 'auto';
  document.querySelector('nav').style.display = 'block';
  document.querySelector('footer').style.display = 'block';
  document.querySelector('.BeforeFooter').style.display = 'block';
})



</script>

<template>
  <div class="Singup_user">
    <div class="content">
      <div class="top">
        <a href="#">Insany global platform</a>
        <span>Not a member yet? <a href="#">Click here</a> to register a new account</span>
      </div>
      <form action="#" class="info">


        <div class="inputs-selects">
          <input type="text" placeholder="Email:" required>
          <input type="text" placeholder="Password:" required>
          <!--***********************-->
        </div>





        <div class="conditions">
          <label class="label-condition" for="label-condition">
            <span>
              <input type="checkbox" id="label-condition" />
            </span>
            <span>
              remember me
            </span>
          </label>
        </div>

        <button type="submit" class="SignUp-btn">
          Sign In
        </button>


        <p>
          Do you Forget password? <a href="#">Click to reset</a>
        </p>

        <div class="lang-div">
          <a href="#" class="active">English</a>
          <a href="#">Arabic</a>
        </div>


      </form>
      <div class="bottom">
        use <a href="#">Insany global platform</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.Singup_user {
  // background-color: red;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(201deg, rgb(0 0 0 / 28%) 55%, rgba(0, 0, 0, 0.31) 120%), url('../assets/background-logins.jpg') center;
  background-size: cover;
  background-attachment: fixed;

  >.content {
    // max-height: 82vh;
    // min-height: 88.5vh;
    width: 540px;
    border: 1px solid #c7c7c720;
    border-radius: 8px;
    color: #fcfcfc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4.5px 48px 4px rgb(0 0 0 / 77%);
    user-select: none;
    overflow: hidden;

    >.top,
    >.bottom {
      background-color: rgb(255 255 255 / 10%);
      padding: 18px;
      text-align: center;
      backdrop-filter: blur(21.5px);
      margin-top: -1.5px;
    }

    >.top {
      display: flex;
      flex-direction: column;
      gap: 18px;

      >a {
        font-size: 1.55rem;
        color: #fcfcfc !important;
        text-shadow: 0 0 18px #000, 0 0 28px #000, 0 0 48px #000;
        font-weight: 600;
      }

      >span {
        font-size: 0.8725rem;
        letter-spacing: 0.6px;
        margin-top: -12px;

        a {
          color: #eee;
          font-weight: 600;
          text-shadow: 0 0 5px #000;
        }
      }

    }

    >.bottom {
      a {
        font-weight: 600;
        color: #8cabd7c6;
        padding: 0 3.5px;
      }
    }
  }

  .info {
    overflow: auto;
    overflow-x: hidden;
    // 
    flex: 1;
    padding: 0 6px;
    padding-bottom: 32px;
    // 
    backdrop-filter: blur(8px);
    background-color: rgb(0 0 0 / 11%);
    padding-top: 65px;
    padding-bottom: 65px;
    padding-left: 4%;
    padding-right: 4%;

    .img-select {

      padding: 12px 0 11px;
      text-align: center;

      >* {
        display: block;
        margin: 0 auto;
      }

      >img.current-img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        object-fit: contain;
        box-shadow: 0 0 14px 1.5px rgba(255, 255, 255, 0.1882352941);
      }

      >label {
        width: fit-content;

        >img.take-a-picture {
          width: 39px;
          height: 40px;
          border-radius: 50%;
          object-fit: contain;
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.6745098039);
          padding: 0px 4px;
          margin-top: -16px;
          cursor: pointer;
          pointer-events: auto;
          margin-top: -20px;
          margin-left: -130%;
          background-color: #ffffff1a;
          filter: drop-shadow(0px 0px 2px #000);

        }

      }

      >input[type=file]#file-img {
        display: none;
      }

    }


    .inputs-selects {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: flex-start;

      input,
      select,
      >* {
        width: 98% !important;
        padding: 10.55px 12px !important;
        border-radius: 5.5px !important;
        font-size: 0.918rem !important;
        background-color: #ffffffeb;
        margin: 2.5px 4px;

        &.phone-nums {
          padding: 0 !important;
        }

        &#phone-signup {
          width: 100%;
          // width: 100%;
        }
      }

    }


    .conditions {
      width: fit-content;

      .label-condition {
        display: flex;
        gap: 6px;
        padding: 13px 10px;
        margin: 8px 6px;
        color: #cecece;
        font-size: 0.9rem;

        input[type=checkbox] {
          width: fit-content !important;
          scale: 1.1315;
          transform: translateY(3px);
        }

        >span:nth-child(2) {
          line-height: 135%;
          word-spacing: 1px;

          a {
            margin: 0 6px;
            color: #dadada;
            font-weight: 600;
            font-size: 0.85rem;
          }
        }
      }
    }


    >.SignUp-btn {
      background-color: #607ca1;
      padding: 8px 40px;
      margin-left: 12px;
      margin-bottom: 12px;
      font-weight: 600;
      box-shadow: 0 0 45px 3.5px #68689da8;

      &:hover,
      &:focus {
        background-color: #4b617e;
        box-shadow: 0 0 0px 2.8px #8e8ebba8;

      }
    }

    >p {
      font-size: 0.925rem;
      padding: 6px 12px;

      a {
        padding: 0 4px;
        color: #afaff2;
        font-weight: 600;
        font-size: 0.85rem;
      }
    }


    >.lang-div {
      display: flex;
      gap: 8px;
      padding: 8px;
      padding-top: 18px;

      >a {
        background-color: #f9f9f9bc;
        padding: 3.15px 13px;
        border-radius: 2px;
        color: #000;
        border: 0.5px solid transparent;
        font-size: 0.85rem;

        &.active {
          background-color: transparent;
          border: 0.5px solid #ffffff0e;
          color: #fff;
        }
      }
    }

  }





  .iti {

    // margin-left: 30px!important;
    .iti__country-name {
      color: #000;
    }

    .iti__country-list {
      max-width: 530%;
    }

    ///////////////////// 
    ::-webkit-scrollbar {
      height: 7px;
    }

  }

  .iti.iti--allow-dropdown.iti--show-flags {
    padding: 0 !important;

    #phone-signup {
      width: 100% !important;
      margin: 0;
      background-color: transparent;
      padding-left: 50px !important;

      &.err {
        border: 2px solid transparent;
        outline: 2px solid var(--red);
        outline-offset: 2.55px;
      }
    }
  }






  //////////////////////////////////////////////////// 
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


@media (max-width:460px) {

  .Singup_user .info .inputs-selects input,
  .Singup_user .info .inputs-selects select,
  .Singup_user .info .inputs-selects>* {
    width: 100% !important;
  }

  .Singup_user {
    .iti {
      width: 100%;
    }

    br {
      display: none;
    }
  }

  .iti__country-list {
    width: 95vw !important;
  }
}
</style>