<script setup>
//import
//import {ref ,computed} from 'vue'
import { RouterLink } from 'vue-router';
import {menuStore} from '../stores/menu'
const store = menuStore()
const storelist = store.bookinglist



function del(i) {
  storelist[i].numproduct--;

  if (storelist[i].numproduct <= 0) {
    storelist.splice(i, 1); // ลบรายการออกจาก storelist เมื่อ numproduct เป็น 0 หรือน้อยกว่า
  }
}


</script>


<template>

<div class="container">
  <table class="table" >
  <thead>
    <tr>
      <th scope="col">รายการ</th>
      <th scope="col">ชื่อสินค้า</th>
      <th scope="col"></th>
      <th scope="col">จำนวน</th>
      <th scope="col">ราคา/กล่อง</th>
      
      <th scope="col">ราคา</th>
    </tr>
  </thead>
  <tbody class="table-group-divider pink">
    <tr v-for="(bookings, index) in storelist" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{bookings.product}}</td>
      <td><img :src="bookings.img" alt="" style="max-width: 200px;"></td>
      <td>
        <button type="button" class="btn btn-outline-dark m-1" @click="bookings.numproduct ++"><i class="fa-solid fa-basket-shopping" style="color: #44A0AD;"></i></button>
        {{ bookings .numproduct }} 
        <button type="button" class="btn btn-outline-danger m-1" @click="del(index)" v-if="bookings.numproduct> 0"><i class="fa-solid fa-eraser"></i></button>
      </td>
      <td>{{bookings.price}}</td>
      <td>{{bookings.price*bookings.numproduct}}</td>
      
    </tr>
    <tr>
      
      <td colspan="4" class="table" style="background-color:#fde3fd ;" >ราคาสินค้ารวม</td>
      <td>{{store.totalproduct}} กล่อง </td>
      <td>{{store.totalprice}}บาท</td>
    </tr>
  </tbody>
</table>
 <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel"> <strong>Fresh Harvest Dairy-Free</strong></h1>
        <RouterLink to="/"><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></RouterLink>
      </div>
      <div class="modal-body">
        <h3 style="text-align: center; padding: 10px;">การซื้อสินค้าสำเร็จ<br></h3>
        
        <h6 style="text-align: center;">จำนวน {{store.totalproduct}} กล่อง <hr>ราคา {{store.totalprice}}บาท</h6>
      <img src="https://cliply.co/wp-content/uploads/2021/08/472108170_THANK_YOU_STICKER_400px.gif" alt="">
      </div>
      
    </div>
  </div>
</div>

<button class="btn btn-dark center"  data-bs-target="#exampleModalToggle" data-bs-toggle="modal">ยืนยันการสั่งซื้อ</button>
</div> 


</template>
<style>
.pink{background-color: #fde3fd;}

</style>