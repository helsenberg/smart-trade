<template>
  <div>

    <h2 v-if="selectedCategory === ''">
      Категории
    </h2>
    <h2 v-if="selectedCategory != ''">
      {{selectedCategory}}
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
        class="searchFilter d-flex text-center align-center mr-1"
        v-if="selectedCategory != ''"
      >
      {{selectedCategory}}
      <v-icon class="ml-2 removeFilter" dark @click = "clearSelectedCategory"> mdi-close-circle </v-icon>
      </div>

      <div 
        class="searchFilter d-flex text-center align-center"
        v-if="selectedSubSubCategory != ''"
      >
      {{selectedSubSubCategory}}
      <v-icon class="ml-2 removeFilter" dark @click = "clearSelectedSubSubCategory"> mdi-close-circle </v-icon>
      </div>
      
      <input class="mr-1" style="width:100%; padding: 10px 5px 10px 5px;" type="text" id="value" placeholder=": Введите ключевое слово или номер лота">

      <div class="mr-5 advancedSearch">
        Расширенный поиск
      </div>
      <v-btn depressed class="searchButton"> Найти сейчас </v-btn>
    </div>

    <!-- Category Section -->

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

    <!-- Sub Category Section -->

    <div id="category_" class="mt-5"
      v-if="selectedCategory !== '' & selectedSubSubCategory === ''"
    >
      <div class="d-flex sub-categories-card"
        v-if="selectedCategory === 'Топливо и ГМС'"
      >
        <div class="card sub-categories-content">
          <img class="mr-3 sub-categories-content__icon" :src="require('../assets/sub-categories/oil.svg')">
          <div class="sub-categories-content__title">Топливо для транспорта</div>
          <div class="sub-categories-content__sub-sub-title"
            @click = "selectSubSubCategory('Бензин')"
          >Бензин</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title"
            @click = "selectSubSubCategory('Дизельное топливо')"
          >Дизельное топливо</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title"
            @click = "selectSubSubCategory('Биодизель')"
          >Биодизель</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
        </div>
        <div class="card sub-categories-content">
          <img class="mr-3 sub-categories-content__icon" :src="require('../assets/sub-categories/lubricant.svg')">
          <div class="sub-categories-content__title">Смазочные материалы</div>
          <div class="sub-categories-content__sub-sub-title">Моторные масла</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Трансмиссионные масла</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Специальные масла</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Пластичные смазки</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Прочее</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
        </div>
        <div class="card sub-categories-content">
          <img class="mr-3 sub-categories-content__icon" :src="require('../assets/sub-categories/petrol.svg')">
          <div class="sub-categories-content__title">Специальные жидкости</div>
          <div class="sub-categories-content__sub-sub-title">Тормозные жидкости</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Охлаждающие жидкости</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Незамерзающие жидкости</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
          <div class="sub-categories-content__sub-sub-title">Прочее</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div>
        </div>
        <div class="card sub-categories-content">
          <img class="mr-3 sub-categories-content__icon" :src="require('../assets/sub-categories/magnifire.svg')">
          <div class="sub-categories-content__title">Все лоты категории</div>
          <!-- <div class="sub-categories-content__sub-sub-title">Тракторная техника</div>
          <div class="sub-categories-content__sub-sub-count">19 101</div> -->
        </div>
      </div>
    </div>

    <!-- SubSub Category Section -->

    <div id="lot-section"
      v-if="selectedSubSubCategory === 'Бензин'"
    >
      <div
        class="card lot-section mt-5"
      >
        <div class="lot-grid">
          <img class="lot-picture" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information">
            <div class="lot-tags">STI-123456</div>
            <div class="lot-title">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost">753 059 373,30 руб.</div>
            <div class="lot-count">Объем товара: 1 шт.</div>
            <div class="lot-allocation">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details">
            <div class="lot-actions">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info"> <v-btn>Подробнее</v-btn> </div>
          </div>
        </div>
      </div>
      <div
        class="card lot-section mt-5"
      >
        <div class="lot-grid">
          <img class="lot-picture" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information">
            <div class="lot-tags">STI-123456</div>
            <div class="lot-title">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost">753 059 373,30 руб.</div>
            <div class="lot-count">Объем товара: 1 шт.</div>
            <div class="lot-allocation">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details">
            <div class="lot-actions">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info"> <v-btn>Подробнее</v-btn> </div>
          </div>
        </div>
      </div>
      <div
        class="card lot-section mt-5"
      >
        <div class="lot-grid">
          <img class="lot-picture" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information">
            <div class="lot-tags">STI-123456</div>
            <div class="lot-title">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost">753 059 373,30 руб.</div>
            <div class="lot-count">Объем товара: 1 шт.</div>
            <div class="lot-allocation">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details">
            <div class="lot-actions">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info"> <v-btn>Подробнее</v-btn> </div>
          </div>
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
    selectedSubSubCategory: '',
  }),
  props: [],
  methods: {
    selectCategory(category) {
      this.selectedCategory = ''
      this.selectedCategory = category
    },
    clearSelectedCategory() {
      this.selectedCategory = ''
      this.selectedSubSubCategory = ''
    },
    clearSelectedSubSubCategory() {
      this.selectedSubSubCategory = ''
    },
    selectSubSubCategory(category) {
      this.selectedSubSubCategory = ''
      this.selectedSubSubCategory = category
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
/* * {
  margin: 0;
  transition: .15s all;
} */
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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.5%;
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

/* Sub Categories Section */

.sub-categories-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5%;
}
.sub-categories-content {
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 15px;
  align-self: start;
}
.sub-categories-content__title {
  align-self: center;
  font-weight: 700;
  font-size: 18px;
  grid-column-start: 2;
  grid-column-end: 4;
}
.sub-categories-content__sub-sub-title {
  grid-column-start: 1;
  grid-column-end: 3;
}
.sub-categories-content__sub-sub-title:hover {
  cursor: pointer;
}
.sub-categories-content__sub-sub-count {
  grid-column-start: 3;
  justify-self: end;
}

/* Lot Section */

.lot-section {
  padding: 24px;
  width: 100%;
}
.lot-grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(6, auto);
  column-gap: 0%;
}
.lot-picture {
  grid-row-start: 1;
  grid-row-end: 7;
}
.lot-information {
  display: grid;
  row-gap: 5px;
  justify-items: start;
}
.lot-tags {
  padding: 2px;
  justify-self: start;
  align-self: center;
  background: #E5F1FE;
  border-radius: 14px;
}
.lot-title {
  color: #194E00;
  font-weight: 700;
  font-size: 18px;
}
.lot-cost {
  font-weight: 700;
  font-size: 24px;
}
.lot-count, .lot-allocation, .lot-org {
  font-weight: 400;
  font-size: 16px;
}
.lot-details {
  display: grid;
  justify-content: end;
}
.lot-actions {
  justify-self: end;
}
.lot-date {
  justify-self: end;
  text-align: right;
}
.lot-info {
  justify-self: end;
  align-self: end;
}
</style>
