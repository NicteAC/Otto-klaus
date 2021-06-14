<template>
  <div class="about">
    <h1>Ingreso Juguetes a Inventario</h1>
    <v-img
        id="imagen"
        max-height="100"
        max-width="1400"
        src="../assets/ositos.jpg"
      >
      </v-img>
    <AgregarJuguetes />
    <ListadoJuguetes />
    <Footer />
  </div>
</template>
<script>
import ListadoJuguetes from '../components/ListadoJuguetes'
import { mapActions, mapState } from "vuex";
import AgregarJuguetes from '../components/AgregarJuguetes.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "Ingreso",
  components: {AgregarJuguetes,
  ListadoJuguetes,
  Footer
  },
  mounted() {
    this.get_Toys();
  },
   data() {
    return {
      juguete: {
        Código: "",
        Nombre: "",
        Stock: "",
        Precio: "",
      },
    };
  },
  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    ...mapActions(["logout", "get_Toys", "addToy"]),
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