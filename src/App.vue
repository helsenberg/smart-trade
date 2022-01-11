<template>
  <v-app>
    <Header />
      <v-main>
        <General />
      </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import General from './components/General';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    General,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
