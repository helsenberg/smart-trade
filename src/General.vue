<template>
  <div>
    <MainPage 
      v-if="selectedMenu === 'Главная'"
    />
    <Auctions 
      v-if="selectedMenu === 'Все торги'"
    />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue"
import Auctions from "./components/Auctions.vue"

export default ({
  data: () => ({

  }),
  methods: {

  },
  components: {
    Auctions,
    MainPage
  },
  props: [
    'selectedMenu'
  ],
})
</script>

<style scoped>

</style>