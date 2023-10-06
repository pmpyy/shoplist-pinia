<!-- eslint-disable vue/multi-word-component-names -->

<script setup>


</script>
<style>
  .navbar {
    width: 100%;
  }
.name{
  margin-left: 10px;
  margin-right: 10px;

}
.name-top{
  margin-left: 20px;
  margin-right: 20px;
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
<template>
<div class="container">
  <nav class="navbar navbar-expand-lg body" style="background-color: #fde3fd;">
    <div class="container-fluid">
      <hr class="name"><RouterLink to="/"><img src="https://th.bing.com/th/id/R.d9cdcccbf59cd81948cd5cfe11ba209e?rik=tTgQXDhVsHiqfQ&pid=ImgRaw&r=0" alt="" style="max-width: 80px;"></RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse name-top" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item name">
          <a class="nav-link active" aria-controls="page"><RouterLink to="/"><i class="fa-solid fa-house BlueYonder" ></i></RouterLink></a>
        </li>
        <li class="nav-item name">
          <a class="nav-link active" aria-controls="page"><RouterLink to="/"><i class="fa-solid fa-utensils purple"></i></RouterLink></a> 
        </li>
        <li class="nav-item name">
          <a class="nav-link active" aria-controls="page"><RouterLink to="/list" @click="allmenu.bookings(n)"><i class="fa-solid fa-basket-shopping lighBlue"></i></RouterLink></a>
        </li>
      </ul>
      
    </div>
    </div>
  </nav>
</div>

</template>
