<template>
  <div>
    <div v-if="regState === 'log'">
      <div class="authorization background">
        <div class="authorization__1"></div>
        <div class="authorization__2"></div>
      </div>

      <div class="auth-content">
        <div class="reg-form">
          <div class="log-logo"><img height=39 width=165 :src="require('../assets/WEB-Logo STI_Agro_Trade__Dark.svg')"></div>
          
          <div class="d-flex flex-column">
            <div class="form__header">Авторизация </div>
            <div class="form__grid card">
              <div class="form__grid-item-1 text-center" @click='chooseLogin("email")' :class="[ isChoosed === 'email' ? 'form__grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed != 'email'" src="../assets/email-login_black.svg"> <img class="choose-icon" v-if="isChoosed === 'email'" src="../assets/email-login_white.svg"> </div>
              <div class="form__grid-item-2 text-center" @click="chooseLogin('phone')" :class="[ isChoosed === 'phone' ? 'form__grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed === 'phone'" src="../assets/phone-login_white.svg"> <img class="choose-icon" v-if="isChoosed != 'phone'" src="../assets/phone-login_black.svg"> </div>
              <div class="form__grid__last-line">
                <div v-if="isChoosed === 'email'" class="reg-form__group">
                  <div class="form__group-item">
                    <label>Электронная почта</label>
                    <input type="text" placeholder="Введите Вашу электронную почту">
                  </div>
                  <div class="form__group-item">
                    <label>Пароль</label>
                    <input type="text" placeholder="Введите Ваш пароль">
                  </div>
                  <div class="reg-form__checkbox">
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Оставаться в системе</div>
                    </div>
                    <v-btn color="#EC9006" class="reg-button"> Войти </v-btn>
                    <div class="cta-text mt-2">Еще не зарегистрировались? - <span class="cta-button" @click="changeRegState('reg')">Создайте аккаунт!</span> </div>
                  </div>
                </div>
                <div v-if="isChoosed === 'phone'" class="reg-form__group">
                  <div class="form__group-item">
                    <label>Телефон</label>
                    <input type="text" placeholder="Введите Ваш номер телефона">
                  </div>
                  <div class="reg-form__checkbox">
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Оставаться в системе</div>
                    </div>
                    <v-btn color="#EC9006" class="reg-button"> Получить СМС с кодом </v-btn>
                    <div class="cta-text mt-2">Еще не зарегистрировались? - <span class="cta-button" @click="changeRegState('reg')">Создайте аккаунт!</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="auth-form__footer">Ⓒ 2022 STI, all rights reserved. Made with ❤ for agribusiness. <v-icon @click="outOfLogin"> mdi-close </v-icon> </div>
        </div>
        <div class="auth-info">
          <div class="auth-header text-center">Добро пожаловать на специализированную ЭТП для агропромышленных компаний</div>
          <div class="auth-title text-center">Agro-Trade</div>
          <div class="auth-pic__block"> <img class="auth-pic__item" src="../assets/iMac.png"> </div>
        </div>
      </div>
      <!-- <div>
        <div class="auth-content">
          <img height=39 width=165 :src="require('../assets/WEB-Logo STI_Agro_Trade__Dark.svg')">
          <div class="auth-item__form">
            <div class="auth-item__form-header">Авторизация</div>
            <div class="auth-item__form-grid card">
              <div class="auth-item__form-grid-item-1 text-center" @click='chooseLogin("email")' :class="[ isChoosed === 'email' ? 'auth-item__form-grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed != 'email'" src="../assets/email-login_black.svg"> <img class="choose-icon" v-if="isChoosed === 'email'" src="../assets/email-login_white.svg"> </div>
              <div class="auth-item__form-form__grid-item-2 text-center" @click="chooseLogin('phone')" :class="[ isChoosed === 'phone' ? 'auth-item__form-grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed === 'phone'" src="../assets/phone-login_white.svg"> <img class="choose-icon" v-if="isChoosed != 'phone'" src="../assets/phone-login_black.svg"> </div>
              <div class="auth-item__form-grid-item-last-line">
                <div v-if="isChoosed === 'email'" class="auth-item__form-group">
                  <div class="auth-item__form-group-item">
                    <label for="">Электронная почта</label>
                    <input type="text" placeholder="Введите Вашу электронную почту">
                  </div>
                  <div class="auth-item__form-group-item">
                    <label for="">Пароль</label>
                    <input type="text" placeholder="Введите Ваш пароль">
                  </div>
                  <div class="d-flex align-center"> 
                    <input type="checkbox" class="checkbox"> 
                    <div>Оставаться в системе</div>
                  </div>
                  <v-btn color="#EC9006" class="auth-button"> Войти </v-btn>
                  <div class="mt-2">Еще не зарегистрировались? - <span class="cta-button" @click="changeRegState('reg')">Создайте аккаунт</span> </div>
                </div>
                <div v-if="isChoosed === 'phone'" class="auth-item__form-group">
                  <div class="auth-item__form-group-item">
                    <label for="">Телефон</label>
                    <input type="text" placeholder="Введите Ваш номер телефона">
                  </div>
                  <div class="d-flex align-center"> 
                    <input type="checkbox" class="checkbox"> 
                    <div>Оставаться в системе</div>
                  </div>
                  <v-btn color="#EC9006" class="auth-button"> Получить смс с кодом </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="auth-item">Ⓒ 2022 STI, all rights reserved. Made with ❤ for agribusiness. <v-icon @click="outOfLogin"> mdi-close </v-icon> </div>
        </div>
        <div class="welcome">
          <div class="welcome-grid">
            <div class="welcome-header text-center">Добро пожаловать на специализированную ЭТП для агропромышленных компаний</div>
            <div class="welcome-title text-center">Agro-Trade</div>
            <div> <img class="welcome-pic" src="../assets/iMac.png"> </div>
          </div>
        </div>
      </div> -->
    </div>
    <div v-if="regState === 'reg'">
      <div class="authorization background">
        <div class="authorization__3"></div>
        <div class="authorization__4"></div>
      </div>
    
      <div class="reg-content">
        <div class="reg-info">
          <div class="reg-header text-center">Специализированная ЭТП для агропромышленных предприятий</div>
          <div class="reg-title text-center">Agro-Trade</div>
          <div class="reg-list">
            <div class="reg-list-item">
              <img src="../assets/icons-for-reg-list/responsive.svg">
              <div class="reg-list-item__text">Удобный и понятный интерфейс с доступными подсказками и обучением</div>
            </div>
            <div class="reg-list-item">
              <img src="../assets/icons-for-reg-list/search.svg">
              <div class="reg-list-item__text">Обширный выбор категорий, товаров и услуг</div>
            </div>
            <div class="reg-list-item">
              <img src="../assets/icons-for-reg-list/web-analytics.svg">
              <div class="reg-list-item__text">Динамическая статистика по вашим торгам</div>
            </div>
            <div class="reg-list-item">
              <img src="../assets/icons-for-reg-list/marketing.svg">
              <div class="reg-list-item__text">Простое взаимодействие с организациями</div>
            </div>
            <div class="reg-list-item">
              <img src="../assets/icons-for-reg-list/support.svg">
              <div class="reg-list-item__text">Отзывчивая поддержка</div>
            </div>
          </div>
        </div>
        <div class="reg-form">
          <div class="reg-logo"><img height=39 width=165 :src="require('../assets/WEB-Logo STI_Agro_Trade__Dark.svg')"></div>
          
          <div class="d-flex flex-column">
            <div class="form__header">Регистрация </div>
            <div class="form__grid card">
              <div class="form__grid-item-1 text-center" @click='chooseLogin("email")' :class="[ isChoosed === 'email' ? 'form__grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed != 'email'" src="../assets/email-login_black.svg"> <img class="choose-icon" v-if="isChoosed === 'email'" src="../assets/email-login_white.svg"> </div>
              <div class="form__grid-item-2 text-center" @click="chooseLogin('phone')" :class="[ isChoosed === 'phone' ? 'form__grid-item--choosed' : '' ]"> <img class="choose-icon" v-if="isChoosed === 'phone'" src="../assets/phone-login_white.svg"> <img class="choose-icon" v-if="isChoosed != 'phone'" src="../assets/phone-login_black.svg"> </div>
              <div class="form__grid__last-line">
                <div v-if="isChoosed === 'email'" class="reg-form__group">
                  <div class="form__group-item">
                    <label>Электронная почта</label>
                    <input type="text" placeholder="Введите Вашу электронную почту">
                  </div>
                  <div class="form__group-item">
                    <label>Пароль</label>
                    <input type="text" placeholder="Введите Ваш пароль">
                  </div>
                  <div class="form__group-item">
                    <label>Подтверждение пароля</label>
                    <input type="text" placeholder="Введите Ваш пароль повторно">
                  </div>
                  <div class="reg-form__checkbox">
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Я согласен с пользовательским соглашением</div>
                    </div>
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Получать рассылку с новостями</div>
                    </div>
                    <v-btn color="#EC9006" class="reg-button"> Зарегистрироваться </v-btn>
                    <div class="cta-text mt-2">Уже есть аккаунт? - <span class="cta-button" @click="changeRegState('log')">Авторизируйтесь!</span> </div>
                  </div>
                </div>
                <div v-if="isChoosed === 'phone'" class="reg-form__group">
                  <div class="form__group-item">
                    <label>Телефон</label>
                    <input type="text" placeholder="Введите Ваш номер телефона">
                  </div>
                  <div class="reg-form__checkbox">
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Я согласен с пользовательским соглашением</div>
                    </div>
                    <div class="reg-form__checkbox-item d-flex align-center"> 
                      <input type="checkbox" class="checkbox"> 
                      <div>Получать рассылку с новостями</div>
                    </div>
                    <v-btn color="#EC9006" class="reg-button"> Получить СМС </v-btn>
                    <div class="cta-text mt-2">Уже есть аккаунт? - <span class="cta-button" @click="changeRegState('log')">Авторизируйтесь!</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="reg-form__footer">Ⓒ 2022 STI, all rights reserved. Made with ❤ for agribusiness. <v-icon @click="outOfLogin"> mdi-close </v-icon> </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  data: () => ({
    isChoosed: 'email',
    regState: 'log',
  }),
  methods: {
    chooseLogin(value) {
      this.isChoosed = value
    },
    outOfLogin() {
      this.loginState = false
      this.transferData()
    },
    transferData() {
      this.$emit("authState", this.loginState)
    },
    changeRegState(value) {
      this.regState = value
    }
  },
  components: {
    
  },
  props: [
    
  ],
})
</script>

