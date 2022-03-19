<template>
  <body>
    <div>
      <main>
        <aside>
          <h2><span>Comece sua </span></h2>
          <h2><span>Jornada</span></h2>
          <h3>Com a gente!</h3>

          <button id="button">
            <router-link to="/profile"> COMEÇAR AGORA </router-link>
          </button>
        </aside>

        <article>
          <img
            id="img"
            src="../assets/anime.svg"
            alt="mulher-roxa"
            style="width: 1300px; margin-left: 100px; margin-top: 43px"
          />
        </article>
      </main>
    </div>
  </body>
</template>

<style scoped>
/* imagem de fundo da home */
body {
  background: rgba(0, 0, 0, 0.657) url("../assets/fundo3.jpg");
  height: 950px;
  margin-top: -50px;
  background-blend-mode: darken;
  /*background-size: cover;
          height: 100vh;
          background-position: left;
          margin-top: 200px;*/
}
/* button */
button {
  width: 250px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(-45deg, #9c0763, #5f2741, #564094, #037263);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 90px;
  margin-left: 35px;
  background-size: 800% 400%;
  padding: 1em 2em;
  display: inline-block;
  border: none;
 
  font-size: 17px;
  font-weight: 700;
 
  transition: all 0.5s ease-in-out;
  animation: gradient 5s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
}

/* link do button pra deixar o link invisivel */
button a:hover {
  text-decoration: none;
}
/* animação ao passar o mouse */
button:hover {
  background-color: #ac7295;
  animation: gradient 2s infinite;
  transform: scale(1.05);
}
/* animação ao clicar */
button:active {
  animation: gradient 2s infinite;
  transform: scale(0.8);
}
/* animação do gradiente */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
main {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}
/* configurações do texto */
h2 {
  font-size: 86px;
  line-height: 10px;
  font-family:'Times New Roman', Times, serif;
  margin-top: 65px;
  margin-left: 30px;
}
h3 {
  font-size: 86px;
  line-height: 10px;
  font-family:'Times New Roman', Times, serif;
  margin-top: 65px;
  margin-left: 30px;
  color: #9d8fbe;
}
span {
  color: rgb(246, 246, 246);
}

/* p {
  line-height: 30px;
  max-width: 500px;
  font-family: poppinslight;
  margin-top: 105px;
  font-size: 20px;
  margin-left: 30px;
} */

aside {
  margin-top: 150px;
}
</style>
