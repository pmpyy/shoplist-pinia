<script setup>
//import { ref } from 'vue';
import Navmilk from '../components/Navmilk.vue'
import {menuStore} from '../stores/menu'



const allmenu = menuStore();
const Mlist = allmenu.menulist;




</script>
<template>
<Navmilk></Navmilk>
<header>
  <h5 ><strong>{{ Mlist[allmenu.id].product }}</strong> </h5>
</header>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card h-100">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="Mlist[allmenu.id].img" class="img-fluid" alt="productimg">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p><strong>รายละเอียดสินค้า </strong><br>{{ Mlist[allmenu.id].discription }}</p>
              <p class="card-text">{{ Mlist[allmenu.id].ml }}</p>
              <p class="card-text"> <b>พลังงาน : </b>{{ Mlist[allmenu.id].cal }} Kcal</p>
              <p class="card-text"><b>ราคา </b>: {{ Mlist[allmenu.id].price }} บาท</p>
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>
<style>
img{
  max-width: 600px;
  margin: 0px;
  padding: 10px;

}
header{
  text-align: center;
  padding: 10px;
 
}
.center-container {
  display: flex;
  justify-content: center; /* จัดให้อยู่ตรงกลางแนวนอน */
  align-items: center; /* จัดให้อยู่ตรงกลางแนวตั้ง */
  height: 100vh; /* ความสูงเท่ากับความสูงของหน้าจอ */
}


</style>../stores/chart