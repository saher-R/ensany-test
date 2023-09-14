<script setup>
import { ref, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
//////////////

///////////// 
const cities = ref(["sads", "ssss", "aaa", "fffff", 'goalll', 'goalll', 'goalll', 'goalll']);

const searchSelect_City = ref('');

const spanCurrent_City = ref('');

const openSelect_City = ref(false);

////////////////
const currentImgSrc = ref('https://ensany.com/front/assets/img/nophoto.png');

function putImage(e) {
  let reader = new FileReader();
  reader.onload = function () {
    let dataURL = reader.result;
    currentImgSrc.value = dataURL;
  }
  reader.readAsDataURL(e.target.files[0]);
}

function getTextEditorElements() {
  const elements = document.querySelector('.Customer_CampaignCreate .ql-editor').innerHTML;
  /////
  console.log(elements);
}


////////////////


</script>

<template>
  <div class="Customer_CampaignCreate">
    <form action="#" class="container">
      <div class="img-div">
        <span>Image</span>
        <label for="customer_imgCompaign" class="img">
          <img :src="currentImgSrc" alt="">
          <input type="file" id="customer_imgCompaign" @change="putImage" required>
        </label>
      </div>
      <div class="content">
        <div class="inputs">
          <div class="input-div">
            <label for="customer_nameOfCompaign">Name Of Compaign</label>
            <input type="text" id="customer_nameOfCompaign" placeholder="Name Of Compaign" required>
          </div>
          <div class="input-div">
            <label for="customer_targetOfCompaign">target Of Compaign</label>
            <input type="text" id="customer_targetOfCompaign" placeholder="target Of Compaign" required>
          </div>
          <div class="input-div">
            <label for="customer_daysOfCompaign">days count Of Compaign</label>
            <input type="text" id="customer_daysOfCompaign" placeholder="days count Of Compaign" required>
          </div>


          <!---------------------------------->
          <span class="description">description</span>
          <div class="container-editor">
            <QuillEditor theme="snow" toolbar="full" />
          </div>
          <!---------------------------------->

          <div class="input-div">
            <label for="customer_videoLink">video link</label>
            <input type="text" id="customer_videoLink" placeholder="Add video link (YouTube only)" required>
          </div>

          <div class="input-div">
            <label for="customer_typeOfCompaign" @click="openSelect_City = !openSelect_City">
              Choose the category related to the campaign
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
                    id="customer_typeOfCompaign" required>
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


          <button type="submit" @click="getTextEditorElements">
            save
          </button>





        </div>
      </div>
    </form>
  </div>
</template>


<style lang="scss">
.Customer_CampaignCreate {
  // background-color: red;

  background-color: #f7f9fc;
  box-shadow: 0 0 20px 10px #f7f9fc;

  >.container {
    display: flex;
    gap: 35px;
    padding-top: 30px;
    padding-bottom: 30px;

    >.img-div {
      background-color: #fff;
      width: 370px;
      min-width: 370px;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
      padding: 22px;

      display: flex;
      flex-direction: column;
      gap: 18px;

      >span {
        color: #2d3954;
        font-size: 1.212rem;
      }

      >label {
        position: relative;
        // background-color: blue;
        width: 100%;
        height: 180px;
        border: 5px solid #2d395427;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        input {
          background-color: red;
          width: 30px;
          position: absolute;
          top: 50%;
          left: 50%;
          opacity: 0;
          pointer-events: none;
        }

      }



    }

    >.content {
      flex: auto;
      box-shadow: 0 0 18px #ebebeb;
      height: fit-content;
      background-color: #fff;
      padding: 18px;
      padding-bottom: 60px;

      >.inputs {

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 18px;

        //////
        .input-div {
          // flex-direction: column;
          // gap: 2px;
          width: 48%;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;

          &:has(input#customer_nameOfCompaign, input#customer_videoLink, input#customer_typeOfCompaign) {
            width: 100%;
          }

          label {
            font-size: 1.15rem;
            color: #607195;
            width: fit-content;
          }

          input {
            padding: 12px 12px;
            border: 2px solid #e2e2e2 !important;
            border-radius: 2.5px !important;
            width: 100%;

            &#phone_NGO {
              padding-left: 50px;
            }

            &::placeholder {
              color: #a1a1a1;
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

          //////////////
          /// 
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

        span.description {
          font-size: 1.15rem;
          color: #607195;
          width: fit-content;
          margin-bottom: -10px;
          margin-top: 10px;
        }

        .container-editor {
          display: flex;
          flex-direction: column;
          width: 100%;
          border: 1px solid #aaa;
          border-radius: 4px;
          overflow: hidden;
          margin: 7px 0;

          .ql-editor {
            min-height: 140px;
          }

          .ql-formats {
            padding: 6px 0;

            &:has(.ql-video) {
              display: none;
            }
          }
        }



        button[type=submit] {
          background-color: var(--Primary-dark-color);
          text-shadow: 0 0 35px #eee, 0 0 45px #eee;
          margin: 8px 10px;
          min-width: 150px;
        }
      }


    }

  }



  /////// 
  ::-webkit-scrollbar {
    height: 8px;
  }


}


@media (min-width:1400px) {

  .Customer_CampaignCreate .container {
    max-width: 1140px;
  }

}

@media (max-width:1000px) {
  .Customer_CampaignCreate>.container {
    // flex-wrap: wrap!important;
    flex-direction: column;

    >* {
      width: 100%;
    }
  }
}

@media (max-width:550px) {

  .Customer_CampaignCreate>.container {
    gap: 15px;
  }

  .Customer_CampaignCreate .input-div {
    width: 100% !important;
  }

  .Customer_CampaignCreate>.container>.img-div {
    min-width: 100%;
    width: 100%;
  }
}
</style>