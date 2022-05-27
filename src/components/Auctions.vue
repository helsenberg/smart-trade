<template>
  <div class="main-block">

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

      <div class="mr-5 advanced-search pointer"
        @click="overlay = !overlay"
      >
        Расширенный поиск
      </div>

      <v-overlay
        :absolute="absolute"
        :value="overlay"
        class="overlay-card"
      >
        <div class="card d-flex flex-column advanced-search-overlay">
          <div class="d-flex justify-space-between">
            <h1 class="overlay-title">Расширенные настройки поиска</h1>
            <v-icon color="#FF2400" @click="overlay = false" class="pointer">mdi-close</v-icon>
          </div>
          
          <div class="card d-flex align-center mt-3">
            <div class="ml-3"><v-icon light>mdi-magnify</v-icon></div>
            <input class="mr-1" style="width:100%; padding: 10px 5px 10px 5px;" type="text" id="value" placeholder=": Введите ключевое слово или номер лота">
            <v-btn depressed class="searchButton"> Найти сейчас </v-btn>
          </div>
        </div>
        
      </v-overlay>

      <v-btn depressed class="searchButton"> Найти сейчас </v-btn>
    </div>

    <!-- Category Section -->

    <div class="content-section mt-5"
      v-if="selectedCategory === ''"
    >
      <!-- <div class="content-section__card card text-center d-flex flex-column justify-space-between align-center"
        v-for="category in categoryList"
        :key="category"
        @click = "selectCategory(category.attributes.title)"
      > 
        <div class="card-count">1 636</div>
        <img src="../assets/tractor.svg">
        <div class="card-title mb-3">{{category.attributes.title}}</div>
      </div> -->

      <div class="content-section__card card text-center d-flex flex-column justify-space-between align-center"
        v-for="category in categories"
        :key="category"
        @click = "selectCategory(category.title)"
      >
        <div class="card-count">1 636</div>
        <img src="../assets/pig.svg">
        <div class="card-title mb-3">{{category.title}}</div>
      </div>

    </div>

    <!-- Sub Category Section -->

    <div id="category_" class="mt-5"
      v-if="selectedCategory !== '' & selectedSubSubCategory === ''"
    >
      <div class="d-flex sub-categories-card justify-space-between"
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

    <div
      class="type-of-view d-flex flex-row-reverse"
      v-if="selectedSubSubCategory != ''"
    >
      <div class="view-selector" @click = "selectTypeOfView('table')"><v-icon v-if="selectedTypeOfView === 'grid' || selectedTypeOfView === 'list'">mdi-reorder-horizontal</v-icon><v-icon color="#2A5F06" v-if="selectedTypeOfView === 'table'">mdi-reorder-horizontal</v-icon></div>
      <div class="view-selector" @click = "selectTypeOfView('grid')"><v-icon v-if="selectedTypeOfView === 'table' || selectedTypeOfView === 'list'">mdi-view-grid</v-icon><v-icon color="#2A5F06" v-if="selectedTypeOfView === 'grid'">mdi-view-grid</v-icon></div>
      <div class="view-selector" @click = "selectTypeOfView('list')"><v-icon v-if="selectedTypeOfView === 'table' || selectedTypeOfView === 'grid'">mdi-format-list-bulleted</v-icon><v-icon color="#2A5F06" v-if="selectedTypeOfView === 'list'">mdi-format-list-bulleted</v-icon></div>
    </div>

    <!-- SubSub Category Section -->

    <div id="lot-section-1"
      v-if="selectedSubSubCategory != '' && selectedTypeOfView === 'list'"
    >
      <div
        class="card lot-section-1 mt-5"
      >
        <div class="lot-grid-1">
          <img class="lot-picture-1" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information-1">
            <div class="lot-tags-1">STI-123456</div>
            <div class="lot-title-1">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost-1">753 059 373,30 руб.</div>
            <div class="lot-count-1">Объем товара: 1 шт.</div>
            <div class="lot-allocation-1">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org-1">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details-1">
            <div class="lot-actions-1">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date-1">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info-1"> <v-btn>Подробнее</v-btn> </div>
          </div>
        </div>
      </div>
      <div
        class="card lot-section-1 mt-5"
      >
        <div class="lot-grid-1">
          <img class="lot-picture-1" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information-1">
            <div class="lot-tags-1">STI-123456</div>
            <div class="lot-title-1">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost-1">753 059 373,30 руб.</div>
            <div class="lot-count-1">Объем товара: 1 шт.</div>
            <div class="lot-allocation-1">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org-1">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details-1">
            <div class="lot-actions-1">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date-1">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info-1"> <v-btn>Подробнее</v-btn> </div>
          </div>
        </div>
      </div>
      <div
        class="card lot-section-1 mt-5"
      >
        <div class="lot-grid-1">
          <img class="lot-picture-1" :src="require('../assets/examples-for-lots/xmpl1.svg')">
          <div class="lot-information-1">
            <div class="lot-tags-1">STI-123456</div>
            <div class="lot-title-1">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
            <div class="lot-cost-1">753 059 373,30 руб.</div>
            <div class="lot-count-1">Объем товара: 1 шт.</div>
            <div class="lot-allocation-1">Местонахождение товара: Ульяновская область, Ульяновск, Камышинская ул., 89В р-н Засвияжский</div>
            <div class="lot-org-1">Организатор лота: ООО "Башкир-Агроинвест"</div>
          </div>
          <div class="lot-details-1">
            <div class="lot-actions-1">
              <v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon>
            </div>
            <div class="lot-date-1">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
            <div class="lot-info-1"> <v-btn>Подробнее</v-btn> </div>
          </div>
        </div>
      </div>
    </div>

    <div id="lot-section-2"
      v-if="selectedSubSubCategory != '' && selectedTypeOfView === 'grid'"
    >
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"><v-btn>Подробнее</v-btn> 
          </div>
        </div>
      </div>
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"> <v-btn>Подробнее</v-btn> </div>
        </div>
      </div>
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"> <v-btn>Подробнее</v-btn> </div>
        </div>
      </div>
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"> <v-btn>Подробнее</v-btn> </div>
        </div>
      </div>
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"> <v-btn>Подробнее</v-btn> </div>
        </div>
      </div>
      <div class="card lot-grid-2 mt-5">
        <img class="lot-picture-2" :src="require('../assets/examples-for-lots/xmpl1.svg')">
        <div class="lot-information-2">
          <div class="lot-tags-2 mt-2">STI-123456</div>
          <div class="lot-actions-2"><v-icon class="lot-actions-2__item">mdi-playlist-plus</v-icon> <v-icon class="lot-actions-2__item">mdi-heart</v-icon> <v-icon class="lot-actions-2__item">mdi-message</v-icon></div>
          <div class="lot-title-2">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
          <div class="lot-cost-2">753 059 373,30 руб.</div>
          <div class="lot-count-2">Объем товара: 1 шт.</div>
          <div class="lot-info-2"> <v-btn>Подробнее</v-btn> </div>
        </div>
      </div>
    </div>

    <div id="lot-section-3"
      v-if="selectedSubSubCategory != '' && selectedTypeOfView === 'table'"
    >
      <div class="lot-grid-3__title mt-5">
        <div>Номер лота</div>
        <div class="table-divider"></div>
        <div>Название лота</div>
        <div class="table-divider"></div>
        <div>Объем товара</div>
        <div class="table-divider"></div>
        <div>Начальная стоимость</div>
        <div class="table-divider"></div>
        <div>Организатор лота</div>
        <div class="table-divider"></div>
        <div>Дата и время</div>
        <div class="table-divider"></div>
        <div class="text-center">Действия</div>
      </div>

      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
      </div> 
      <div class="horizontal-table-divider"></div>
      <div class="lot-grid-3__info-line">
        <div class="lot-tags-3">STI-123456</div>
        <div class="lot-title-3">Виноградноуборочный комбайн NEW HOLLAND 9040 M после аварии</div>
        <div class="lot-count-3">1 шт.</div>
        <div class="lot-cost-3">753 059 373,30 руб.</div>
        <div class="lot-org-3">ООО "Башкир-Агроинвест"</div>
        <div class="lot-date-3">Подача заявок до: 27.02.2022 12:00 (МСК) <br> Начало торгов: 01.03.2022 10:00 (МСК)</div>
        <div class="lot-actions-3"><v-icon>mdi-playlist-plus</v-icon> <v-icon>mdi-heart</v-icon> <v-icon>mdi-message</v-icon></div>
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
    selectedTypeOfView: 'list',

    absolute: true,
    overlay: false,
    
    categories: [
      {
        title: 'С/х техника и транспорт'
      },
      {
        title: 'Топливо и ГМС'
      },
      {
        title: 'Продукция растениеводства'
      },
      {
        title: 'Сельхозживотные'
      },
      {
        title: 'Продукты переработки'
      },
      {
        title: 'Оборудование'
      },
      {
        title: 'Корма и добавки для с/х животных и птиц'
      },
      {
        title: 'Земли и объекты недвижимости'
      },
      {
        title: 'Тара и упаковка'
      },
      {
        title: 'Услуги и сервисы'
      },
      {
        title: 'Товарный молодняк (Продукция БМК и РМК)'
      },
      {
        title: 'Прочее'
      },
    ]
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
    },
    selectTypeOfView(value) {
      this.selectedTypeOfView = ''
      this.selectedTypeOfView = value
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
.content-section {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.5%;
  row-gap: 30px;
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
.advanced-search {
  white-space: nowrap;
}
.advanced-search-overlay {
  padding: 16px 24px 16px 24px;
  position: relative;
  right: 136%;
  background-color: #fff;
  width: 373%;
}
.overlay-title {
  color: black;
  font-size: 24px;
  font-weight: 700;
}

/* Sub Categories Section */

.sub-categories-card {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2.5%;
}
.sub-categories-content__icon {
  width: 64px;
  height: 64px;
}
.sub-categories-content {
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

.view-selector {
  cursor: pointer;
}

.lot-section-1 {
  padding: 24px;
  width: 100%;
}
#lot-section-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2.5%;
}
.lot-grid-1 {
  display: grid;
  grid-template-columns: 1fr 2.8fr 1fr;
  grid-template-rows: repeat(6, auto);
  column-gap: 1%;
}
.lot-grid-2 {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
}
.lot-grid-3__title {
  display: grid;
  background-color: #995F2A;
  color: white;
  padding: 12px 16px 12px 16px;
  grid-template-columns: 1fr auto 2fr auto 0.8fr auto 1.5fr auto 1.5fr auto 1fr auto 0.5fr;
  column-gap: 1%;
  border-radius: 10px 10px 0px 0px;
}
.lot-grid-3__info-line {
  display: grid;
  padding: 12px 16px 12px 16px;
  grid-template-columns: 1fr 2fr 0.8fr 1.5fr 1.5fr 1fr 0.5fr;
  column-gap: 1%;
}
.lot-picture-1 {
  grid-row-start: 1;
  grid-row-end: 7;
}
.lot-picture-2 {
  justify-self: center;
  padding: 10px;
}
.lot-information-1 {
  display: grid;
  row-gap: 5px;
  justify-items: start;
}
.lot-information-2 {
  display: grid;
  row-gap: 5px;
  justify-items: start;
}
.lot-tags-1, .lot-tags-2 {
  padding: 2px;
  justify-self: start;
  align-self: center;
  background: #E5F1FE;
  border-radius: 14px;
}
.lot-tags-3 {
  padding: 2px;
  justify-self: start;
  align-self: start;
  background: #E5F1FE;
  border-radius: 14px;
}
.lot-title-1, .lot-title-2, .lot-title-3 {
  color: #194E00;
}
.lot-cost-1, .lot-cost-2 {
  color: #0044BB;
  font-weight: 700;
  font-size: 24px;
} 
.lot-cost-3 {
  color: #0044BB;
  font-weight: 700;
  font-size: 18px;
}
.lot-title-1 {
  font-weight: 700;
  font-size: 24px;
}
.lot-title-2, .lot-title-3 {
  font-weight: 700;
  font-size: 18px;
}

.lot-count-1, .lot-allocation-1, .lot-org-1 {
  font-weight: 400;
  font-size: 16px;
}
.lot-count-3, .lot-org-3 {
  font-weight: 400;
  font-size: 16px;
  color: #0044BB;
}
.lot-details-1 {
  display: grid;
  justify-content: end;
}
.lot-actions-1 {
  justify-self: end;
}
.lot-actions-2 {
  height: 1px;
  position: relative;
  bottom: 28000%;
  left: 66%;
  z-index: 1;
}
.lot-actions-2__item {
  background-color: #fff;
  border: 1px solid #194E00;
  border-radius: 20px;
  padding: 5px;
}
.lot-actions-3 {
  justify-self: center;
}
.lot-date-1 {
  justify-self: end;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
}
.lot-info-1 {
  justify-self: end;
  align-self: end;
}
.lot-info-2 {
  justify-self: end;
  align-self: end;
}
.type-of-view {
  display: flex;
  column-gap: 5px;
}
.overlay-card {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px !important;
}
.table-divider {
  height: 100%; 
  background-color: #CCA17A;
  width: 2px;
}
.horizontal-table-divider {
  height: 1px;
  background-color: #CCA17A;
  width: 100%;
}
</style>
