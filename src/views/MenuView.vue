<script setup>
//import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import {menuStore} from '../stores/menu'
import navmike from '../components/navmilk.vue'



const allmenu = menuStore()
const Mlist = allmenu.menulist





</script>
<template>
  <navmike></navmike>
<header>
  <h1 class="purple"><strong>Fresh Harvest Dairy-Free</strong></h1>
</header>
   

<div  class="container"  >
    <div class="row mb-2 ">
  <div class="col-md-6" v-for="(n,index) in Mlist" :key="index">
    <div class="card h-80" >
      <img :src=" n.img " class="card-img-top centered-image" alt="productimg" style="max-height: 580px;">
      <div class="card-body">
        <h5 class="card-title"><strong>{{ n.product }}</strong> {{n.ml}}</h5>
        <div class="d-flex mt-3">
        <div class="me-auto">
          <p class="card-text"> <b>พลังงาน :</b>{{ Mlist[allmenu.id].cal}} Kcal</p>
          <p class="card-text"><b>ราคา :</b>{{Mlist[allmenu.id].price}} บาท</p>
        </div>
        <div>
          <div class="d-flex mt-3">
          <div class="btn-group me-auto" role="group" aria-label="Basic mixed styles example">
            <RouterLink to="/list"><button @click="allmenu.bookings(n)" class="btn btn-light focus-ring focus-ring-danger py-1 px-2 text-decoration-none rounded-2" style="background-color: #fde3fd;">
            <i class="fa-solid fa-basket-shopping" style="color: #44A0AD;"></i></button></RouterLink>
      </div>
      </div>
        <br><a class="outline-dark" style="text-align: center;" @:click="allmenu.idcard(index)"><RouterLink  to="/discription">รายละเอียดสินค้า</RouterLink></a>
      </div>
    </div>
  </div>
    </div>
  </div>
</div>
</div>
<!-- <font-awesome-icon :icon="['fad', 'circle-plus']" style="--fa-primary-color: #557af6; --fa-secondary-color: #f6d155; --fa-secondary-opacity: 1;" /> -->
</template>
<style>
img{
  max-width: 600px;
 

}
header{
  text-align: center;
}
.card{
  margin: 20px;
  padding: 10px;
  max-height: 800px;
  border: 2px solid #446BAD;
}
.center-container {
  display: flex;
  justify-content: center; /* จัดให้อยู่ตรงกลางแนวนอน */
  align-items: center; /* จัดให้อยู่ตรงกลางแนวตั้ง */
  height: 100vh; /* ความสูงเท่ากับความสูงของหน้าจอ */
}

.centered-image {
  max-width: 100%; /* รูปจะไม่เกินขนาดของพื้นที่ container */
  max-height: 100%; /* รูปจะไม่เกินความสูงของพื้นที่ container */
  margin: 0px;
  padding: 10px;
}
.purple{
  color: #5244AD
}
.BlueYonder{
  color: #446BAD
}
.lighBlue{
  color: #44A0AD
}
</style>