<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

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

/////////
const typeOfUser = ref('');
const typeOfCounty = ref('');
const typeOfTown = ref('');
//////////
const isCompany = ref('');
const selectMajors = ref('');
const typeOfAssociation = ref('');


const phoneData = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});

import 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js';
onMounted(() => {

  // input phones ***
  const input1 = document.querySelector(".Singup_user #phone-signup");

  const iti = window.intlTelInput(input1,
    {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => {
            callback(data.country_code);
            setTimeout(() => {
              phoneData.value.intoNum = data.country_calling_code;
              onClick_li_counrty();
              create_span_introNum();
            }, 20)
          })
          .catch(() => callback("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    }
  );

  function create_span_introNum() {
    const itiItem = document.querySelector('.Singup_user .iti')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phoneData.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty() {
    document.querySelectorAll('.Singup_user:has(input#phone-signup) .iti li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.Singup_user .iti span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
      })
    })
  }

  const reset = () => {
    input1.classList.remove("err");
  };

  function checkPhone() {
    if (input1.value.trim()) {
      if (iti.isValidNumber()) {
        reset();
        // alert(1)
        //
      } else {
        // alert('0')
        input1.classList.add("err");
      }
    }
    phoneData.value = {
      number: input1.value,
      countryData: iti.getSelectedCountryData(),
    }
  }

  input1.addEventListener('keyup', checkPhone);
  input1.addEventListener("countrychange", checkPhone);

})


const currentImgSrc = ref('https://media.istockphoto.com/id/1327592449/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=yqoos7g9jmufJhfkbQsk-mdhKEsih6Di4WZ66t_ib7I=');


function catchImg(e) {
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    currentImgSrc.value = dataURL;
  }
  reader.readAsDataURL(e.target.files[0]);
}


</script>

<template>
  <div class="Singup_user">
    <div class="content">
      <div class="top">
        <a href="#">Insany global platform</a>
        <span>Register a new membership with us, it's a simple process.</span>
      </div>



      <form action="#" class="info">
        <div class="img-select">
          <img :src="currentImgSrc" alt="" class="current-img">
          <label for="file_img">
            <img src="https://icon-library.com/images/camera-icon-white/camera-icon-white-15.jpg" alt=""
              class="take-a-picture" draggable="false" />
          </label>
          <input type="file" id="file_img" @change="catchImg" required>
        </div>
        <div class="inputs-selects">
          <select v-model="typeOfUser" required>
            <option value="" selected disabled>Choose the type of user:</option>
            <option value="type-1">111</option>
            <option value="type-2">222</option>
            <option value="type-3">333333333333333333333</option>
          </select>
          <input type="text" placeholder="First Name:" required>
          <input type="text" placeholder="Last Name:" required>
          <input type="text" placeholder="Email:" required>
          <div class="phone-nums">
            <input v-model="phoneData.number" type="text" id="phone-signup" required>
          </div>
          <br />
          <input type="text" placeholder="Choose a difficult word:" required>
          <input type="text" placeholder="Confirm password:" required>

          <select v-model="typeOfCounty" required>
            <option value="" selected disabled>Choose Country:</option>
            <option value="type-1">111</option>
            <option value="type-2">222</option>
            <option value="type-3">333333333333333333333</option>
          </select>

          <select v-model="typeOfTown" required>
            <option value="" selected disabled>Choose Town:</option>
            <option value="type-1">111</option>
            <option value="type-2">222</option>
            <option value="type-3">333333333333333333333</option>
          </select>

          <!--***********************-->
          <template v-if="typeOfUser == 'type-1'">
            <select v-model="isCompany" required>
              <option value="" selected disabled>Are you Company:</option>
              <option value="type-1">yes</option>
              <option value="type-2">no</option>
            </select>
            <input v-if="isCompany == 'type-1'" type="number" placeholder="Count Of Emploies:" required>
          </template>
          <template v-if="typeOfUser == 'type-2'">
            <select v-model="selectMajors" required>
              <option value="" selected disabled>Select Majors:</option>
              <option value="type-1">ssss</option>
              <option value="type-2">ssss</option>
              <option value="type-3">ssss</option>
              <option value="type-4">ssss</option>
            </select>
            <input type="number" placeholder="Hours in Week:" required>
          </template>

          <template v-if="typeOfUser == 'type-3'">
            <input type="text" placeholder="Name of Association:" required>
            <select v-model="typeOfAssociation" required>
              <option value="" selected disabled>Type of Association:</option>
              <option value="type-1">ssss</option>
              <option value="type-2">ssss</option>
              <option value="type-3">ssss</option>
              <option value="type-4">ssss</option>
            </select>
          </template>


          <!--***********************-->

        </div>





        <div class="conditions">
          <label class="label-condition" for="label-condition">
            <span>
              <input type="checkbox" id="label-condition" required />
            </span>
            <span>
              I accept the <a href="#">Terms</a> of Use and confirm that I have read <a href="#">the Privacy Policy</a>.
            </span>
          </label>
        </div>

        <button type="submit" class="SignUp-btn">
          Sign Up
        </button>


        <p>
          Are you already a member? <a href="#">click here to singin</a>
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
    max-height: 82vh;
    min-height: 88.5vh;
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
    border-radius: 8px;
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

      >input[type=file]#file_img {
        width: 30px;
        height: 30px;
        border-radius: 50% !important;
        margin-top: -37px;
        margin-bottom: 8px;
        transform: translateX(-10px);
        opacity: 0;
        pointer-events: none;
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
        width: 47% !important;
        padding: 10.55px 12px !important;
        border-radius: 5.5px !important;
        font-size: 0.918rem !important;
        background-color: #ffffffeb;
        margin: 1.35px 4px;

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
      padding-left: 90px !important;

      &.err {
        border: 2px solid transparent;
        outline: 2px solid var(--red);
        outline-offset: 2.55px;
      }
    }
  }



  .iti--allow-dropdown input,
  .iti--allow-dropdown input[type=text],
  .iti--allow-dropdown input[type=tel],
  .iti--separate-dial-code input,
  .iti--separate-dial-code input[type=text],
  .iti--separate-dial-code input[type=tel] {

    padding-left: 100px!important;

  }

  .iti {
    span.intro_num_custom {
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
      color: #000;
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