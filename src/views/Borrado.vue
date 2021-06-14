<template>
  <div class="about">
    <h1>Eliminar Juguetes de Bodega</h1>
    <v-img
        id="imagen"
        max-height="100"
        max-width="1400"
        src="../assets/ositos.jpg"
      >
      </v-img>
    <BorrarJuguetes />
    <Footer />
  </div>
</template>
<script>
import BorrarJuguetes from '../components/BorrarJuguetes.vue';
import Footer from '../components/Footer.vue';
import { mapActions, mapState } from "vuex";
export default {
  name: "Borrado",
  components: { BorrarJuguetes, Footer },
  mounted() {
    this.get_Toys()
  },
  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    ...mapActions(["get_Toys", "logout" ]),
  },
};
</script>
<style>
#container2 {
    width: 100%;
    height: 80px;
    margin: 5px;
    position: relative;
}
</style>