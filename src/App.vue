<template>
  <v-app>
    <div class="app app--navigation-unpinned">
      <div class="app__navigation navigation">
        <div class="navigation__header">
          <span><img height=39 width=165 :src="require('./assets/logo.svg')"></span>
          <div
            class="navigation__pin-btn"
            @click="pinNavigation"
          > <v-icon> mdi-menu </v-icon> </div>
        </div>

        <v-divider></v-divider>

        <v-card>
          <v-list class="navigation__content d-flex flex-column" color="#C4C4C4">
            <div class="d-flex flex-column">
              <v-list-item
                class="navigation__content-item"
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon> <v-icon> {{item.icon}} </v-icon> </v-list-item-icon>
                <v-list-item-title> {{item.title}} </v-list-item-title>
              </v-list-item>
            </div>

            <div class="d-flex flex-column helpBlock">
            <v-list-item link class="d-flex">
              <v-list-item-icon> <v-icon> mdi-cog-outline </v-icon> </v-list-item-icon>
              <v-list-item-title>Настройки</v-list-item-title>
            </v-list-item>
            <v-list-item link class="d-flex">
              <v-list-item-icon> <v-icon> mdi-help </v-icon> </v-list-item-icon>
              <v-list-item-title>Помощь</v-list-item-title>
            </v-list-item>
            </div>
          </v-list>
        </v-card>
      </div>
      <div class="app__content container">
        <Header />
          <v-main>
            <General />
          </v-main>
        <Footer />
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
    items: [
      {title: 'Главная', icon: 'mdi-folder'},
      {title: 'Торги', icon: 'mdi-folder'},
      {title: 'Пользователи', icon: 'mdi-folder'},
      {title: 'Обращения', icon: 'mdi-folder'},
      {title: 'Статистика', icon: 'mdi-folder'},
      {title: 'Документы', icon: 'mdi-folder'},
      {title: 'Новости', icon: 'mdi-folder'},
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
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  transition: .35s all;
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
  height: 100%;
  background-color: #C4C4C4;
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
  padding: 16px 8px 0px 8px;
}
.navigation__pin-btn {
  cursor: pointer;
}
.navigation__pin-btn:hover {
  color: white;
}
.helpBlock {
  margin-top: calc(100vh - 585px);
}
</style>
