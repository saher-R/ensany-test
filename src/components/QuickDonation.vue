<script setup>
import { ref, onMounted, watch } from 'vue'

//////////////

import '../../manual_libraries/phone_input_numbers.min.js';

const phoneData = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});

const amount_quick = ref(0);

const open_info_quick = ref(false);

onMounted(() => {

  // input phones ***
  const input1 = document.querySelector(".QuickDonation #phone1_QuickDonation");

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
    const itiItem = document.querySelector('.home .iti')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phoneData.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty() {
    document.querySelectorAll('.home .QuickDonation .iti li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.home .QuickDonation .iti span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
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


watch(open_info_quick, (newVal) => {
  const itemContent = document.querySelector('.QuickDonation .relative-div >form')
  const openDiv = document.querySelector('.QuickDonation .relative-div >.open-div')
  if (newVal) {
    itemContent.style.cssText = `
      max-height: ${itemContent.scrollHeight + 20}px;
      `;
    //
    openDiv.style.cssText = `
      width: ${itemContent.scrollWidth}px;
      max-width: ${itemContent.scrollWidth + 20}px;
    `
  }
  else {
    itemContent.style.cssText = `
      max-height: 0;
      overflow: hidden;
      `;
    // 
    openDiv.style.width = '162px'
    // 
    if (window.innerWidth < 650) {
      openDiv.style.maxWidth = '150px'
    }
  }
})


// onMounted(() => {
//   document.querySelector('.QuickDonation .iti').addEventListener('click', () => {
//     document.querySelector('.QuickDonation >form').style.overflow = 'visible'
//   })
// })

</script>

<template>
  <div class="QuickDonation">
    <!-- <form action="#"> -->

    <div class="relative-div">
      <form action="#">
        <div class="content-donate" :class="`${open_info_quick && 'open'}`">
          <div class="amounts">
            <span @click="amount_quick = 10">10 {{ 'USD' }}</span>
            <span @click="amount_quick = 150">150 {{ 'USD' }}</span>
            <span @click="amount_quick = 45">45 {{ 'USD' }}</span>
          </div>

          <div class="input-div-amount">
            <input type="text" class="money-input" required v-model="amount_quick">
            <div class="icon">
              <img src="https://front.digital-evolution.online/money-icon-img.webp" alt="text content">
              <span>{{ 'USD' }}</span>
            </div>
          </div>
          <div class="info-person">
            <input type="text" placeholder="Full Name" required>
            <input type="text" placeholder="Email" required>
            <input class="" id="phone1_QuickDonation" type="tel" v-model="phoneData.number" required>
          </div>

          <!--  -->
          <!--  -->
          <div class="radio-payment">
            <label class="radio">
              <input name="radio" type="radio" checked required>
              <span>
                <img src="https://www.menabytes.com/wp-content/uploads/2019/02/Stripe-Logo.png" alt="text content">
              </span>
            </label>

            <label class="radio">
              <input name="radio" type="radio" required>
              <span>
                <img src="https://www.menabytes.com/wp-content/uploads/2019/02/Stripe-Logo.png" alt="text content">
              </span>
            </label>

            <label class="radio">
              <input name="radio" type="radio" required>
              <span>
                <img src="https://www.menabytes.com/wp-content/uploads/2019/02/Stripe-Logo.png" alt="text content">
              </span>
            </label>
          </div>
          <!--  -->
          <!--  -->
          <button aria-label="text content" class="donate-btn">
            donate now :<span>{{ amount_quick == (undefined || '') ? 0 : Number(amount_quick).toLocaleString("en-US") +
              '$'
            }}</span>
          </button>

        </div>
      </form>


      <div class="open-div" @click="open_info_quick = !open_info_quick">
        <span>Quick Donation</span>
        <i class="fa-solid fa-plus" :class="`${open_info_quick && 'rotate--'}`"></i>
      </div>
    </div>


    <!-- </form> -->
  </div>
</template>


<style lang="scss">
.QuickDonation {

  position: fixed;
  // top: 22.5%;
  top: 77.5%;
  left: 0;
  z-index: 1000;

  box-shadow: 0 0 8px #999;

  background-color: #fff;
  border-top-right-radius: 4.5px;
  border-bottom-right-radius: 4.5px;


  .relative-div {
    position: relative;

    >.open-div {
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 0 4.5px 4.5px 0;
      overflow: hidden;

      >* {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
      }

      >span {
        flex: auto;
        padding: 0 6px;
      }

      >i {
        background-color: var(--Primary-dark-color);
        padding: 12px 15px;
        font-size: 0.925rem;
        color: #fff;
        text-shadow: 0.5px 0.25px 2.5px #555;

        &::before {
          transition: 0.3s;
        }

        &.rotate-- {
          &::before {
            rotate: 45deg;
            scale: 1.35;
          }
        }
      }
    }

    >form {

      // transition: all 0.35s linear, max-height 0.35s linear;
      transition: all 0.485s;
      max-height: 0;
      transform-origin: bottom;
      padding: 0;
      overflow: hidden;
      // opacity: 0.35;
      // transform: scaleY(0);
      border-bottom-right-radius: 4.5px;
      /////////
      position: absolute;
      bottom: 100%;
      left: 0;
      background-color: #fff;
      border-radius: 4.5px 4.5px 0 0;
      box-shadow: 0 -5px 9.5px #7777777a;


      >.content-donate {
        width: 300px;
        padding: 8px 16px;
        user-select: none;
        border-bottom-right-radius: 4.5px;

        .amounts {
          display: flex;
          align-items: center;
          gap: 8.5px;
          padding: 10px 0;

          >span {
            width: 100%;
            border: 1px solid #bebebe;
            text-align: center !important;
            // max-width: 50px;
            padding: 6px 0;
            font-size: 0.818rem;
            font-weight: 600;
            color: #535353;
            cursor: pointer;
            border-radius: 8px;

            &:hover {
              border: 1px solid var(--Primary-color);
              color: var(--Primary-dark-color);

            }
          }
        }


        .input-div-amount {
          position: relative;

          input.money-input {
            border: 1px solid #bebebe;
            width: 100%;
            padding-right: 65px;
          }

          .icon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;

            >img {
              width: 22px;
              filter: contrast(0.75);
            }

            >span {
              font-size: 0.88rem;
            }
          }




        }

        .info-person {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 12px 0;

          input {
            border: 1px solid #bebebe;
            width: 100%;

            &::placeholder {
              font-size: 0.95rem;
              color: #aaa;
            }
          }


          // 
          input:not([type=checkbox]),
          textarea {
            &.err {
              border: 2px solid transparent;
              outline: 3px solid red;
            }
          }

        }


        // 
        .radio-payment {
          margin: 0.5rem 0;

          .radio {
            display: block;
            cursor: pointer;
            user-select: none;
            text-align: left;

            &+.radio {}


            transition: 0.3085s;

            &:has(input:checked) {
              box-shadow: 0 0 0 2.5px var(--Primary-color);

              input+span::before {
                background-color: var(--Primary-color);
                scale: 0.888;
                display: block;
              }
            }


            input {
              display: none;

              &+span {
                display: inline-block;
                position: relative;

                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  top: -2px;
                  left: -8px;
                  transform: translateY(-50%);
                  border-radius: 50%;
                  margin-right: 5px;
                  width: 16px;
                  height: 16px;
                  border: 1px solid #ccc;
                  background: #fff;
                  background: transparent;
                  // background: var(--Primary-color);
                  transform-origin: center center !important;
                  box-shadow: 0 0 5px 1.5px #bbbbbb61, 0 0 0.8px 0.2px #0000002e;
                  display: none;
                }

                // &:after {
                //   content: "";
                //   display: block;
                //   width: 10px;
                //   height: 10px;
                //   background-color: #fff;
                //   position: absolute;
                //   border-radius: 50%;
                //   top: -2px;
                //   left: -5px;
                //   opacity: 0;
                //   transform: scale(0, 0) translateY(calc(-50% + 0.1px)) translateX(0.5px);
                //   transform-origin: center center !important;
                //   transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
                //   scale: 0.735;
                //   // clip-path: polygon(14% 41%, 44% 65%, 100% 0, 100% 40%, 47% 100%, 0 61%);
                // }
              }

              &:checked+span:after {
                opacity: 1;
                transform: scale(1, 1) translateY(calc(-50% + 0.1px)) translateX(0.5px);
                transform-origin: center center !important;

              }
            }
          }


          display: flex;
          align-items: center;
          // gap: 6.5px;
          gap: 12.5px;
          padding: 5px 0;
          flex-wrap: wrap;

          >label.radio {
            border: 1px solid #eee;
            border-radius: 8px;
            display: flex !important;
            justify-content: center;
            align-items: center;
            padding: 2px;

            span img {
              width: 70px;
              height: 45px;
              border-radius: 8px;
              object-fit: contain;
            }

          }


        }

        .donate-btn {
          background-color: var(--Primary-2-color);
          color: #fff;
          font-weight: 600;
          padding: 8px;
          text-align: center;
          margin: 10px auto !important;
          margin-bottom: 0;
          border-radius: 4px;
          width: 90%;
          // display: block;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8.5px;
          flex-wrap: wrap;

          &:hover {
            scale: 0.98;
            background-color: var(--Primary-color) !important;

          }
        }



        //********
        .iti__country-list {
          width: 280px !important;
          max-width: 280px !important;
          min-width: 280px !important;
        }

        ul.iti__country-list>li {
          padding: 10.5px 10px;
        }

        .iti__divider {
          display: none;
        }
      }
    }

  }


  .iti--allow-dropdown input,
  .iti--allow-dropdown input[type=text],
  .iti--allow-dropdown input[type=tel],
  .iti--separate-dial-code input,
  .iti--separate-dial-code input[type=text],
  .iti--separate-dial-code input[type=tel] {

    padding-left: 100px;

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


@media (max-width:650px) {
  .QuickDonation {
    top: 90.5%;
  }

  .QuickDonation>.open-div>span {
    padding: 0 4.5px;
  }

  .QuickDonation>.open-div>* {
    height: 34px;
  }

  .QuickDonation>.open-div>i {
    padding: 12px 9px;
  }

  .QuickDonation .relative-div>.open-div {
    max-width: 150px;
  }
}
</style>