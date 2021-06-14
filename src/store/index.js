import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: { },
  mutations: {
    GET_TOYS(state, juguetes) {
      state.juguetes = juguetes
    },
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    //Agregar juguetes a firestore
    addToy(state, juguete) {
      const { Código, Nombre, Stock, Precio } = juguete
      if (Código.length > 1 && Nombre.length > 1 && Stock.length > 1 && Precio.length > 2) {
        juguete.Precio = Number(juguete.Precio);
        juguete.Stock = Number(juguete.Stock);
        firebase
          .firestore()
          .collection("juguetes")
          .add(juguete);
      }
      else {
        let errores = ""
        if (juguete.Código == "") {
          errores = errores + "Código, "
        }
        if (juguete.Nombre == "") {
          errores = errores + "Nombre, "
        }
        if (juguete.Stock == "") {
          errores = errores + "Stock, "
        }
        if (juguete.Precio == "") {
          errores = errores + "Precio"
        }
        alert("Los siguientes campos son requeridos: " + errores)
      }
    },
    //Obtener juguetes de firestore
    get_Toys({ commit }) {
      firebase
        .firestore()
        .collection("juguetes")
        .onSnapshot((docs) => {
          const juguetes = [];
          docs.forEach((doc) => {
            juguetes.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          commit("GET_TOYS", juguetes);
        });
    },
    deleteToy(context,id) {
      firebase.firestore().collection("juguetes").doc(id).delete();
    },
    async editToy(context, {id,Nombre, Stock, Precio}) {
      await firebase
      .firestore()
      .collection("juguetes")
      .update({Nombre});
      await firebase
          .firestore()
          .collection("juguetes")
          .update({Stock});
      await firebase
      .firestore()
      .collection("juguetes")
      .update({Precio});
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },

    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.SET_USER(user)
          router.replace('inventario');
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: e.message,
            type: "error",
          });
        });

    },
  },
  modules: {
  },
  plugins: [createPersistedState()],  
});

