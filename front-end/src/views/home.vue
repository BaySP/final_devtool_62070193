<template>
  <div class="container">
    <img
      src="https://app.dtac.co.th/vaccine/assets/images/banner/WebBanner-desktop-1120x400-Th_2022-Apr-28.jpg"
    />
    <h3 style="text-align: center; margin-top: 30px">
      ดีแทค เปิดลงทะเบียน รีบการฉีดวัคซีนโควิด-19
    </h3>
    <div class="row" style="margin-top: 30px">
      <div class="col-2"></div>
      <div class="col-10">
        <h5>เลือกศูนย์ฉีดวัคซีนโควิด-19</h5>
      </div>

      <div class="row" style="margin-top: 30px; margin-bottom: 250px">
      <div class="col-2"></div>
      <div class="col-2"><button @click="choose">เลือก</button></div>
      <div v-if="status != `false`" style="margin-left:210px; margin-top:20px">
      <h3>กระตุ้นเข็มที่ 3</h3>
      <button style="margin-left:500px">ลงทะเบียนฉีดวัคซีน</button>
      </div>

      </div>

      

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status:"false",
    };
  },
  methods: {
    choose() {
      if(this.status == true){
        this.status = false;
        console.log(this.status);
      }
      else{
        this.status = true;
        console.log(this.status);
      }
    },
  },
};
</script>