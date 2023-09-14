<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useTranslations } from '../stores/useTranslations';

/////////

//Translation...////////////////////////////
const translations = useTranslations(),
  TheFinalDonationPage_Translations = translations.TheFinalDonationPage_Translations;
const currentLanguage = computed(() => translations.currentLanguage);

const ar_Lang = TheFinalDonationPage_Translations.ar;
const en_Lang = TheFinalDonationPage_Translations.en;
const tr_Lang = TheFinalDonationPage_Translations.tr;

let useTheLang = computed(() => checkLocaleStorageLang());

function checkLocaleStorageLang() {
  switch (currentLanguage.value) {
    case "en":
      return en_Lang;
    case "ar":
      return ar_Lang;
    case "tr":
      return tr_Lang;
    default:
      return en_Lang;
  }
}
/////////////////////////////////////////////

///////// 
const donationAmount = ref("");
const donationAmount2 = ref("");
const totalDonationAmount = ref("");
const fullName = ref("");
const email = ref("");
const phoneData = ref({});
// 
const nameGivenTo = ref("");
const emailGivenTo = ref("");
const phoneDataGivenTo = ref({});
const leaveComment = ref("");
// 
const firstChecked = ref(true);
const secondChecked = ref("option1");
const thirdChecked = ref(false);
const fourthChecked = ref(false);
const hideNameChecked = ref(false);

// 
const refDonationAmount = ref();
const refDonationAmount2 = ref();
const refDonationAmountDiv2 = ref();

const refError_p_1 = ref();

const refDonationAmountDiv2_input = ref();
const refDonationAmountDiv2_error = ref();

const refThirdChecked = ref();


watch([donationAmount, currentLanguage], () => {
  if (donationAmount.value != "")
    if (donationAmount.value < 1) {
      refError_p_1.value.style.display = "block";
    } else {
      refError_p_1.value.style.display = "none";
      //
      donationAmount2.value = (Math.ceil(donationAmount.value * 0.2));
    }

  if (donationAmount.value == "") {
    donationAmount2.value = '';
  }
})

onMounted(() => {
  refError_p_1.value.style.display = "none";
  refDonationAmountDiv2_error.value.style.display = "none";
})

watch([donationAmount2, currentLanguage], () => {
  if (donationAmount2.value != "")
    if (donationAmount2.value < 1) {
      refDonationAmountDiv2_error.value.style.display = "block";
    } else {
      refDonationAmountDiv2_error.value.style.display = "none";
    }
})

watch(secondChecked, () => {
  if (secondChecked.value == "option2" || secondChecked.value == "option3") {
    refDonationAmountDiv2.value.style.display = "none";
  } else {
    refDonationAmountDiv2.value.style.display = "block";
  }
})

function handleSecondChecked({ target }) {
  secondChecked = target.value;
}

watch([firstChecked, secondChecked, donationAmount, donationAmount2],
  () => {
    if (
      secondChecked.value == "option2" ||
      secondChecked.value == "option3" ||
      !firstChecked.value
    ) {
      totalDonationAmount.value = (donationAmount.value);
    } else {
      totalDonationAmount.value = (Number(donationAmount.value) + Number(donationAmount2.value));
    }
  })

onMounted(() => {
  if (thirdChecked.value) {
    refThirdChecked.value.style.display = "block";
    // 
  } else {
    refThirdChecked.value.style.display = "none";
  }
})

watch(thirdChecked, () => {
  if (thirdChecked.value) {
    refThirdChecked.value.style.display = "block";
    //////// 

    // customWidthPhoneNums();
    // window.addEventListener('resize', customWidthPhoneNums)

  } else {
    refThirdChecked.value.style.display = "none";
  }
})

// onMounted(() => {
//   async function customWidthPhoneNums() {
//     const input2 = await document.querySelector(".TheFinalDonationPage #phone2");
//     const list2 = await document.querySelectorAll('.TheFinalDonationPage .iti__country-list')[1];
//     list2.style.width = input2.scrollWidth + 'px';
//   }
//   customWidthPhoneNums()
// })

function handleBtnUSD_1(amount) {
  donationAmount.value = (amount);
  donationAmount2.value = (Math.ceil(amount * 0.2));
}
function handleBtnUSD_2(amount) {
  donationAmount2.value = (amount);
}

