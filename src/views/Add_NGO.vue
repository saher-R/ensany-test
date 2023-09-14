<script setup>
import { ref, onMounted } from 'vue'
import '../../node_modules/vanillajs-datepicker/dist/js/datepicker-full.min.js'
import '../../node_modules/vanillajs-datepicker/dist/css/datepicker.min.css';
//////////////


const phone_num_NGO_data = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});

const phone_num_NGO_association_data = ref({
  number: undefined,
  intoNum: undefined,
  countryData: undefined
});


import 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js';
onMounted(() => {

  // input1 phone ***
  const input1 = document.querySelector(".Add_NGO .first-step #phone_NGO");

  const iti = window.intlTelInput(input1,
    {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => {
            callback(data.country_code);
            setTimeout(() => {
              phone_num_NGO_data.value.intoNum = data.country_calling_code;
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
    const itiItem = document.querySelector('.Add_NGO .first-step .iti')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phone_num_NGO_data.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty() {
    document.querySelectorAll('.Add_NGO .first-step .iti li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.Add_NGO .first-step .iti span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
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
    phone_num_NGO_data.value = {
      number: input1.value,
      countryData: iti.getSelectedCountryData(),
    }
  }

  input1.addEventListener('keyup', checkPhone);
  input1.addEventListener("countrychange", checkPhone);



  // input2 phone ***
  const input2 = document.querySelector(".Add_NGO .second-step #associationPhoneNumber_NGO");

  const iti_2 = window.intlTelInput(input2,
    {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch("https://ipapi.co/json")
          .then(res => res.json())
          .then(data => {
            callback(data.country_code);
            setTimeout(() => {
              phone_num_NGO_association_data.value.intoNum = data.country_calling_code;
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
    const itiItem = document.querySelector('.Add_NGO .second-step .iti')
    const spanCreated_introNum = document.createElement('span');
    spanCreated_introNum.textContent = phone_num_NGO_association_data.value.
      intoNum;
    spanCreated_introNum.className = 'intro_num_custom';
    itiItem.appendChild(spanCreated_introNum);
  }

  function onClick_li_counrty__2() {
    document.querySelectorAll('.Add_NGO .second-step .iti li.iti__country').forEach((e) => {
      e.addEventListener('click', () => {
        document.querySelector('.Add_NGO .second-step .iti span.intro_num_custom').textContent = e.querySelector('.iti__dial-code').textContent;
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
    phone_num_NGO_association_data.value = {
      number: input2.value,
      countryData: iti_2.getSelectedCountryData(),
    }
  }

  input2.addEventListener('keyup', checkPhone_2);
  input2.addEventListener("countrychange", checkPhone_2);



})


const stepActiveNumber = ref(1);

const isFirstDone = ref(true);
const isSecondDone = ref(false);
const isThirdDone = ref(false);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// for select-2
const countries = ref(["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
  "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
  "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
  "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
  "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"]);

const searchSelect_Country = ref('');

const spanCurrent_Country = ref('');

const openSelect_Country = ref(false);

///////////// 
const cities = ref(["XXX", "CCC", "VVV", "SSS"]);

const searchSelect_City = ref('');

const spanCurrent_City = ref('');

const openSelect_City = ref(false);


///////////// 
const typeOfAssociation = ref(["111", "222", "333", "UUUUU"]);

const searchSelect_typeOfAssociation = ref('');

const spanCurrent_typeOfAssociation = ref('');

const openSelect_typeOfAssociation = ref(false);


///////////// 
const typeOfSex = ref(["male", "female"]);

const searchSelect_typeOfSex = ref('');

const spanCurrent_typeOfSex = ref('');

const openSelect_typeOfSex = ref(false);


////////////
const currentImgSrc_1 = ref('');
const currentImgSrc_2 = ref('');

function catchImg_1(e) {
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    currentImgSrc_1.value = dataURL;
  }
  reader.readAsDataURL(e.target.files[0]);
}
function catchImg_2(e) {
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    currentImgSrc_2.value = dataURL;
  }
  reader.readAsDataURL(e.target.files[0]);
}


// for date select ***
onMounted(() => {

const elem = document.querySelector('.Add_NGO input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  // options here
  format: "dd/mm/yyyy",
});

})


/////////////////////////////////////////// 

</script>



<template>
  <div class="Add_NGO">

    <div class="container">


      <div class="section-titles">
        <span class="card" :class="stepActiveNumber == 1 && 'active', isFirstDone && 'done'">
          <img src="https://ensany.com/theme/img/account-icon.svg" alt="">
          <div class="text">
            <span class="title">personal information</span>
            <span class="explanation">personal information</span>
          </div>
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="card" :class="stepActiveNumber == 2 && 'active', isSecondDone && 'done'">
          <img src="https://ensany.com/theme/img/account-icon.svg" alt="">
          <div class="text">
            <span class="title">personal information</span>
            <span class="explanation">personal information</span>
          </div>
          <i class="fa-solid fa-check"></i>
        </span>
        <span class="card" :class="stepActiveNumber == 3 && 'active', isThirdDone && 'done'">
          <img src="https://ensany.com/theme/img/account-icon.svg" alt="">
          <div class="text">
            <span class="title">personal information</span>
            <span class="explanation">personal information</span>
          </div>
          <i class="fa-solid fa-check"></i>
        </span>
        <!-- <span class="card">

        </span>
        <span class="card">

        </span> -->
      </div>

      <div class="content">
        <div class="top">
          <span>
            <h1>Create your site</h1>
            <p>Create a website for your association and help spread goodness globally</p>
          </span>
          <a href="#">ECD NGO's</a>
        </div>

        <div class="inputs-steps---">


          <form v-show="stepActiveNumber == 1" @submit.prevent action="#" class="first-step">

            <div class="input-div">
              <label for="first_name_NGO">first name</label>
              <input type="text" id="first_name_NGO" placeholder="First Name" required>
            </div>
            <div class="input-div">
              <label for="family_name_NGO">family name</label>
              <input type="text" id="family_name_NGO" placeholder="Family Name" required>
            </div>
            <div class="input-div">
              <label for="email_NGO">email</label>
              <input type="text" id="email_NGO" placeholder="Email" required>
            </div>

            <div class="input-div">
              <label for="phone_NGO">Phone Number</label>
              <input v-model="phone_num_NGO_data.number" type="text" id="phone_NGO" placeholder="First Name" required>
            </div>

            <div class="input-div">
              <label for="searchCountry" @click="openSelect_Country = !openSelect_Country">
                Select A Country
              </label>
              <div :class="`wrapper ${openSelect_Country && 'active'}`">
                <div class="select-btn" @click="openSelect_Country = !openSelect_Country">
                  <span>{{ spanCurrent_Country == '' ? 'Select a country' : spanCurrent_Country }}</span>
                  <i class="fa-solid fa-angle-up"></i>
                </div>
                <div class="content">
                  <div class="search">
                    <i class="uil uil-search"></i>
                    <input spellcheck="false" type="text" placeholder="Search" v-model="searchSelect_Country"
                      id="searchCountry">
                  </div>
                  <ul class="options">
                    <li v-for="item in countries"
                      :class="`${item.toLowerCase() == spanCurrent_Country.toLowerCase() && 'selected'}`" @click="() => {
                        selectCountry = item;
                        spanCurrent_Country = item
                        openSelect_Country = false
                      }" v-show="item?.trim().toLowerCase().includes(searchSelect_Country.trim().toLowerCase())">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="input-div">
              <label for="searchCity" @click="openSelect_City = !openSelect_City">
                Select A City
              </label>
              <div :class="`wrapper ${openSelect_City && 'active'}`">
                <div class="select-btn" @click="openSelect_City = !openSelect_City">
                  <span>{{ spanCurrent_City == '' ? 'Select a city' : spanCurrent_City }}</span>
                  <i class="fa-solid fa-angle-up"></i>
                </div>
                <div class="content">
                  <div class="search">
                    <i class="uil uil-search"></i>
                    <input spellcheck="false" type="text" placeholder="Search" v-model="searchSelect_City"
                      id="searchCity">
                  </div>
                  <ul class="options">
                    <li v-for="item in cities"
                      :class="`${item.toLowerCase() == spanCurrent_City.toLowerCase() && 'selected'}`" @click="() => {
                        selectCountry = item;
                        spanCurrent_City = item
                        openSelect_City = false
                      }" v-show="item?.trim().toLowerCase().includes(searchSelect_City.trim().toLowerCase())">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="input-div">
              <label for="Sex_NGO" @click="openSelect_typeOfSex = !openSelect_typeOfSex">
                Select A Sex
              </label>
              <div :class="`wrapper ${openSelect_typeOfSex && 'active'}`">
                <div class="select-btn" @click="openSelect_typeOfSex = !openSelect_typeOfSex">
                  <span>{{ spanCurrent_typeOfSex == '' ? 'Select a city' : spanCurrent_typeOfSex }}</span>
                  <i class="fa-solid fa-angle-up"></i>
                </div>
                <div class="content">
                  <div class="search">
                    <i class="uil uil-search"></i>
                    <input spellcheck="false" type="text" placeholder="Search" v-model="searchSelect_typeOfSex"
                      id="Sex_NGO">
                  </div>
                  <ul class="options">
                    <li v-for="item in typeOfSex"
                      :class="`${item.toLowerCase() == spanCurrent_typeOfSex.toLowerCase() && 'selected'}`" @click="() => {
                        selectCountry = item;
                        spanCurrent_typeOfSex = item
                        openSelect_typeOfSex = false
                      }" v-show="item?.trim().toLowerCase().includes(searchSelect_typeOfSex.trim().toLowerCase())">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>




            <div class="input-div">
              <label for="birthday">Birthday:</label>
              <!-- <input type="date" id="birthday" name="birthday" required> -->
              <input type="text" name="datepicker" :data-date="'18/6/2020'" />
            </div>


            <div class="input-div">
              <label for="password_NGO">password</label>
              <input type="text" id="password_NGO" placeholder="Password" required>
            </div>

            <div class="input-div">
              <label for="confirm_password_NGO">Confirm password</label>
              <input type="text" id="confirm_password_NGO" placeholder="Confirm Password" required>
            </div>

            <div class="conditions">
              <label class="label-condition" for="label-condition">
                <span>
                  <input type="checkbox" id="label-condition" required />
                </span>
                <span>
                  I accept the <a href="#">Terms</a> of Use and confirm that I have read <a href="#">the Privacy
                    Policy</a>.
                </span>
              </label>
            </div>


            <button type="submit">Next</button>

          </form>

          <form v-show="stepActiveNumber == 2" @submit.prevent action="#" class="second-step">

            <div class="imgs">
              <div class="background">
                <img :src="currentImgSrc_1 != '' ? currentImgSrc_1 : 'https://ensany.com/theme/img/placeholder-image.png'"
                  alt="" class="current-img">
                <label for="step_2_img1_NGO" class="img-put">
                  <img src="https://ensany.com/theme/img/FontAwsome(camera)-black.svg" alt="">
                  <input type="file" id="step_2_img1_NGO" @change="catchImg_1" required>
                </label>
              </div>
              <div class="main-img">
                <img :src="currentImgSrc_2 != '' ? currentImgSrc_2 : 'https://ensany.com/theme/img/placeholder-image.png'"
                  alt="" class="current-img">
                <label for='step_2_img2_NGO' class="img-put">
                  <img src="https://ensany.com/theme/img/FontAwsome(camera)-black.svg" alt="">
                  <input type="file" id="step_2_img2_NGO" @change="catchImg_2" required>
                </label>
              </div>





            </div>


            <div class="inputs">

              <div class="input-div">
                <label for="your_association_name_NGO">Your Association Name</label>
                <input type="text" id="your_association_name_NGO" placeholder="Your Association Name" required>
              </div>

              <div class="input-div">
                <label for="introducing_the_association_NGO">Introducing The Association</label>
                <textarea id="introducing_the_association_NGO" placeholder="Introducing The Association"></textarea>
              </div>

              <div class="input-div">
                <label for="associationPhoneNumber_NGO">Association Phone Number</label>
                <input v-model="phone_num_NGO_association_data.number" type="text" id="associationPhoneNumber_NGO"
                  placeholder="Association Phone Number" required>
              </div>

              <div class="input-div">
                <label for="email_2_NGO">Association Email</label>
                <input type="text" id="email_2_NGO" placeholder="Association Email" required>
              </div>

              <div class="link-association">
                <p>(This will be the link customers can access to donate. English letters and numbers must be used.)</p>
                <div class="input-div">
                  <!-- <label for="email_2_NGO">Association Email</label> -->
                  <span>https://</span>
                  <input type="text" placeholder="Write the name of your store in English" required>
                  <span>.ensany.com</span>
                </div>
              </div>


              <div class="input-div">
                <label for="search_typeOfAssociation"
                  @click="openSelect_typeOfAssociation = !openSelect_typeOfAssociation">
                  Select type of association
                </label>
                <div :class="`wrapper ${openSelect_typeOfAssociation && 'active'}`">
                  <div class="select-btn" @click="openSelect_typeOfAssociation = !openSelect_typeOfAssociation">
                    <span>{{ spanCurrent_typeOfAssociation == '' ? 'Select type of association' :
                      spanCurrent_typeOfAssociation
                    }}</span>
                    <i class="fa-solid fa-angle-up"></i>
                  </div>
                  <div class="content">
                    <div class="search">
                      <i class="uil uil-search"></i>
                      <input spellcheck="false" type="text" placeholder="Search" v-model="searchSelect_typeOfAssociation"
                        id="search_typeOfAssociation">
                    </div>
                    <ul class="options">
                      <li v-for="item in typeOfAssociation"
                        :class="`${item.toLowerCase() == spanCurrent_typeOfAssociation.toLowerCase() && 'selected'}`"
                        @click="() => {
                          selectCountry = item;
                          spanCurrent_typeOfAssociation = item
                          openSelect_typeOfAssociation = false
                        }"
                        v-show="item?.trim().toLowerCase().includes(searchSelect_typeOfAssociation.trim().toLowerCase())">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>




              <div class="input-div">
                <label for="email_file_license_NGO">The association's license file</label>
                <input type="file" id="email_file_license_NGO" required>
              </div>


              <!--++++++++++++++++++++++++++-->
              <!--++++++++++++++++++++++++++-->

              <div class="input-div">
                <label>Name Of Bank</label>
                <input type="text" placeholder="Name Of Bank" required>
              </div>

              <div class="input-div">
                <label>Bank branch name</label>
                <input type="text" placeholder="Bank branch name" required>
              </div>

              <div class="input-div">
                <label>swift code</label>
                <input type="text" placeholder="swift code" required>
              </div>

              <div class="input-div">
                <label>The IBAN number</label>
                <input type="text" placeholder="The IBAN number" required>
              </div>

              <div class="input-div">
                <label>account number</label>
                <input type="text" placeholder="account number" required>
              </div>

              <div class="input-div">
                <label>Account Holder's Name</label>
                <input type="text" placeholder="Account Holder's Name" required>
              </div>

              <div class="input-div">
                <label>Facebook</label>
                <input type="text" placeholder="Facebook" required>
              </div>

              <div class="input-div">
                <label>Instagram</label>
                <input type="text" placeholder="Instagram" required>
              </div>

              <div class="input-div">
                <label>YouTube</label>
                <input type="text" placeholder="YouTube" required>
              </div>

              <div class="input-div">
                <label>Tiktok</label>
                <input type="text" placeholder="Tiktok" required>
              </div>

              <div class="input-div">
                <label>WhatsApp</label>
                <input type="text" placeholder="WhatsApp" required>
              </div>

              <div class="input-div">
                <label>Telegram</label>
                <input type="text" placeholder="Telegram" required>
              </div>

              <div class="input-div">
                <label>Snapchat</label>
                <input type="text" placeholder="Snapchat" required>
              </div>

              <div class="input-div">
                <label>Twitter</label>
                <input type="text" placeholder="Twitter" required>
              </div>




              <button type="submit">Next</button>





            </div>






          </form>


          <div v-show="stepActiveNumber == 3" @submit.prevent action="#" class="third-step">

            <div class="success-message">
              Congratulations, your association has been added successfully.
            </div>

            <div class="info">
              <div class="second-mess">
                Created successfully, wait for our communication to activate the association.
              </div>

              <div class="copy-link">
                <i class="fa-solid fa-copy"></i> Copy your association link
              </div>

              <div class="input-readonly">
                <input type="text" value="Https:d4d4d4d4d4d4/dds" readonly>
              </div>


              <a href="#" class="add_campaigns">
                <i class="fa-solid fa-folder-plus"></i> Add campaigns to your association
              </a>

            </div>




          </div>

        </div>


      </div>


    </div>

  </div>
</template>


<style lang="scss">
.Add_NGO {
  // background-color: red;
  background-color: #f6f8fb;
  box-shadow: 0 0 50px 20px #f6f8fb;

  >.container {

    display: flex;
    gap: 42px;
    padding-top: 3.5%;
    padding-bottom: 3.5%;

    >.section-titles {
      width: 350px;
      min-width: 350px;
      display: flex;
      flex-direction: column;
      gap: 18px;

      >span.card {
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 20px 22px;
        gap: 18px;
        border-right: 3px solid transparent;


        &.active {
          border-right: 3px solid var(--Primary-color);

          .text .title {
            color: var(--Primary-color);
          }
        }

        &.done {
          >i {
            opacity: 1;
          }
        }


        >img {
          object-fit: cover;
          width: 50px;
          height: 50px;
        }

        >.text {
          display: flex;
          flex-direction: column;
          gap: 3px;

          .title {
            font-weight: 600;
            color: #000;
          }

          .explanation {
            color: #999;

          }
        }

        position: relative;

        >i {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          scale: 1.35;
          color: var(--Primary-color);
          opacity: 0;
        }

      }

    }

    .content {
      flex: auto;

      >.top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding-bottom: 1.7rem;
        gap: 16px;

        h1 {
          color: #2d3954;
        }

        p {
          color: #72809d;
        }

        >a {
          padding: 15px 25px !important;
          background-color: #333c56 !important;
          border-radius: 50px !important;
          height: fit-content;
          color: #Fff;
          font-size: 1.085rem;
          margin-top: 1.5px;
        }
      }

      >.inputs-steps--- {

        .first-step {
          padding: 18px 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          .input-div {
            // flex-direction: column;
            // gap: 2px;
            width: 48%;
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;


            label {
              font-size: 1.15rem;
              color: #607195;
              width: fit-content;
            }

            input {
              padding: 12px 12px;
              border: 2px solid transparent !important;
              border-radius: 2.5px !important;
              width: 100%;

              &#phone_NGO {
                padding-left: 50px;
              }

              &::placeholder {
                color: #ccc;
                font-size: 0.955rem;
              }

              &:focus {
                border: 2px solid #707e9c !important;
              }

              &#searchCountry,
              &#searchCity,
              &#Sex_NGO {
                border-color: #ddd !important;

                &:focus {
                  border: 2px solid #707e9c !important;
                }
              }

            }


            &:has(input#Sex_NGO) {
              input#Sex_NGO {
                display: none;
              }
            }


            ////////////////////
            /// for select-2 
            .wrapper {
              // width: 370px;
              // margin: 85px auto 0;
            }

            .select-btn,
            li {
              display: flex;
              align-items: center;
              cursor: pointer;
            }

            .select-btn {
              padding: 12px 15px;
              font-size: 1rem;
              color: #999;
              background: #fff;
              border-radius: 7px;
              justify-content: space-between;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

              span {
                // background-color: red;
                color: #2d3954;
                // font-weight: 600;
                font-size: 0.955rem;
              }
            }

            .select-btn i {
              font-size: 25px;
              color: #666;
              transition: transform 0.3s linear;
              filter: drop-shadow(0 -7.5px 0 #ddd);
            }

            .wrapper.active .select-btn i {
              transform: rotate(-180deg);
            }

            .content {
              visibility: hidden;
              opacity: 0;
              pointer-events: none;
              padding: 20px;
              padding-top: 13px;
              position: absolute;
              top: 107%;
              width: 100%;
              z-index: 1000;
              background: #fff;
              border-radius: 7px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }

            .wrapper.active .content {
              visibility: visible;
              opacity: 1;
              pointer-events: auto;
            }

            .content .search {
              position: relative;
            }

            .search i {
              top: 50%;
              left: 15px;
              color: #999;
              font-size: 20px;
              pointer-events: none;
              transform: translateY(-50%);
              position: absolute;
            }

            .search input {
              height: 50px;
              width: 100%;
              outline: none;
              font-size: 17px;
              border-radius: 5px;
              padding: 0 20px 0 43px;
              border: 1px solid #B3B3B3;
            }

            .search input:focus {
              padding-left: 42px;
              border: 2px solid #4285f4;
            }

            .search input::placeholder {
              color: #bfbfbf;
            }

            .content .options {
              margin-top: 10px;
              max-height: 250px;
              overflow-y: auto;
              padding-right: 7px;
            }

            .options::-webkit-scrollbar {
              width: 7px;
            }

            .options::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 25px;
            }

            .options::-webkit-scrollbar-thumb {
              background: #ccc;
              border-radius: 25px;
            }

            .options::-webkit-scrollbar-thumb:hover {
              background: #b3b3b3;
            }

            .options li {
              font-size: 1.12rem;
              padding: 8px;
            }

            .options li:hover,
            li.selected {
              border-radius: 5px;
              background: #f2f2f2;
            }


          }

          >.conditions {
            .label-condition {
              display: flex;
              gap: 6px;
              padding: 13px 10px;
              margin: 8px 6px;
              color: #333;
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
                  color: #607195;
                  font-weight: 600;
                  font-size: 0.85rem;
                }
              }
            }
          }

        }


        .second-step {


          >.imgs {
            padding-bottom: 24px;

            .background {
              position: relative;

              img.current-img {
                width: 98%;
                max-height: 18.5rem;
                object-fit: contain;
                background-color: #ddd;
                margin: 16px auto;
                display: block;
                border-radius: 8px;
              }

              label.img-put {
                position: absolute;
                bottom: 25px;
                right: 4%;
                border: 1px solid #ccc;
                width: 65px;
                height: 65px;
                padding: 16px;
                border-radius: 50%;
                background-color: #eee;
                cursor: pointer;
                z-index: 1;

                >img {
                  width: 100%;
                }

                >input {
                  width: 20px;
                  height: 20px;
                  margin-top: -10px;
                  margin-left: -15px;
                  opacity: 0;
                  pointer-events: none;
                }
              }
            }

            .main-img {
              position: relative;
              width: fit-content;

              img.current-img {
                background-color: #ddd;
                border: 1px solid #bbb;
                width: 148px;
                height: 148px;
                border-radius: 50%;
                margin-top: -105px;
                margin-left: 25%;
                object-fit: contain;
              }

              label.img-put {
                position: absolute;
                bottom: -25px;
                right: -18%;
                border: 1px solid #ccc;
                width: 65px;
                height: 65px;
                padding: 16px;
                border-radius: 50%;
                background-color: #eee;
                cursor: pointer;
                z-index: 1;
                // background-color: red;


                >img {
                  width: 100%;
                }

                >input {
                  width: 20px;
                  height: 20px;
                  margin-top: -10px;
                  margin-left: -15px;
                  opacity: 0;
                  pointer-events: none;
                }
              }
            }
          }


          .inputs {

            padding: 18px 4px;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;


            >.input-div {
              // flex-direction: column;
              // gap: 2px;
              width: 48%;
              display: flex;
              flex-direction: column;
              gap: 8px;
              position: relative;

              &:has(#your_association_name_NGO),
              &:has(#introducing_the_association_NGO) {
                width: 100%;
              }


              label {
                font-size: 1.15rem;
                color: #607195;
                width: fit-content;
              }

              input,
              textarea {
                padding: 12px 12px;
                border: 2px solid transparent !important;
                border-radius: 2.5px !important;
                width: 100%;

                &#phone_NGO {
                  padding-left: 50px;
                }

                &::placeholder {
                  color: #ccc;
                  font-size: 0.955rem;
                }

                &:focus {
                  border: 2px solid #707e9c !important;
                }

                &#searchCountry,
                &#searchCity {
                  border-color: #ddd !important;

                  &:focus {
                    border: 2px solid #707e9c !important;
                  }
                }

              }

              textarea {
                outline: none;
                height: 85px;
                resize: vertical;
                max-height: 120px;

                &:focus {
                  border: 2px solid #707e9c !important;
                  resize: vertical;
                  max-height: 100px;
                }
              }


              ////////////////////
              /// for select-2 
              .wrapper {
                // width: 370px;
                // margin: 85px auto 0;
              }

              .select-btn,
              li {
                display: flex;
                align-items: center;
                cursor: pointer;
              }

              .select-btn {
                padding: 12px 15px;
                font-size: 1rem;
                color: #999;
                background: #fff;
                border-radius: 7px;
                justify-content: space-between;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

                span {
                  // background-color: red;
                  color: #2d3954;
                  // font-weight: 600;
                  font-size: 0.955rem;
                }
              }

              .select-btn i {
                font-size: 25px;
                color: #666;
                transition: transform 0.3s linear;
                filter: drop-shadow(0 -7.5px 0 #ddd);
              }

              .wrapper.active .select-btn i {
                transform: rotate(-180deg);
              }

              .content {
                visibility: hidden;
                opacity: 0;
                pointer-events: none;
                padding: 20px;
                padding-top: 13px;
                position: absolute;
                top: 107%;
                width: 100%;
                z-index: 1000;
                background: #fff;
                border-radius: 7px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              }

              .wrapper.active .content {
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
              }

              .content .search {
                position: relative;
              }

              .search i {
                top: 50%;
                left: 15px;
                color: #999;
                font-size: 20px;
                pointer-events: none;
                transform: translateY(-50%);
                position: absolute;
              }

              .search input {
                height: 50px;
                width: 100%;
                outline: none;
                font-size: 17px;
                border-radius: 5px;
                padding: 0 20px 0 43px;
                border: 1px solid #B3B3B3;
              }

              .search input:focus {
                padding-left: 42px;
                border: 2px solid #4285f4;
              }

              .search input::placeholder {
                color: #bfbfbf;
              }

              .content .options {
                margin-top: 10px;
                max-height: 250px;
                overflow-y: auto;
                padding-right: 7px;
              }

              .options::-webkit-scrollbar {
                width: 7px;
              }

              .options::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 25px;
              }

              .options::-webkit-scrollbar-thumb {
                background: #ccc;
                border-radius: 25px;
              }

              .options::-webkit-scrollbar-thumb:hover {
                background: #b3b3b3;
              }

              .options li {
                font-size: 1.12rem;
                padding: 8px;
              }

              .options li:hover,
              li.selected {
                border-radius: 5px;
                background: #f2f2f2;
              }


            }
          }

          .link-association {
            width: 100%;
            padding-left: 14px;
            padding-right: 14px;

            >p {
              color: #607195;
              padding: 8px 0;
            }

            .input-div {
              // display: flex;
              flex-direction: row;
              width: 100%;
              gap: 0;

              span {
                width: fit-content;
                min-width: fit-content;
                background-color: #e9ecef;
                border: 1px solid #ccc;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px;
                color: #495057;
                border-radius: 4.5px;
              }

              input {
                padding-left: 20px;
                padding-right: 20px;
              }
            }

          }


        }

        .third-step {

          .success-message {
            margin: 14px;
            background-color: rgba(86, 191, 86, 0.153);
            color: rgb(0, 139, 0);
            font-size: 1.0725rem;
            padding: 3.5% 4.5%;
            border-radius: 4px;
          }

          .second-mess {
            margin: 5px 18px 0;
            padding: 18px 10px;
            font-size: 1.1rem;
            color: #2d3954;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            font-weight: 600;
          }

          .info {
            margin: 0px 18px;
            padding: 3px;
            padding-bottom: 35px;
            border-radius: 3px;
            font-size: 1.1rem;
            color: #2d3954;
            background-color: #fff;
            box-shadow: 1px 4px 17px #00000023;

            .copy-link {
              margin: 0px 18px;
              padding: 22px 10px 18px;
              font-size: 1.1rem;
              color: #2d3954;
              background-color: #fff;
              font-weight: 600;

              i {
                padding: 0 3px;
              }

            }

            .input-readonly {
              width: 96.5%;
              display: block;
              padding: 15px 18px;
              margin: auto;

              input {
                // width: calc(100% - (28px * 2));
                // margin: 0 18px;
                border: 1px solid #ccc;
                width: 100%;
                color: #666;
              }
            }

            >a.add_campaigns {
              background-color: var(--Primary-color);
              margin: 10px 28px;
              padding: 10px 30px;
              border-radius: 40px;
              color: #fff;
              text-shadow: 0 0 1.26px #000, 0 0 10px #00000056;
              text-align: center;


              i {
                padding: 0 3px;

              }
            }
          }



        }



        //////
        .input-div {
          // flex-direction: column;
          // gap: 2px;
          width: 48%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;


          label {
            font-size: 1.15rem;
            color: #607195;
            width: fit-content;
          }

          input {
            padding: 12px 12px;
            border: 2px solid transparent !important;
            border-radius: 2.5px !important;
            width: 100%;

            &#phone_NGO {
              padding-left: 50px;
            }

            &::placeholder {
              color: #ccc;
              font-size: 0.955rem;
            }

            &:focus {
              border: 2px solid #707e9c !important;
            }

            &#searchCountry,
            &#searchCity,
            &#search_typeOfAssociation {
              border-color: #ddd !important;

              &:focus {
                border: 2px solid #707e9c !important;
              }
            }

          }


          ////////////////////
          /// for select-2 
          .wrapper {
            // width: 370px;
            // margin: 85px auto 0;
          }

          .select-btn,
          li {
            display: flex;
            align-items: center;
            cursor: pointer;
          }

          .select-btn {
            padding: 12px 15px;
            font-size: 1rem;
            color: #999;
            background: #fff;
            border-radius: 7px;
            justify-content: space-between;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

            span {
              // background-color: red;
              color: #2d3954;
              // font-weight: 600;
              font-size: 0.955rem;
            }
          }

          .select-btn i {
            font-size: 25px;
            color: #666;
            transition: transform 0.3s linear;
            filter: drop-shadow(0 -7.5px 0 #ddd);
          }

          .wrapper.active .select-btn i {
            transform: rotate(-180deg);
          }

          .content {
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            padding: 20px;
            padding-top: 13px;
            position: absolute;
            top: 107%;
            width: 100%;
            z-index: 1000;
            background: #fff;
            border-radius: 7px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }

          .wrapper.active .content {
            visibility: visible;
            opacity: 1;
            pointer-events: auto;
          }

          .content .search {
            position: relative;
          }

          .search i {
            top: 50%;
            left: 15px;
            color: #999;
            font-size: 20px;
            pointer-events: none;
            transform: translateY(-50%);
            position: absolute;
          }

          .search input {
            height: 50px;
            width: 100%;
            outline: none;
            font-size: 17px;
            border-radius: 5px;
            padding: 0 20px 0 43px;
            border: 1px solid #B3B3B3;
          }

          .search input:focus {
            padding-left: 42px;
            border: 2px solid #4285f4;
          }

          .search input::placeholder {
            color: #bfbfbf;
          }

          .content .options {
            margin-top: 10px;
            max-height: 250px;
            overflow-y: auto;
            padding-right: 7px;
          }

          .options::-webkit-scrollbar {
            width: 7px;
          }

          .options::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 25px;
          }

          .options::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 25px;
          }

          .options::-webkit-scrollbar-thumb:hover {
            background: #b3b3b3;
          }

          .options li {
            font-size: 1.12rem;
            padding: 8px;
          }

          .options li:hover,
          li.selected {
            border-radius: 5px;
            background: #f2f2f2;
          }


        }

        input {
          &#associationPhoneNumber_NGO {
            padding-left: 48px;
          }
        }

        ////// 
        button[type=submit] {
          background-color: var(--Primary-color);
          font-weight: 600;
          padding: 8px;
          width: 60%;
          margin: auto;

          &:hover {
            background-color: var(--Primary-dark-color);
            scale: 0.975;
          }
        }

      }



    }


  }

  .iti__country-list {
    z-index: 1000;
  }

  .iti__country {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .iti__country-list {
    max-width: 350px;
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



  /////////////
  ///////////////////// 
  ::-webkit-scrollbar {
    height: 7px;
  }


}

@media (min-width: 1400px) {
  .Add_NGO {
    .container {
      max-width: 1140px;
    }
  }
}


@media (max-width:1000px) {
  .Add_NGO>.container .content>.inputs-steps--- .input-div {
    width: 100% !important;
  }

  .Add_NGO .container {
    max-width: 95%;
  }

  .Add_NGO>.container>.section-titles {
    width: 300px;
    min-width: 300px;
  }

  .Add_NGO>.container .content>.top h1 {
    font-size: 1.65rem;
  }
}

@media (max-width:700px) {

  .Add_NGO .container {
    flex-direction: column-reverse;
  }

  .Add_NGO>.container .content>.inputs-steps--- .second-step>.imgs .main-img img.current-img {
    margin-left: 12%;
    width: 128px;
    height: 128px;
  }


}

@media (max-width:550px) {
  .iti__country-list {
    width: 300px;
  }
}
</style>