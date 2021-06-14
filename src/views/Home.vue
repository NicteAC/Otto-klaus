<template>
  <div class="home">
    <h1>Sistema Inventario Tienda Otto Klaus</h1>
    <v-row align="center" justify="center">
      <v-img
        id="imagen"
        max-height="500"
        max-width="100%"
        src="../assets/ositos.jpg"
      >
      </v-img>
      <div id="formulario">
        <v-col>
          <input v-model="usuario" type="text" placeholder="Usuario" />
        </v-col>
        <v-col>
          <input
            v-model="contrasena"
            type="password"
            placeholder="Contraseña"
          />
        </v-col>
        <v-col>
          <v-btn id="botonuno" @click="login" type="submit" value="ingresar">
            ingresar</v-btn
          >
        </v-col>
        <v-col>
          <v-btn @click="logInGoogle" id="botondos" dark depressed>
            Login con Gmail</v-btn
          >
        </v-col>
      </div>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
  name: "Home",
  data() {
    return {
      usuario: "administracion@ottoklaus.cl",
      contrasena: "contraseña",
    };
  },

  methods: {
    ...mapActions(["login"]),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("inventario"),
          (error) => console.error(error)
        );
    },

    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.replace("inventario");
          let user = {
            name: result.user.displayName,
            photoURL: result.user.providerData[0].photoURL,
            email: result.user.email,
          };
          this.createdUser(user);
        })
      .catch((error) => {
       this.$message({
            showClose: true,
            message: e.message,
            type: "error",
      });
      });
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 2%;
}
#formulario {
  position: absolute;
  z-index: 1;
  margin: 10%;
  margin-left: 40%;
  padding: 3%;
  background-color: white;
}
#botonuno {
  background-color: rgb(255, 232, 232);
  color: #8612e6;
}
#botondos {
  color: white;
  background-color: blueviolet;
}
.login {
  background: white;
}
#imagen {
  margin: 2%;
  position: relative;
  z-index: 0;
}
#app {
  background: white;
}

@media only screen and (min-width:300px) and (max-width:1199px) { 
	#formulario {    
    position: absolute;
    z-index: 1;
    margin: 10%;
    margin-left: 20%;
    padding: 3%;
    background-color: white;
  }
  
}
@media only screen and  (min-width:1200px) { 
	.centrarTabla{
margin-left: 8%;
padding: 5%;
}
}
</style>
