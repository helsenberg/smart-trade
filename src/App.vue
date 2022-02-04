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
import Header from './Header';
import General from './General';
import Footer from './Footer';

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
