<template>
  <div>

    <h2>
      Категории
    </h2>

    <div class="mt-2 mb-2 search d-flex align-center">
      <v-text-field
        class="searchField"
        prepend-inner-icon="mdi-magnify"
        placeholder="Введите ключевое слово или номер лота"
        clearable
        dense
        solo
        flat
        height="60px"
      ></v-text-field>
      <div class="mr-5">
        Расширенный поиск
      </div>
      <v-btn depressed class="searchButton"> Найти сейчас </v-btn>
    </div>

    <div id="content-section" class="mt-5">
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/tractor.svg">
        <div class="card-title mb-3">С/х техника и транспорт</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/oil.svg">
        <div class="card-title mb-3">Топливо и ГСМ</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/organic-food.svg">
        <div class="card-title mb-3">Продукция растениеводства</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/livestock.svg">
        <div class="card-title mb-3">Сельхозживотные</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/dairy-products.svg">
        <div class="card-title mb-3">Продукты переработки</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/equipment.svg">
        <div class="card-title mb-3">Оборудование</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/feed.svg">
        <div class="card-title mb-3">Корма и добавки для с/х животных и птиц</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/field.svg">
        <div class="card-title mb-3">Земли и объекты недвижимости</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/packaging.svg">
        <div class="card-title mb-3">Тара и упаковка</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/clearing-cart.svg">
        <div class="card-title mb-3">Услуги и сервисы</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/pig.svg">
        <div class="card-title mb-3">Товарный молодник (Продукция БМК и РМК)</div>
      </div>
      <div class="content-section__card text-center d-flex flex-column justify-space-between align-center"> 
        <div class="card-count">1636</div>
        <img src="../assets/magnifying-glass.svg">
        <div class="card-title mb-3">Прочее</div>
      </div>
    </div>

  </div>
</template>

<script>

export default ({
  data: () => ({

  }),
})
</script>

<style scoped>
* {
  margin: 0;
  transition: .35s all;
}
#content-section {
  /* display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, auto);
  column-gap: 60px;
  row-gap: 30px; */

  display: flex;
  flex-wrap: wrap;
  column-gap: 62px;
  row-gap: 30px;
}
.searchField {
  max-height: 60px;
}
.searchButton {
  color: white !important;
  background-color: #194E00 !important;
  height: 56px !important;
  border-color: transparent !important;
}
v-text-field {
  padding: 10px;
}
.search {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;  
}
.v-input__slot div::before {
  border-color: red !important;
}
.content-section__card {
  padding: 10px;
  height: 184px;
  width: 364px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.card-title {
  font-weight: 700;
}
.card-count {
  margin-left: 85%;
}
/* .card-grid {
  grid-template-columns: 30px, auto, auto;
} */
</style>
