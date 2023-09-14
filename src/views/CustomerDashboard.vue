<script setup>
import { ref, onMounted } from 'vue'

//////////////

const activeNow = ref(1);

</script>

<template>
  <div class="CustomerDashboard">
    <div class="container">
      <ul class="menu">
        <img src="https://ensany.com/images/default_avatar.png" alt="">
        <b>Saher Saher</b>
        <span>Palestine - Gaza</span>
        <div class="ul">
          <a href="#" class="active">
            <i class="fa-solid fa-house"></i> control Board
          </a>
          <a href="#">
            <i class="fa-solid fa-dollar-sign"></i> campaigns
          </a>
          <a href="#">
            <i class="fa-solid fa-dollar-sign"></i> donations
          </a>
          <a href="#">
            <i class="fa-solid fa-dollar-sign"></i> activities
          </a>
          <a href="#">
            <i class="fa-solid fa-user"></i> profile
          </a>
          <a href="#">
            <i class="fa-solid fa-sign-out"></i> Signout
          </a>
        </div>
      </ul>
      <div class="content">

        <div class="controlBoard container-content" v-show="activeNow == 1">
          <div class="title-content">
            control Board
          </div>
          <div class="cards">
            <span class="card">
              <div class="title">Header</div>
              <div class="color">Primary Card Title</div>
            </span>
            <span class="card">
              <div class="title">Header</div>
              <div class="color">Primary Title</div>
            </span>
            <span class="card">
              <div class="title">Header</div>
              <div class="color">Primary var Title</div>
            </span>
          </div>
        </div>

        <div class="campaigns container-content" v-show="activeNow == 2">
          <div class="title-content">
            control Board
          </div>
          <a href="#">add new campaign</a>

          <div class="table-container">
            <table class="table-info">
              <tr>
                <th class="imgae">Image</th>
                <th>Title</th>
                <th>Total</th>
                <th>Goal</th>
                <th>total</th>
                <th>end date</th>
                <th>date added</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>

            </table>
          </div>
        </div>

        <div class="donations container-content" v-show="activeNow == 3">
          <div class="title-content">
            donations
          </div>
          <div class="table-container">
            <table class="table-info">
              <tr>
                <th>Campaign name</th>
                <th>Dollar amount</th>
                <th>The given name</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>

            </table>
          </div>
        </div>

        <div class="activites container-content" v-show="activeNow == 4">
          <div class="title-content">
            activites
          </div>

          <div class="table-container">
            <table class="table-info">
              <tr>
                <th class="id">Image</th>
                <th>Title</th>
                <th>Total</th>
                <th>Total</th>
                <th>Goal</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>

            </table>
          </div>
        </div>

        <div class="profile container-content" v-show="activeNow == 5">
          <div class="title-content">
            profile
          </div>

          <form action="#">
            <div class="inputs">
              <div class="input-div">
                <label>first name</label>
                <input type="text" placeholder="First Name" required>
              </div>
              <div class="input-div">
                <label>Last name</label>
                <input type="text" placeholder="Last name" required>
              </div>
              <div class="input-div">
                <label>email</label>
                <input type="email" placeholder="email" required>
              </div>
              <div class="input-div">
                <label>phone number</label>
                <input type="number" placeholder="First Name" required>
              </div>
            </div>

            <button type="submit">Save</button>

          </form>
        </div>






      </div>
    </div>
  </div>
</template>


<style lang="scss">
.CustomerDashboard {
  background-color: #f7f9fc;
  box-shadow: 0 0 20px 10px #f7f9fc;


  >.container {
    display: flex;
    gap: 35px;
    padding-top: 30px;
    padding-bottom: 30px;

    .menu {
      background-color: #fff;
      width: 270px;
      min-width: 270px;
      border: 1px solid #e9e9e9;
      border-radius: 8px;

      >img {
        display: block;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin: 16px auto;
        object-fit: contain;
      }

      >b {
        font-size: 1.2rem;
        color: #2d3954;
      }

      >span {
        color: #0c94de;
        padding: 4px;
        font-size: 1.07rem;
      }

      >*:not(.ul) {
        display: block;
        text-align: center !important;
      }

      .ul {
        display: flex;
        flex-direction: column;
        gap: 1px;
        margin-top: 15px;
        margin-bottom: 15px;

        >a {
          padding: 9.5px 25px;
          display: flex !important;
          align-items: center;
          gap: 10px;
          border-radius: 8px;

          &.active {
            background-color: var(--Primary-color);
            color: #fff;
            font-weight: 600;
            text-shadow: 0 0 1px #000, 0 0 20px #0000005d;

            i {
              text-shadow: 0 0 1px #000, 0 0 20px #0000005d;
              color: #fff;
              margin-top: -1.5px;
            }

            &:hover {
              color: #fff;
            }
          }

          &:hover {
            color: var(--Primary-dark-color);
          }

          i {
            color: #30384e;
            text-shadow: none;

          }
        }

      }
    }

    .content {
      flex: auto;
      box-shadow: 0 0 18px #ebebeb;
      height: fit-content;
      padding-bottom: 40px;
      background-color: #fff;

      .controlBoard {
        .cards {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          >.card {
            width: 30%;
            gap: 10px;
            // background-color: red;
            // padding: 14px 18px;
            height: fit-content;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #ddd;
            color: #2d3954;

            .title {
              padding: 12px 20px;
            }

            .color {
              padding: 12px 20px;
              padding-bottom: 24px;
              background-color: rgb(153, 153, 255);
              font-weight: 600;
              font-size: 1.2rem;
            }

          }
        }
      }

      .campaigns {

        >a {
          background-color: var(--Primary-color);
          padding: 8px 14px;
          border-radius: 30px;
          color: #fff;
          text-shadow: 0 0 1px #000, 0 0 10px #0000003f;
        }

      }


      .profile {


        .inputs {

          padding: 18px 4px;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;


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
              border: 2px solid #eee !important;
              box-shadow: 0 0 10px 1.5px #f2f2f2;
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



  // general codes...
  .container-content {
    padding: 18px;
    background-color: #fff;
    // &:has(table) {
    overflow: auto;
    // }
  }

  .title-content {
    padding: 8px;
    margin: 0 8px;
    padding-bottom: 14.5px;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 22px;
    font-size: 1.5rem;
  }

  // table...
  .table-container {
    width: 100%;
    // max-width: 100%;
    min-width: 100%;
    max-width: 1px;
    overflow-x: auto;
    // min-width: 100%;

    .table-info {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .table-info td,
    .table-info th {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      color: #222;
    }

    td {
      height: 47.5px;

    }

    tr {
      &:hover {
        td {
          border-color: #aaaaaaa5;
        }
      }
    }

    .table-info tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    .table-info tr:hover {
      background-color: #ddddddaa;
    }

    .table-info th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #f4f8fa;
      color: #72809d;
      min-width: 100px;
      text-align: center;

      &.imgae {
        min-width: 150px;
      }

      &.id {
        width: 1px;
      }

    }




  }

  ::-webkit-scrollbar {
    height: 8px;
  }


}


@media (max-width:780px) {
  .CustomerDashboard>.container {
    flex-direction: column;

    >* {
      width: 100%;
      min-width: 100% !important;
    }
  }

  .CustomerDashboard>.container .content .controlBoard .cards>.card {
    width: 100%;
    margin: 10px 0;
  }

  .CustomerDashboard>.container .content .profile .inputs .input-div {
    width: 100%;
  }
}

@media (min-width:1400px) {

  .CustomerDashboard .container {
    max-width: 1140px;
  }

}
</style>