watch(firstChecked, (newVal) => {
  // alert('changed first')
  if (!firstChecked.value) {
    refDonationAmountDiv2_input.value.style.display = "none";
    refDonationAmountDiv2_error.value.style.display = "none";
    //////////
  } else {
    refDonationAmountDiv2_input.value.style.display = "block";
  }
})



///////////////////////////////////////
const phone_num_1 = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});

const phone_num_2 = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});


import 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js';
onMounted(() => {

  // input1 phone ***
  const input1 = document.querySelector(".TheFinalDonationPage #phone1");

  const iti = window.intlTelInput(input1,
    {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => {
            callback(data.country_code);
            setTimeout(() => {
              phone_num_1.value.intoNum = data.country_calling_code;
              create_span_introNum();
              onClick_li_counrty();
            }, 20)
          })
          .catch(() => callback("us"));
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    }
  );

  function create_span_introNum() {
    const itiItem = document.querySelector('.TheFinalDonationPage .iti:has(input#phone1)')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phone_num_1.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty() {
    document.querySelectorAll('.TheFinalDonationPage .iti:has(input#phone1) li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.TheFinalDonationPage  .iti:has(input#phone1) span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
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
    phone_num_1.value = {
      number: input1.value,
      countryData: iti.getSelectedCountryData(),
    }
  }

  input1.addEventListener('keyup', checkPhone);
  input1.addEventListener("countrychange", checkPhone);

  //************************************************** */

  // input2 phone ***
  const input2 = document.querySelector(".TheFinalDonationPage #phone2");

  const iti_2 = window.intlTelInput(input2,
    {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => {
            callback(data.country_code);
            setTimeout(() => {
              phone_num_2.value.intoNum = data.country_calling_code;
              create_span_introNum__2();
              onClick_li_counrty__2();
            }, 20)
          })
          .catch(() => callback("us"))
      },
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    }
  );
  // alert(99)

  function create_span_introNum__2() {
    const itiItem = document.querySelector('.TheFinalDonationPage .iti:has(input#phone2)')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phone_num_2.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty__2() {
    document.querySelectorAll('.TheFinalDonationPage .iti:has(input#phone2) li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.TheFinalDonationPage .iti:has(input#phone2) span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
      })
    })
  }

  const reset_2 = () => {
    input2.classList.remove("err");
  };

  function checkPhone_2() {
    if (input2.value.trim()) {
      if (iti_2.isValidNumber()) {
        reset_2();
        // alert(1)
        //
      } else {
        // alert('0')
        input2.classList.add("err");
      }
    }
    phone_num_2.value = {
      number: input2.value,
      countryData: iti_2.getSelectedCountryData(),
    }
  }

  input2.addEventListener('keyup', checkPhone_2);
  input2.addEventListener("countrychange", checkPhone_2);



})
//////////////////
// onMounted(() => {
//   function customWidth() {
//     const input1 = document.querySelector(".TheFinalDonationPage #phone1");
//     const list = document.querySelectorAll('.TheFinalDonationPage .iti__country-list')[0];
//     list.style.width = input1.scrollWidth + 'px';
//   }
//   function customWidth2() {
//     const input2 = document.querySelector(".TheFinalDonationPage #phone2");
//     const list2 = document.querySelectorAll('.TheFinalDonationPage .iti__country-list')[1];
//     list2.style.width = input2.scrollWidth + 'px';
//   }
//   customWidth();
//   customWidth2();
//   window.addEventListener('resize', customWidth)
//   window.addEventListener('resize', customWidth2)
// })



</script>

