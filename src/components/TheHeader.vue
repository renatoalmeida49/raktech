<template>
    <div id="nav">
      <div class="backdrop" :class="{flex: toogle}" @click="toogleMenu"></div>

        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo/logoSquare.png" height="40px"/>
          </router-link>
        </div>

        <div>
          <button class="toggle-button" @click="toogleMenu">
            <span class="toogle-button__bar"></span>
            <span class="toogle-button__bar"></span>
            <span class="toogle-button__bar"></span>
          </button>
        </div>

        <div class="links">
          <div>
            <router-link to="/">Home</router-link>
            <router-link to="/sobre">Sobre nós</router-link>
          </div>
          <div>
            <router-link to="/manutencao">Manutenção</router-link>
            <router-link to="/redes">Redes</router-link>
            <router-link to="/web">Web</router-link>
          </div>
        </div>

        <div class="links-mobile" :class="{flex: toogle}">
          <div @click="toogleMenu">
            <router-link to="/">Home</router-link>
            <router-link to="/sobre">Sobre nós</router-link>
          </div>
          <div @click="toogleMenu">
            <router-link to="/manutencao">Manutenção</router-link>
            <router-link to="/redes">Redes</router-link>
            <router-link to="/web">Web</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      toogle: false,
    }
  },
  methods: {
    toogleMenu() {
      console.log("Called")

      if(this.toogle) {
        this.toogle = false
      } else {
        this.toogle = true
      }
    }
  }
}
</script>

<style scoped>
/* NAV em geral */

#nav {
  padding: 15px;
  background: rgb(22, 21, 21);
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #999;
  text-decoration: none;
  margin: 10px 6px;
  font-size: 2rem;
}

#nav a:hover,
#nav a:active {
  color: #fcfcfc;
  transform: scale(1.05);
}

#nav a.router-link-exact-active {
  transform: scale(1.05);
  color: #fff;
}

/* Fundo para quando o mobile é exibido */

.backdrop {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
}

/* Button mobile */
.toggle-button {
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
}

.toogle-button__bar {
  width: 100%;
  height: 0.2rem;
  background: white;
  margin: 0.5rem 0;
  display: block;
  border-radius: 6px;
}

/* Esconde os links para desktop */
.links {
  display: none;
}

.links div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
}

.links-mobile {
  position: fixed;
  top: 0;
  right: 0;
  background: rgb(22, 21, 21);
  display: none;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  z-index: 100;
  padding: 40px;
}

.links-mobile div {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}

.flex {
  display: flex;
}

@media (min-width: 640px) {
  .toggle-button {
    display: none;
  }

  .links {
    display: flex;
    justify-content: center;
  }

  #nav a {
    font-size: 1rem;
  }
}
</style>