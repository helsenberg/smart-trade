<template>
  <v-app>
    <div class="app app--navigation-unpinned">
      <div class="app__navigation navigation">
        <div class="navigation__header">
          <span><img height=39 width=165 :src="require('./assets/WEB-Logo STI_Agro_Trade.svg')"></span>
          <div
            class="navigation__pin-btn"
            @click="pinNavigation"
          > <v-icon dark> mdi-menu </v-icon> </div>
        </div>

        <div class="divider"></div>

        <!-- <v-divider></v-divider> -->

        <!-- <nav class="menu">
          <ul class="menu__list"
            v-for="item in items"
            :key="item.title"
          >
            <li>
              <div class="menu__content card">
                <div class="menu-item__icon">
                  <v-icon> {{item.icon}} </v-icon>
                </div>
                <div class="menu-item__title">
                  {{item.title}}
                </div>
              </div>
            </li>
          </ul>
        </nav> -->
        
        <div class="navigation__content">
          <div class="content__list mt-2">
            <v-list color="#3B3B3B" dark subheader
              active-class
            >

              <v-list-item link @click = "selectMenu('Главная')" class="menu-item" :class="[ selectedMenu === 'Главная' ? 'selected-menu' : '' ]">
                <v-list-item-icon> <img :src="require('./assets/menu-icons/home.svg')"> </v-list-item-icon>
                <v-list-item-title> Главная </v-list-item-title>
              </v-list-item>

              <v-list-group
                class="menu-item"
                no-action
                dark
                color="#f0f0f0"
                :class="[ selectedMenu === 'Все торги' || selectedMenu === 'Мои лоты' || selectedMenu === 'Актуальные лоты' || selectedMenu === 'Избранное' || selectedMenu === 'Архив' ? 'selected-menu' : '' ]"
              >
                <template v-slot:activator :class="[ selectedMenu === 'Все торги' ? 'selected-menu' : '' ]">
                  <v-list-item-icon> <img :src="require('./assets/menu-icons/auction.svg')"> </v-list-item-icon>
                  <v-list-item-title> Торги </v-list-item-title>
                </template>

                <v-list-item link @click = "selectMenu('Все торги')" class="menu-item" :class="[ selectedMenu === 'Все торги' ? 'selected-menu__grouped' : '' ]">
                  <v-list-item-title> Все торги </v-list-item-title>
                </v-list-item>
                <v-list-item link @click = "selectMenu('Мои лоты')" class="menu-item" :class="[ selectedMenu === 'Мои лоты' ? 'selected-menu__grouped' : '' ]">
                  <v-list-item-title> Мои лоты </v-list-item-title>
                </v-list-item>
                <v-list-item link @click = "selectMenu('Актуальные лоты')" class="menu-item" :class="[ selectedMenu === 'Актуальные лоты' ? 'selected-menu__grouped' : '' ]">
                  <v-list-item-title> Актуальные лоты </v-list-item-title>
                </v-list-item>
                <v-list-item link @click = "selectMenu('Избранное')" class="menu-item" :class="[ selectedMenu === 'Избранное' ? 'selected-menu__grouped' : '' ]">
                  <v-list-item-title> Избранное </v-list-item-title>
                </v-list-item>
                <v-list-item link @click = "selectMenu('Архив')" class="menu-item" :class="[ selectedMenu === 'Архив' ? 'selected-menu__grouped' : '' ]">
                  <v-list-item-title> Архив </v-list-item-title>
                </v-list-item>
              </v-list-group>

              <v-list-item link @click = "selectMenu('Пользователи')" class="menu-item" :class="[ selectedMenu === 'Пользователи' ? 'selected-menu' : '' ]">
                <v-list-item-icon> <img :src="require('./assets/menu-icons/multiple-users-silhouette.svg')"> </v-list-item-icon>
                <v-list-item-title> Пользователи </v-list-item-title>
              </v-list-item>

              <v-list-item link @click = "selectMenu('Обращения')" class="menu-item" :class="[ selectedMenu === 'Обращения' ? 'selected-menu' : '' ]">
                <v-list-item-icon> <img :src="require('./assets/menu-icons/email.svg')"> </v-list-item-icon>
                <v-list-item-title> Обращения </v-list-item-title>
              </v-list-item>

              <v-list-item link @click = "selectMenu('Статистика')" class="menu-item" :class="[ selectedMenu === 'Статистика' ? 'selected-menu' : '' ]">
                <v-list-item-icon> <img :src="require('./assets/menu-icons/bar-chart.svg')"> </v-list-item-icon>
                <v-list-item-title> Статистика </v-list-item-title>
              </v-list-item>

              <v-list-item link @click = "selectMenu('Документы')" class="menu-item" :class="[ selectedMenu === 'Документы' ? 'selected-menu' : '' ]">
                <v-list-item-icon> <img :src="require('./assets/menu-icons/documents-folder.svg')"> </v-list-item-icon>
                <v-list-item-title> Документы </v-list-item-title>
              </v-list-item>

              <v-list-item link @click = "selectMenu('Новости')" class="menu-item" :class="[ selectedMenu === 'Новости' ? 'selected-menu' : '' ]"> 
                <v-list-item-icon> <img :src="require('./assets/menu-icons/megaphone.svg')"> </v-list-item-icon>
                <v-list-item-title> Новости </v-list-item-title>
              </v-list-item>

              <!-- <v-list-item
                class="navigation__content-item"
                :class="[selectedMenu === item.title ? 'navigation__content-item--active' : '']"
                v-for="item in items"
                :key="item.title"
                link
                @click = "selectMenu(item.title)"
              >
                <v-list-item-icon> <v-icon> {{item.icon}} </v-icon> </v-list-item-icon>
                <v-list-item-title> {{item.title}} </v-list-item-title>
              </v-list-item> -->
            </v-list>
          </div>
          <div>
            <v-list color="#3B3B3B" dark>
              <v-list-item link>
                <v-list-item-icon> <img :src="require('./assets/menu-icons/question.svg')"> </v-list-item-icon>
                <v-list-item-title>Помощь</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </div>

      <div class="app__content container d-flex flex-column justify-space-between">

        <Header />

        <div class="main__block">
            <v-main>

              <General class="main__container" 
                :selectedMenu="selectedMenu"
              />
              
            </v-main>

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

