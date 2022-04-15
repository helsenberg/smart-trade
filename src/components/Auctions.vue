<template>
  <div>

    <h2>
      Категории
    </h2>

    <div class="mt-2 mb-2 card d-flex align-center">
      <!-- <v-text-field
        class="searchField"
        prepend-inner-icon="mdi-magnify"
        placeholder="Введите ключевое слово или номер лота"
        clearable
        dense
        solo
        flat
        height="60px"
      ></v-text-field> -->
      <div class="ml-3"><v-icon>mdi-magnify</v-icon></div>

      <div 
        class="searchFilter d-flex text-center align-center"
        v-if="selectedCategory != ''"
      >
      {{selectedCategory}}
      <v-icon class="ml-2 removeFilter" dark @click = "clearSelectedCategory"> mdi-close-circle </v-icon>
      </div>
      
      <input class="mr-1" style="width:100%; padding: 10px 5px 10px 5px;" type="text" id="value" placeholder="Введите ключевое слово или номер лота">

      <div class="mr-5 advancedSearch">
        Расширенный поиск
      </div>
      <v-btn depressed class="searchButton"> Найти сейчас </v-btn>
    </div>

    <!-- <div>
      {{selectedCategory}}
    </div> -->

    <div class="content-section mt-5"
      v-if="selectedCategory === ''"
    >
      <div class="content-section__card card text-center d-flex flex-column justify-space-between align-center"
        v-for="category in categoryList"
        :key="category"
        @click = "selectCategory(category.attributes.title)"
      > 
        <div class="card-count">1636</div>
        <img src="../assets/tractor.svg">
        <div class="card-title mb-3">{{category.attributes.title}}</div>
      </div>
    </div>

    <div id="category_"
      v-if="selectedCategory !== ''"
    >
      <div class="d-flex">
        <div class="card">
          subCategory
        </div>
        <div class="card">
          subCategory
        </div>
        <div class="card">
          subCategory
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { server } from "../server.js";

export default ({
  data: () => ({
    server: server,
    categoryList: [],
    categoryTitle: [],
    selectedCategory: '',
  }),
  props: [],
  methods: {
    selectCategory(category) {
      this.selectedCategory = ''
      this.selectedCategory = category
      console.log(this.selectedCategory)
    },
    clearSelectedCategory() {
      this.selectedCategory = ''
    },
    getCategoryList() {
      fetch(this.server + 'categories?populate=image')
        .then(res => res.json())
        .then(res => {
          this.categoryList = res.data
        })
    }
  },
  mounted() {
    this.getCategoryList()
  }
})
</script>

<style scoped>
* {
  margin: 0;
  transition: .35s all;
}
.searchField {
  max-height: 60px;
}
input:focus {
  outline: none;
}
.searchButton {
  color: white !important;
  background-color: #194E00 !important;
  height: 56px !important;
  border-color: transparent !important;
  border-radius: 0px 10px 10px 0px !important;
}
/* v-text-field {
  padding: 10px;
} */
/* .v-input__slot div::before {
  border-color: red !important;
} */
.content-section {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, minmax(10px, 379px));
  column-gap: 64px;
  row-gap: 30px;

  /* display: flex;
  flex-wrap: wrap;
  column-gap: 64px;
  row-gap: 30px; */
}
.content-section__card {
  padding: 10px;
  height: 184px;
}
.content-section__card:hover {
  cursor: pointer;
}
.hide .removeFilter {
  display: none;
}
.card-title {
  font-weight: 700;
}
.card-count {
  margin-left: 85%;
}
.searchFilter {
  padding: 10px;
  height: 40px;
  font-size: 14px;
  white-space: nowrap;
  color: white;
  background: #194E00;
  border-radius: 10px;
}
.advancedSearch {
  white-space: nowrap;
}
</style>
