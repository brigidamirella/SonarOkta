<template>
  <div id="app2">
    <nav>
      <div id="nav">
        <router-link id="logo-url" to="/">
          <img id="logo" src="./assets/ai.png" alt="alt" />
        </router-link>
        <router-link to="/" v-if="authenticated" id="itemnav"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
            />
          </svg>
          Home
        </router-link>
        <router-link to="/login" v-if="!authenticated" id="itemnav">
          Login
        </router-link>
   <router-link to="/acoes" v-if="authenticated" id="itemnav">
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
</svg>
          Ações
        </router-link>
        <router-link to="/profile" v-if="authenticated" id="itemnav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
          </svg>
          Profile
        </router-link>
       

        <a id="logout" v-if="authenticated" v-on:click="logout()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="20"
            fill="currentColor"
            class="bi bi-box-arrow-in-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
            />
            <path
              fill-rule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            />
          </svg>
          Logout
        </a>
      </div>
    </nav>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["logo", "alt"],
  data: function () {
    return { authenticated: false };
  },
  async created() {
    await this.isAuthenticated();
    this.$auth.authStateManager.subscribe(this.isAuthenticated);
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: "isAuthenticated",
  },
  methods: {
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    async logout() {
      await this.$auth.signOut();
    },
  },
};
</script>

<style>
/* nav div a {
  margin-right: 10px;
} */
/* pra não aparecer a linha do link */
a {
  text-decoration: underline;
  cursor: pointer;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgba(0, 0, 0, 0.657) url("./assets/fundo3.jpg");
  background-blend-mode: darken;
}
/* body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: #362a68;
} */
/* navbar */
#nav {
  background-color: #594fc300;
  /* border-bottom: 4px solid rgb(0, 248, 227); */
  width: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}
/* logo tam */
#logo {
  width: 100px;
  height: 60px;
}
/* itens da nav */
#nav a {
  color: #ffffff;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
/* animação de todos itens da nav */
#nav a:hover {
  color: rgba(41, 255, 105, 0.746);
}
/* logout da nav */
#logout {
  background-color: #2d2358;
  color: white;
  padding: 10px;
  border-radius: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-top: 1.3rem;
}
/* logout animação */
#logout:hover {
  background-color: #0d47a1;
  color: white;
}
/* Itens da Nav config, profile, home , ações historico */
#itemnav {
  display: flex;
  align-items: center;
  padding-top: 1.3rem;
}
/* Itens da nav animação */
#itemnav:hover {
  padding: 10px;
  background-color: #2d2358;
}
</style>