let isPinned = false

export default {
  name: 'App',

  components: {
    Header,
    General,
    Footer
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
    pinNavigation() {
      isPinned = !isPinned
      if (isPinned) {
        document.querySelector('.app').classList.add('app--navigation-pinned')
        document.querySelector('.navigation').classList.add('navigation--pinned')
      }
      else {
        document.querySelector('.app').classList.remove('app--navigation-pinned')
        document.querySelector('.navigation').classList.remove('navigation--pinned')
      }
    },
    selectMenu(value) {
      this.selectedMenu = value
    }
    
  },
  mounted() {
    this.getCategoryList()
  }
};
</script>

<style scoped>
.divider {
  height: 1px;
  width: 95%;
  margin: 0px 7px 0px 7px;
  background-color: white;
}
/* new list styles */
.menu {
  text-decoration: none;
}
ul {
  height: 100%;
}
.menu li {
  list-style: none;
}
.menu-item {
  margin-top: 5px;
}
.menu__content {
  /* display: flex;
  column-gap: 30px;
  row-gap: 50px; */
  display: grid;
  grid-template-columns: auto;
  row-gap: 10px;
}

.selected-menu {
  background-color: #6c6c6c !important;
  border-radius: 10px !important;
}
.selected-menu__grouped {
  background-color: #919191 !important;
  border-radius: 10px !important;
}

* {
  margin: 0;
  transition: .35s all;
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

}
.navigation__content-item--active {
  background-color: rgba(182, 182, 182, 0.213);
}
.content__list {
  color: white;
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
</style>
