<template>
  <v-simple-table>
    <template v-slot:default="dialog">
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
            <v-btn x-small outlined flat @click="holahola()">Editar</v-btn>
            <v-layout row justify-center>
              <v-dialog v-show="dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline"
                    >Edicion de juguetes</v-card-title
                  >
                  <v-form ref="form" v-model="valid" lazy-validation>
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
                    <v-btn @click="editarJuguete" outlined
                      >Agregar juguete</v-btn
                    >
                  </v-form>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog = false"
                      >Disagree</v-btn
                    >
                    <v-btn
                      color="green darken-1"
                      flat="flat"
                      @click.native="dialog = false"
                      >Agree</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
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
      dialog: false,
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
    holahola() {
      this.dialog = true;
      console.log("Hola!");
    },
    ...mapActions(["get_Toys", "editToy"]),
    editarJuguete(id) {
      this.$swal({
        title: "¿Estas seguro de editar este juguete?",
        type: "warning",
        width: 600,
        padding: "3em",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si! Editar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Editado",
            "El jueguete fue editado correctamente",
            "success"
          );
          this.editToy(id);
        }
      });
    },
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