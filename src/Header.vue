<template>
 <div class="head d-flex justify-space-between align-center">
   <div>
     <div class="d-flex">
      <div>Время на сервере:</div>

      <div id="clock"></div>
    </div>
      <div> 
          {{dayOfTheWeek}} {{date.day}}.{{date.month}}.{{date.year}} г.
      </div> 
    </div>

   <div>Техподдержка по РФ</div>
   <v-icon @click="goToLogin" dark>mdi-exit-to-app</v-icon>
 </div>
</template>

<script>

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let today = new Date()

window.onload = function() {
  window.setInterval(function() {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds()

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    var clock = hours + ":" + minutes + ':' + seconds;
    document.getElementById("clock").innerHTML = clock; 
  })
}

export default ({
  data: () => ({
    loginState: false,
    dayOfTheWeek: days[today.getDay()],
    date: { 
      year: '',
      month: '',
      day: ''
    },
  }),
  methods: {
    addLeadingZero(d) {
      return (d < 10) ? '0' + d : d;
    },
    getUserTime() {
      let today = new Date()
        this.date.year = today.getFullYear();
        this.date.month = this.addLeadingZero(today.getMonth()+1);
        this.date.day = this.addLeadingZero(today.getDate());
    },
    goToLogin() {
      this.loginState = true
      this.transferData()
    },
    transferData() {
      this.$emit("authState", this.loginState)
    }
  },
  mounted() {
    this.getUserTime()
  }
})
</script>

<style scoped>
  .head {
    color: white;
    padding: 13px 58px;
    background-color: #438424;
    max-height: 64px;
    width: 100%;
  }
</style>