<template>
       <v-simple-table>
      <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Código</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
        </tr>
      </thead>
      <tbody>
    <tr v-for="(juguete, i) in juguetes" :key="i">
      <td>{{ juguete.data.Código }}</td>
          <td>{{ juguete.data.Nombre }}</td>
          <td>{{ juguete.data.Stock }}</td>
          <td>$ {{ juguete.data.Precio }}</td>         
              
    </tr>
    </tbody>
   </template>
  </v-simple-table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TablaDatos",
  mounted() {
    this.get_Toys();
  },
  data() {
    return {
      juguete: {
        data: {
          Código: "",
          Nombre: "",
          Stock: "",
          Precio: "",
        },
      },
      dialog: false,
    };
  },
  computed: {
    ...mapState(["juguetes"]),
  },
  methods: {
    ...mapActions(["get_Toys"]),
  },
};
</script>

<style></style>