<template>
  <div class="TheFinalDonationPage">
    <div :class='`content-page ${currentLanguage == "ar" && "rtl"}`'>
      <!-- {/* small-info *********************************************************************/} -->
      <div class="small-info">
        <img src="https://files.globalgiving.org/pfil/8503/pict_featured_jumbo.jpg?t=1577113753000" alt="" />
        <h3>
          <a href="">سلة غذائية رمضانية للأسر المحتاجة في قطاع غزة</a>
        </h3>
        <div class="the-line">
          <span></span>
        </div>
        <div>
          <b>{{ useTheLang.collected }} 2437 MYR</b> - {{ useTheLang.target }} 44200
          MYR
        </div>
      </div>
      <!-- {/* form-operations *********************************************************************/} -->
      <div class="form-operations">
        <form onSubmit={handleSubmit}>
          <!-- {/* 1 */} -->
          <div class="donation-amount-div">
            <label htmlFor="xxx1">
              {{ useTheLang.donationAmount }}
              <span>*</span>
            </label>
            <input id="xxx1" type="number" min={0} v-model="donationAmount" required ref='refDonationAmount' />
            <div class="btns-amounts">
              <button type="button" @click='handleBtnUSD_1(50)'>
                50 USD
              </button>
              <button type="button" @click='handleBtnUSD_1(100)'>
                100 USD
              </button>
              <button type="button" @click='handleBtnUSD_1(200)'>
                200 USD
              </button>
            </div>
          </div>
          <p class="error-donationAmount" ref='refError_p_1'>
            {{ useTheLang.err1 }}
          </p>
          <!-- {/* 2 */} -->
          <div class="donation-amount-div2" ref='refDonationAmountDiv2'>
            <div>
              <input type="checkbox" id="xxx2" v-model="firstChecked" />
              <label htmlFor="xxx2">{{ useTheLang.p1 }}</label>
              <span>
                <span style="text-transform: lowercase;">(i)</span>
                <p>{{ useTheLang.p2 }}</p>
              </span>
            </div>

            <div class="donation-amount-div" ref='refDonationAmountDiv2_input'>
              <input type="number" min={0} v-model="donationAmount2" required ref='refDonationAmount2' />
              <div class="btns-amounts">
                <button type="button" @click='handleBtnUSD_2(50)'>
                  50 USD
                </button>
                <button type="button" @click='handleBtnUSD_2(100)'>
                  100 USD
                </button>
                <button type="button" @click='handleBtnUSD_2(200)'>
                  200 USD
                </button>
              </div>
            </div>
            <p class="error-donationAmount2" ref='refDonationAmountDiv2_error'>
              {{ useTheLang.err1 }}
            </p>
          </div>
          <!-- {/* 3 */} -->
          <div class="donation-amount-div3">
            <div>
              <label htmlFor="">{{ useTheLang.donationType }}</label>
            </div>
            <div class="container">
              <div>
                <label htmlFor="zz1">
                  <input type="radio" id="zz1" value="option1" v-model="secondChecked" />
                  <span>{{ useTheLang.oneTime }}</span>
                </label>
              </div>
              <div>
                <label htmlFor="zz2">
                  <input type="radio" id="zz2" value="option2" v-model="secondChecked" />
                  <span>{{ useTheLang.monthly }}</span>
                </label>
              </div>
              <div>
                <label htmlFor="zz3">
                  <input type="radio" id="zz3" value="option3" v-model="secondChecked" />
                  <span>{{ useTheLang.weekly }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="donation-amount-div4">
            <div class="hideName-div">
              <label htmlFor="xxx4">{{ useTheLang.fullName }}</label>
              <div>
                <input type="checkbox" id="hideNameChecked" v-model="hideNameChecked" />
                <label htmlFor="hideNameChecked">{{ useTheLang.hideName }}</label>
              </div>
            </div>
            <input id="xxx4" type="text" v-model="fullName" required />
          </div>

          <div class="donation-amount-div5">
            <div class="email-div">
              <div>
                <label htmlFor="xxx5">{{ useTheLang.email }}</label>
              </div>
              <input id="xxx5" type="email" v-model="email" required />
            </div>
            <div class="phone-div">
              <div>
                <label htmlFor="xxx6">{{ useTheLang.phoneNumber }}</label>
              </div>

              <!-- ********* -->
              <!-- ********* -->
              <input class="input-num" id="phone1" type="tel" v-model="phone_num_1.number" required>
              <!-- ********* -->
              <!-- ********* -->

            </div>
          </div>

          <div class="donation-amount-div6">
            <div>
              <input type="checkbox" id="xxx12" v-model="thirdChecked" />
              <label htmlFor="xxx12">
                {{ useTheLang.makeYourDonationtotheoneyoulove }}
              </label>
            </div>

            <div ref='refThirdChecked' class="height_infoGivenTo">
              <div>
                <input type="text" :placeholder='useTheLang.nameOftheGiftedto' v-model="nameGivenTo"
                  :required='thirdChecked' />
              </div>
              <div>
                <input type="email" :placeholder='useTheLang.emailOftheGifterto' v-model="emailGivenTo"
                  :required='thirdChecked' />
                <div class="phone-div">


                  <!-- ********* -->
                  <!-- ********* -->
                  <input class="input-num" id="phone2" type="tel" v-model="phone_num_2.number" :required='thirdChecked'>
                  <!-- ********* -->
                  <!-- ********* -->

                </div>
              </div>
            </div>
          </div>

          <div class="donation-amount-div4 donation-amount-div7">
            <div>
              <label htmlFor="xxxc4">
                {{ useTheLang.leaveAcommentOnyourdonation }}
              </label>
            </div>
            <textarea id="xxxc4" v-model="leaveComment"></textarea>
          </div>
          <!-- {/*********************************************/} -->

          <!--  -->
          <div class="radio-payment">
            <label class="radio">
              <input name="radio" type="radio" checked>
              <span>
                <img src="https://www.merchantmaverick.com/wp-content/uploads/2014/02/Stripe-wordmark-blurple-large.png"
                  alt="">
              </span>
            </label>

            <label class="radio">
              <input name="radio" type="radio">
              <span>
                <img src="https://easydigitaldownloads.com/wp-content/uploads/edd/2019/03/stripe-product-image.png"
                  alt="">
              </span>
            </label>

            <label class="radio">
              <input name="radio" type="radio">
              <span>
                <img
                  src="https://static.wixstatic.com/media/70ebcf_50815ec2a39948be90d20a942463e7f6~mv2.jpg/v1/fill/w_480,h_206,al_c,lg_1,q_80,enc_auto/cash%20app%20logo.jpg"
                  alt="">
              </span>
            </label>
          </div>
          <!--  -->

          <div class="input-condition">
            <input type="checkbox" id="xxx13" required v-model="fourthChecked" />
            <label htmlFor="xxx13">
              {{ useTheLang.agreeTotheTermsandConditions }}
            </label>
          </div>
          <!-- {/*********************************************/} -->
          <button type="submit">
            {{ useTheLang.donateNow }} - USD {{ totalDonationAmount }}
          </button>
        </form>
      </div>
    </div>

    <!-- {/**********************************************************************************/} -->
    <!-- {/**********************************************************************************/} -->
    <!-- {/**********************************************************************************/} -->

  </div>
</template>


<style lang="scss">
.TheFinalDonationPage {

  .content-page {
    // height: 1800px;
    // padding: 50px 120px;
    padding: 25px 2% 50px;
    display: flex;
    justify-content: center;
    gap: 35px;
    overflow: hidden;

    &.rtl {
      direction: rtl;

      .form-operations .donation-amount-div .btns-amounts {
        left: 5%;
        text-align: left;
        width: fit-content;
        margin-right: auto;
      }

      .simple-phone-input-sri198-container {
        direction: ltr;
      }

      // 
      .iti {
        direction: ltr;
      }
    }

    >* {
      // margin: 0 30px;
    }

    label {
      cursor: pointer;
    }

    //////////////////////////////////////////// 
    .small-info {
      width: 370px;
      background-color: #fff;
      padding: 9px 10px;
      border-radius: 10px;
      height: -moz-fit-content;
      height: fit-content;
      box-shadow: 0 0 8.5px #ccc;

      img {
        width: 100%;
        max-height: 330px;
        object-fit: cover;
        margin: auto;
        display: block;
        border-radius: 9px 9px 0 0;
      }

      h3 {
        margin: 12px 0;
        font-size: 1.05rem;
        font-weight: 800;

        a {
          padding: 0 10px;
          transition: 0.12s;

          &:hover {
            color: var(--Primary-2-color);
            text-shadow: 1px 1px 0 #000000a1;
          }
        }
      }

      .the-line {
        position: relative;
        background-color: #ccc;
        width: 93.5%;
        margin: auto;
        height: 5px;
        border-radius: 5px;
        overflow: hidden;

        span {
          position: absolute;
          width: 72%;
          height: 100%;
          background-color: var(--Primary-2-color);
        }
      }

      div:last-child {
        // background-color: red;
        font-size: 0.95rem;
        padding: 15px 10px 0;

        b {
          padding-left: 5px;
        }
      }
    }

    //////////////////////////////////////////// 
    .form-operations {
      max-width: 770px;

      background-color: #fff;
      padding: 25px;
      border-radius: 10px;
      width: 70%;

      input:not([type=checkbox]),
      textarea {
        display: block;
        width: 100%;
        background-color: #eee;
        border: 2px solid transparent;
        transition: 0.3s;

        &:focus {
          border: 2px solid var(--Primary-2-color);
          background-color: #fff;
        }

        &.err {
          border: 2px solid transparent;
          outline: 3px solid red;
        }
      }

      .donation-amount-div {
        // background-color: red;
        margin: 12px 0 7px;
        position: relative;

        label {
          display: block;
          // margin: 0px 0 ;
          margin-bottom: 8px;
          font-size: 1.05rem;
          color: #777;
          font-weight: 800;

          span {
            color: red;
            font-weight: 800;
            font-size: 1rem;
          }
        }

        input {
          height: 75px;
          font-size: 1.7rem !important;
          animation: dssldd 0.26s;
        }

        .btns-amounts {
          position: absolute;
          bottom: 10%;
          right: 5%;
          animation: dssldd 0.26s;

          button {
            border-radius: 50px !important;
            padding: 2px 15px;
            background: #fff;
            color: #333;
            text-shadow: none;
            font-size: 1.1rem !important;
            border: 1px solid #000;
            margin: 0 1px;
            transition: 0.1s;

            &:hover {
              scale: 0.975;
              border: 1px solid #fff;
              box-shadow: 0 0 8px #00000031;
            }
          }
        }

      }

      p.error-donationAmount {
        color: red;
        font-weight: 600;
        font-size: 0.98rem;
      }

      p.error-donationAmount2 {
        color: red;
        font-weight: 600;
        font-size: 0.98rem;
        animation: dssldd 0.26s;

      }


      .donation-amount-div2 {
        // background-color: red;
        margin-top: 15px;

        &>div:first-child {
          //the (i) div
          display: flex;
          align-items: center;
          height: 15px;
          gap: 5px;

          span {
            // background-color: red;
            cursor: default;
            position: relative;

            p {
              position: absolute;
              top: 125%;
              left: 50%;
              width: -moz-fit-content;
              width: fit-content;
              transform: translateX(-50%);
              background-color: #111;
              color: #fff;
              width: 300px;
              z-index: 1;
              padding: 8px 10px;
              text-align: center;
              border-radius: 5px;
              opacity: 0;
              visibility: hidden;
              transition: 0.25s;
            }

            &:hover p {
              opacity: 1;
              visibility: visible;
            }
          }
        }

        input {
          height: 50px;
        }

        .btns-amounts {
          position: absolute;
          bottom: 22%;
          right: 5%;
        }


        // animation: opacity--- 0.25s;
        //animation 
        // @keyframes opacity--- {
        //   0% {
        //     opacity: 0;
        //     scale: 0.95;
        //   }
        // }

      }

      // input[type=checkbox] {
      //   display: inline-block;
      // }
      .donation-amount-div3 {
        &>div:first-child {
          label {
            display: inline-block;
            margin-top: 14px;
            font-size: 1.05rem;
            color: #777;
            font-weight: 800;
          }
        }

        .container {
          display: flex;
          justify-content: space-between;
          margin: 14px 0;

          &>div {

            &:last-child {
              // background-color: red;
              margin: 0 10px;
            }
          }

          &>*>label {
            display: flex;
            align-items: center;

            span {
              cursor: pointer;
            }

            input[type=radio] {
              scale: 1.3;
              width: fit-content;
              margin: 0 4px;
              display: inline-block;
            }
          }
        }


      }

      .donation-amount-div4 {

        margin-top: 16px;

        // margin-bottom: px;
        div:first-child {
          padding: 8px 0 6px;

          label {
            font-size: 1.05rem;
            color: #777;
            font-weight: 800;
          }

        }

        .hideName-div {
          display: flex;
          justify-content: space-between;
          align-items: center;

          div {
            display: flex;
            align-items: center;
            gap: 3px;
            padding: 0 5px;

            label {
              font-weight: 600 !important;
              font-size: 1.08rem;
            }

          }
        }

      }

      .donation-amount-div5 {
        display: flex;
        // width: 100%;
        justify-content: space-between;

        >* {
          width: 48%;
          margin: 14px 0;
          // flex: 0.95;
        }

        .email-div {

          // margin: 14px 0;
          // margin-top: 18px;
          div:first-child {
            margin-bottom: 10px;

            label {
              font-size: 1.05rem;
              color: #777;
              font-weight: 800;
            }
          }
        }

        .phone-div {


          div:first-child {

            label {
              font-size: 1.05rem;
              color: #777;
              font-weight: 800;
              display: inline-block;
              margin: 4px 0 7px;
            }
          }

        }
      }




      .donation-amount-div6 {
        border: 1px solid #ddd;
        padding: 10px 5px;
        border-radius: 4px;

        &>div:first-child {
          //the (i) div
          display: flex;
          align-items: center;
          height: 15px;
          gap: 5px;
          // background-color: red;
          padding: 15px 10px;

          label {
            cursor: pointer;
          }
        }

        &>div:nth-child(2) {

          &>div:nth-child(1) {
            // background-color: red;
            margin: 5px 5px;
          }

          &>div:nth-child(2) {
            display: flex;
            justify-content: space-between;

            img {
              width: 28px;
            }

            >* {
              width: 48%;
              margin: 14px 5px;
            }

            ////
            .phone-div {}


          }
        }

      }


      .donation-amount-div7 {
        >div:first-child {
          // background-color: red;
          margin-bottom: 3px;
        }

        textarea {
          width: 100% !important;
          height: 80px;
          resize: vertical;

          &:focus {
            outline: 0;
            padding: 8px;
            font-size: 0.95rem;
            font-family: inherit;
          }

          &::placeholder {
            padding: 10px;
            font-size: 0.95rem;
            font-family: inherit;

          }
        }
      }

      // 
      .radio-payment {

        .radio {
          display: block;
          cursor: pointer;
          user-select: none;
          text-align: left;

          &+.radio {
            // margin-top: 12px;
          }

          input {
            display: none;

            &+span {
              display: inline-block;
              position: relative;
              // padding-left: 30px;

              &:before {
                content: '';
                display: block;
                position: absolute;
                top: 13.5%;
                left: 1%;
                transform: translateY(-50%);
                border-radius: 50%;
                margin-right: 5px;
                width: 16px;
                height: 16px;
                border: 1px solid #ccc;
                background: #fff;
                transform-origin: center center !important;
                box-shadow: 0 0 5px 1.5px #bbb, 0 0 0.8px 0.2px #000;
              }

              &:after {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                // background: #222;
                background-color: var(--Primary-color);
                position: absolute;
                border-radius: 50%;
                top: 13.5%;
                left: calc(1% + 3px);
                opacity: 0;
                transform: scale(0, 0) translateY(calc(-50% + 0.4px)) translateX(1.1px);
                transform-origin: center center !important;
                transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
              }
            }

            &:checked+span:after {
              opacity: 1;
              transform: scale(1, 1) translateY(calc(-50% + 0.4px)) translateX(1.1px);
              transform-origin: center center !important;

            }
          }
        }


        display: flex;
        align-items: center;
        gap: 6.5px;
        padding: 28px 5px 20px;
        padding-bottom: 0;
        flex-wrap: wrap;

        >label.radio {
          // height: 160px;
          border: 1px solid #eee;
          border-radius: 8px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          // min-height: 100px;
          padding: 5px;

          span img {
            // width: 2px;
            width: 130px;
            height: 75px;
            border-radius: 8px;
            object-fit: contain;
            // border: 1px solid red;
          }

        }


      }


      // 
      .input-condition {
        //the (i) div
        display: flex;
        align-items: center;
        height: 15px;
        gap: 5px;
        // background-color: red;
        padding: 30px 3px 15px;

        label {
          cursor: pointer;
        }
      }

      // 
      button[type=submit] {
        font-weight: 600;
        background-color: var(--Primary-2-color);
        border-radius: 30px !important;
        display: block;
        width: 100%;
        font-size: 1.3rem !important;
        transition: 0.12s;
        margin-top: 22px;

        &:hover {
          scale: 0.985;
        }
      }

    }


  }

  //**************************************************************** 



  // For Phone Input...
  .iti {
    width: 100%;

    .iti__country-list {
      top: 106%;
      transition: 0.2s;
      user-select: none;
      overflow-x: hidden;


      &.iti__hide {
        // background-color: red;
        display: block;
        visibility: hidden;
        opacity: 0;
        // scale: 0.94;
        margin-top: 7px;
        transform-origin: left top;
        background-color: #bbb;

      }

      li.iti__country {
        padding: 10px 10px;
        flex-wrap: wrap;
        gap: 12px 10px;

        .iti__flag-box>div {
          scale: 1.06;
          border-radius: 1.5px;
        }

        // padding: 100px 100px;
        // justify-content: center;
        .iti__country-name {
          flex: 1;
          padding: 0 0px;
        }
      }

      .iti__flag-box,
      .iti__country-name {
        margin-right: 2.5px;
      }

    }

    .iti__arrow {
      scale: 1.1;
      transform: scaleY(1.2) translateY(-0.3px);
      transition: 0.4s;
    }
  }

  .iti--allow-dropdown input,
  .iti--allow-dropdown input[type=text],
  .iti--allow-dropdown input[type=tel],
  .iti--separate-dial-code input,
  .iti--separate-dial-code input[type=text],
  .iti--separate-dial-code input[type=tel] {

    padding-left: 100px !important;

  }

  .iti {
    span.intro_num_custom {
      position: absolute;
      left: 50px;
      top: 50%;
      transform: translateY(-50%);
    }
  }


}


.simple-phone-input-sri198-dropdown.active {
  z-index: 1;
}



///////////////// 

.TheFinalDonationPage {
  .height_infoGivenTo {
    transition: 0.26s;
    animation: dssldd 0.26s;
  }
}

@keyframes dssldd {
  0% {
    transform: scaleY(0);
  }
}



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
@media (max-width:1245px) {


  .TheFinalDonationPage {
    .content-page {
      padding: 25px 5%;
    }
  }
}

@media (max-width:1000px) {


  .TheFinalDonationPage {
    .content-page {
      padding: 25px 2.5%;
    }
  }
}


@media (max-width:955px) {


  .TheFinalDonationPage {
    .content-page {
      flex-direction: column;

      &>* {
        width: 90% !important;
        margin: 0 auto;
      }
    }

  }
}


@media (max-width:660px) {

  html {
    font-size: 14px;
  }

  .TheFinalDonationPage {
    .content-page {
      padding: 20px 0.5%;

      >* {
        width: 96% !important;
      }
    }

  }

  ////////////////////
  .TheFinalDonationPage .content-page .form-operations .donation-amount-div input {
    padding-bottom: 33px
  }

  .TheFinalDonationPage .content-page .form-operations .donation-amount-div input {
    padding-bottom: 5px;
  }

  .TheFinalDonationPage .content-page .form-operations .donation-amount-div5 {
    flex-direction: column;

    >* {
      width: 100%;
    }

    .email-div {
      margin-bottom: 8px;

    }

    .phone-div {
      margin-top: 0px;
    }
  }


  //////////
  .TheFinalDonationPage {
    .content-page {
      .height_infoGivenTo>*:nth-child(2) {
        flex-direction: column;

        >* {
          width: 98% !important;
        }

        .email-div {
          margin-bottom: 8px;

        }

        .phone-div {
          margin-top: 0px;
        }
      }
    }

  }

}



@media (max-width:545px) {

  .TheFinalDonationPage {
    .content-page {}
  }

  /////////
  .TheFinalDonationPage .content-page .form-operations .donation-amount-div input {
    padding-bottom: 45px;
  }

  .TheFinalDonationPage .content-page .form-operations .donation-amount-div2 input {
    height: 75px;
  }


}



@media (max-width:480px) {
  .TheFinalDonationPage .content-page .form-operations .donation-amount-div2>div:first-child span p {
    width: 170px;
  }
}

@media (max-width:400px) {
  .TheFinalDonationPage .content-page .form-operations .donation-amount-div2>div:first-child span p {
    width: 130px;
  }

  .TheFinalDonationPage .content-page .form-operations {
    padding: 25px 7px;
  }
}



@media (max-width:500px) {
  .TheFinalDonationPage .iti__country-list {
    width: 82vw;
  }
}
</style>