<style scoped>
.reg-logo {
  display: flex;
  justify-content: flex-end;
}
.log-logo {
  display: flex;
  justify-content: flex-start;
}
.reg-content {
  position: fixed;
  height: calc(100vh - 7%);
  margin: 32px 2% 0px 2%;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.auth-content {
  position: fixed;
  height: calc(100vh - 7%);
  margin: 32px 2% 0px 2%;
  z-index: 3;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
}
.auth-pic__block {
  align-self: center;
  justify-self: center;
}
.auth-pic__item {
  width: 700px;
  height: 550px;
}

.reg-grid {
  
}
.reg-info {
  display: flex;
  flex-direction: column;
}
.auth-info {
  display: flex;
  flex-direction: column;
}
.reg-list {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin-top: 20px;
}
.reg-list-item {
  display: flex;
  margin-left: 50px;
}
.reg-list-item__text {
  align-self: center;
  margin-left: 2%;
  font-family: Alegreya SC;
  font-size: 20px;
  font-weight: 500;
  color: #FFFFFF;
}
.reg-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.reg-form__footer {
  display: flex;
  justify-content: flex-end;
}
.auth-form__footer {
  display: flex;
  justify-content: flex-start
}
.form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  justify-self: center;
  width: 60%;
}
.form__grid-item-1 {
  padding: 12px;
  border: 1px solid #2A5F06;
  width: 100%;
  border-radius: 10px 0px 0px 0px;
}
.form__grid-item-2 {
  padding: 12px;
  border: 1px solid #2A5F06;
  width: 100%;
  border-radius: 0px 10px 0px 0px;
}
.form__grid-item--choosed {
  padding: 12px;
  border: 1px solid #2A5F06;
  background-color: #2A5F06;
  width: 100%;
}
.form__grid__last-line {
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.reg-form__group {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 24px 24px 12px 24px;
}
.form__group-item {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.reg-form__checkbox {
  display: flex;
  flex-direction: column;
}
.reg-form__checkbox-item {
  height: 35px;
}
.form__header {
  font-family: Alegreya SC;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 40px;
  position: relative;
  align-self: center;
  margin-bottom: 2%;
}
.reg-button {
  color: #FFF;
  margin-top: 1%;
}
.cta-button {
  color: blue;
  cursor: pointer;
}
.cta-text {
  width: 100%
}
.reg-header, .auth-header {
  font-family: Alegreya SC;
  font-weight: 500;
  font-size: 40px;
  color: white;
}
.reg-title, .auth-title {
  font-family: Alegreya SC;
  font-weight: 700;
  font-size: 104px;
  color: white;
}
.auth-header {
  width: 90%;
  justify-self: center;
  align-self: center;
}
.checkbox {
  margin-right: 14px;
  border: 1px solid green;
}
label {
  font-size: 16px;
  color: #868686;
}
input {
  border: 1px solid #C8D3DE;
  border-radius: 10px;
  font-size: 16px;
  color: #868686;
  height: 48px;
  padding: 10px;
}





* {
  transition: .35s all;
}
.authorization {
  display: flex;
  justify-content: start;
}
.authorization__1 {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #3E941B;
}
.authorization__2 {
  position: fixed;
  transform: rotate(97deg);
  z-index: 3;
  width: 100%;
  height: 150%;
  right: 40%;
  background-color: #FFFFFF;
}
.authorization__3 {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #FFF;
}
.authorization__4 {
  position: fixed;
  transform: rotate(97deg);
  z-index: 3;
  width: 100%;
  height: 150%;
  right: 40%;
  background-color: #3E941B;
}


</style>