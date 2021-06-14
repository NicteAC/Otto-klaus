<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/inventario">Inventario</router-link> |
      <router-link to="/ingreso">Ingreso Juguetes</router-link> |
      <router-link to="/borrado">Eliminar Juguetes</router-link> |
      <router-link to="/edicion">Editar Juguetes</router-link> 
      <v-btn @click="logout"  id="boton2" outlined small>Salir de la sesión</v-btn>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "App",
  methods: {
  logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  }
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6100b1;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #8612e6;

    &.router-link-exact-active {
      color: #b942a9;
    }
  }
}
#boton2 {
  background-color: rgb(255, 232, 232);
  color: #8612e6;
  font-weight: bold;
  margin-left: 10px;
}
</style>