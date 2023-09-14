<script setup>
import { ref, onMounted } from 'vue'

//////////////


</script>

<template>
  <div class="NewDetails">

    <div class="container">

      <section class="details-content">
        <h1>"Ramadan in Jerusalem" as part of the Loyalty to Jerusalem campaign</h1>

        <img src="https://ensany.com/platform_images/1590941607.jpg" alt="">

        <p v-for="_ in 4">
          Thank you for those who made donations. Your donations are much appreciated and May Allah grant you Jannatul
          Firdaus.
        </p>

      </section>
      <section class="more-news">
        <div class="search">
          <b>Search</b>
          <form action="#">
            <input type="text" placeholder="Search..." required>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div class="news">
          <b>atest articles</b>
          <div class="items">
            <span v-for="_ in 9" class="item">
              <div>
                <a href="#">
                  How Ensany work to help people in need
                </a>
                <br />
                <span>July 15, 2020</span>
              </div>
              <img src="https://ensany.com/platform_images/articles_1680558034_1781.jpg" alt="">
            </span>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>


<style lang="scss">
.NewDetails {
  // background-color: red;


  .container {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding-top: 30px;
    padding-bottom: 30px;

    >section {
      height: fit-content;

      &.details-content {
        width: 60%;
        background-color: #fff;
        padding: 20px;
        padding-bottom: 30px;
        border-radius: 4px;
        border: 1px solid #e5e8f3;


        h1 {
          color: #2d3954;
        }

        >img {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 16px;
        }

        p {
          margin: 25px 0;
          line-height: 28px;
          font-size: 1.05rem;
        }

      }

      &.more-news {
        // flex: auto;
        width: 35%;
        min-width: 300px;
        // 
        display: flex;
        flex-direction: column;
        gap: 25px;

        >div {
          background-color: #fff;
          padding: 20px;
          border-radius: 4px;
          border: 1px solid #e5e8f3;

          &.search {
            >b {
              color: #2d3954;
            }

            >form {
              position: relative;
              padding: 10px 0;
              // padding-bottom: 25px;
              height: 55px;
              margin-bottom: 10px;

              input {
                width: 100%;
                background-color: #eee;
                border: 1px solid #ebedf5;
                background-color: #f0f2f6;
                padding: 14px 10px;
                padding-right: 3.5rem;
                height: 100%;
                position: absolute;


                &::placeholder {
                  font-size: 0.9rem;
                }
              }

              button {
                position: absolute;
                right: 0;
                padding: 0;
                width: 3rem !important;
                height: 100% !important;
                background-color: var(--Primary-2-color);
              }

            }
          }

          &.news {
            >b {
              font-size: 1.12rem;
            }

            // 
            div.items {
              padding-top: 10px;
              display: flex;
              flex-direction: column;
              gap: 10px;

              .item {

                display: flex;
                justify-content: space-between;
                gap: 12px;

                >* {
                  height: fit-content;
                }

                >div {

                  // padding-bottom: 140.5px;
                  padding-bottom: 14.5px;

                  >a {
                    color: #30384e;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: 0s;

                    &:hover {
                      color: var(--Primary-2-color);
                    }
                  }

                  >span {
                    color: #144273;
                    font-size: 0.95rem;
                    display: inline-block;
                    padding-top: 3px;
                  }
                }

                >img {
                  // width: ;
                  border-radius: 4px;
                }



              }
            }
          }
        }

      }



    }




  }



}


@media (max-width:770px) {
  .NewDetails .container {
    flex-direction: column;

    >* {
      width: 100% !important;
    }
  }
}
</style>