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
          <td>
            <v-btn x-small @click="eliminarJuguete(juguete.id)" outlined>Eliminar</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.get_Toys();
  },
  data() {
    return {
      alert: false,
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
    ...mapActions(["get_Toys", "deleteToy"]),
 
    eliminarJuguete(id) {
      this.$swal({
      title: '¿Estas seguro de eliminar este juguete?',
      type: 'warning',
      width: 600,
      padding: '3em',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si! Eliminar',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value){
          this.$swal(
            'Eliminado',
            'El jueguete fue eliminado correctamente',
            'success'
          )
          this.deleteToy(id)
        }
      })
    }
  },
};
</script>
<style>
#datos {
  padding: 10px;
  font-size: 20px;
}
#eliminado {
  margin: 20px;
}
</style>