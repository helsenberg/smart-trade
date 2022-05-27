<template>
  <v-app>

    <Authorization 
      :loginState='loginState'
      v-if="loginState === true"
      @authState="authState"
    />
    
    
    <div class="app">
      <Menu 
        @selectMenu="selectMenu"
      />

      <div class="app__content container d-flex flex-column justify-space-between">

        <Header 
          @authState="authState"
        />

        <div class="main__block">
            <div>

              <General class="main__container" 
                :selectedMenu="selectedMenu"
              />
              
            </div>

          <Footer />
        </div>

      </div>
    </div>
    
  </v-app>
</template>

<script>
import Header from './Header';
import General from './General';
import Footer from './Footer';
import Authorization from './components/Authorization.vue'
import Menu from './components/Menu.vue'


export default {
  name: 'App',

  components: {
    Header,
    General,
    Footer,
    Authorization,
    Menu,
  },

  data: () => ({
    selectedMenu: 'Главная',
    items: [
      {title: 'Главная', icon: 'mdi-home'},
      {title: 'Торги', icon: 'mdi-gavel'},
      {title: 'Пользователи', icon: 'mdi-account-group'},
      {title: 'Обращения', icon: 'mdi-email'},
      {title: 'Статистика', icon: 'mdi-chart-areaspline'},
      {title: 'Документы', icon: 'mdi-file-document'},
      {title: 'Новости', icon: 'mdi-bullhorn'},
    ]
  }),
  methods: {
    authState(value) {
      this.loginState = value
    },
    selectMenu(value) {
      this.selectedMenu = value
    }
  },
  props: [
    'loginState',
    'selectedMenu'
  ],
  mounted() {
    this.getCategoryList()
  }
};
</script>

<style scoped>
/* new list styles */
.menu {
  text-decoration: none;
}
.main__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  height: calc(100vh - 64px);
}
.main__container {
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 60px;
  margin-bottom: 20px;
}
.app {
  height: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 50px calc(100vw - 50px);
}
.app--navigation-pinned {
  grid-template-columns: 252px calc(100vw - 252px);
}
.app__navigation {
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: #3B3B3B;
}
.app__content {
  width: 100%;
}
.navigation {
  position: relative;
  width: 72px;
  overflow: hidden;
}
.navigation:hover, .navigation--pinned {
  width: 252px;
}
.navigation__header {
  padding: 17px 17px 0px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation__content {
  height: calc(100vh - 64px);
  padding: 0px 8px 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: .1s !important;
}
.navigation__content-item--active {
  background-color: rgba(182, 182, 182, 0.213);
}
.content__list {
  color: white;
  height: 100%;
}
.navigation__pin-btn {
  cursor: pointer;
}
.navigation__pin-btn:hover {
  color: #3B3B3B;
}
/* .helpBlock { */
  /* margin-top: calc(100vh - 52.5vh); */
/* } */
* {
  margin: 0;
  transition: .35s all;
}
</style>

<style> 
.card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 0;
}
.pointer {
  cursor: pointer
}

</style>
