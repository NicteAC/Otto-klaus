<template>
  <div class="about">
   <h1 id="texto">Inventario Tienda</h1>
          <v-img
        id="imagen"
        max-height="100"
        max-width="1400"
        src="../assets/ositos.jpg"
      >
      </v-img>
    <ListadoJuguetes />
    <Footer />
  </div>
</template>
<script>
import ListadoJuguetes from '../components/ListadoJuguetes.vue';
import Footer from '../components/Footer.vue'
import { mapActions} from "vuex";
export default {
  name: "Inventario",
  components: {ListadoJuguetes, Footer },
  methods: {
    ...mapActions(["logout", "get_Toys"]),
  },
}
</script>
<style>

</style>

