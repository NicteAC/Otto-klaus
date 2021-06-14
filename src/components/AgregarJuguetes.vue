<template>
  <div class="ingreso">
    <div id="formulario">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="juguete.Código"
          :rules="codigoRules"
          label="Ingrese código del juguete"
          required
        ></v-text-field>
        <v-text-field
          v-model="juguete.Nombre"
          label="Ingrese nombre del juguete"
          required
        ></v-text-field>
        <v-text-field
          v-model="juguete.Stock"
          label="Ingrese stock del juguete"
          required
        ></v-text-field>
        <v-text-field
          v-model="juguete.Precio"
          label="Ingrese precio del juguete"
          required
        ></v-text-field>
        <div id="botones">
          <v-btn @click="addToy(juguete)" outlined>Agregar juguete</v-btn>
        </div>
      </v-form>
    </div>    
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Toys();
  },
  data: () => ({
    alert: false,
    juguete: {
      Código: "",
      Nombre: "",
      Stock: "",
      Precio: "",
    },
    valid: true,
    Código: "",
    codigoRules: [(v) => !!v || "Código es requerido"],
  }),

  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    ...mapActions(["get_Toys", "addToy"]),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style>
#formulario {
  margin-left: 20px;
  margin-right: 20px;
}
#botones {
  margin-left: 10px;
  margin-right: 10px;
}
#lista {
  margin: 40px;
}
</style>