<template>
  <!-- component -->
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <div
    class="mx-auto mb-12 mt-24 w-full px-4 xl:mb-0 xl:w-8/12"
    style="width: 800px; margin-top: -8px; margin-left: 1093px"
  >
    <div
      class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
      style="height: 510px"
    >
      <div class="mb-0 rounded-t border-0 px-4 py-3">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-1 flex-grow px-4">
            <h3 class="text-base font-semibold text-blue-900">
              MINHA LISTA DE ORDENS
            </h3>
          </div>
        </div>
      </div>

      <div class="block w-full overflow-x-auto">
        <table class="w-full border-collapse items-center bg-transparent">
          <caption></caption>
          <thead>
            <tr>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                NAME
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                SYMBOL
              </th>

              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                QUANTIDADE
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                DATA
              </th>
            </tr>
          </thead>

          <tbody v-for="busca in user" :key="busca">
            <tr>
              <td
                class="text-blueGray-700 whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
              >
                {{ busca.stock_name }}
              </td>
              <td
                class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
              >
                {{ busca.stock_symbol }}
              </td>

              <td
                class="align-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-xs"
              >
                <strong class="fas fa-arrow-up mr-4 text-blue-500"></strong>
                {{ busca.volume }}
              </td>
              <td
                class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
              >
                {{ busca.updated_on }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <div>
                  <button
                    class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    type="button"
                    @click="
                      toggleModal(
                        busca.id,
                        busca.stock_name,
                        busca.stock_symbol
                      )
                    "
                  >
                    VENDER
                  </button>
                  <!-- MODAL -->
                  <div
                    v-if="showModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
                  >
                    <div class="relative w-auto my-6 mx-auto max-w-6xl">
                      <!--content-->
                      <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                      >
                        <!--header-->
                        <div
                          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
                        >
                          <h3 class="text-3xl font-semibold">
                            VENDER MINHAS AÇÕES
                          </h3>
                          <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="toggleModal()"
                          >
                            <span
                              class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                            >
                              ×
                            </span>
                          </button>
                        </div>
                        <!--body-->
                        <div class="p-6 space-y-6">
                          <thead>
                            <tr id="modal2" class="text-gray-900">
                              Name:
                              {{
                                stock_name
                              }}
                            </tr>
                            <tr id="modal2" class="text-gray-900">
                              Symbol:
                              {{
                                stock_symbol
                              }}
                            </tr>
                           
                          </thead>
                          <thead>
                            <tr>
                              <br />
                              Volume:
                              <input
                                v-model="volume"
                                placeholder=" vol"
                                style="width: 120px; margin-left: 5px"
                                type="number"
                                step="1"
                                min="1"
                                class="border border-slate-300"
                              />
                              <label for=""></label>
                              <br />
                              <br />
                              Valor: R$
                              <input
                                class="border"
                                v-model="price"
                                placeholder=" price"
                                style="width: 120px; margin-left: 5px"
                                type="number"
                                step="1"
                                min="1"
                              />
                              <label for=""></label>
                            </tr>
                          </thead>
                        </div>
                        <!--footer-->
                      
                        <div
                          class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                        >
                        
                          <button
                          
                            v-on:click="toggleModal()"
                            id="buttonModal"
                            class="text-black-500 bg-transparent border border-solid border-blue-900 hover:bg-blue-700 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Close
                          </button>
                      
                          <button
                            @click="vender"
                            id="buttonModal"
                            class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            VENDER
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="showModal"
                    class="opacity-25 fixed inset-0 z-40 bg-PINK"
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: 0,
      showModal: true,
      stock_name: "",
      stock_symbol: "",
      id: "",
      volume: "",
      price: "",
      id_user: "",
      email: "",
    };
  },
  created() {
    this.buscaBalances();
    this.toggleModal();
  },
  methods: {
    async vender() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        const body = {
          id_user: 5,
          id_stock: this.id,
          email: this.claims.email,
          volume: this.volume,
          price: this.price,
          type: 2,
          stock_name: this.stock_name,
          stock_symbol: this.stock_symbol,
          status: 1,
        };
        try {
          var now = new Date();

          const response = await axios.post(
           `http://localhost:8082/orders?email=${this.claims.email}`,
            body,
            {
              headers: {
                Authorization: "Bearer " + this.$auth.getAccessToken(),
              },
            }
          );
          window.alert("Order added with success! \n\n" + now);
          this.showModal = !this.showModal;
          console.log(response);
          console.log(body);
        } catch (error) {
          window.alert(error.response.data.message + "\n\n" + now);
          this.showModal = !this.showModal;
          console.log(error.response.data.message);
          console.log(body);
        }
      }
    },
    // pegar name e symbol do selecionado
    async toggleModal(id, nome, symbol) {
      this.showModal = !this.showModal;
      this.stock_name = nome;
      this.stock_symbol = symbol;
      this.id = id;
      console.log(id, nome, symbol);
    },
    async buscaBalances() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        try {
          let response = await axios.get(
            `http://localhost:8082/balances?email=${this.claims.email}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var busca of response.data) {
            busca.updated_on = busca.updated_on.split("T")[0];
            busca.created_on = busca.created_on.split("T")[0];
          }
          this.user = response.data;
          console.log("olha pra baixo");
          console.log(this.user);
        } catch (error) {
          this.user = `${error}`;
        }
      }
    },
  },
};
</script>

<style scoped>
/* COR DA TABELA */
#trust {
  background-color: white;
}
/* TAM DA FONTE DOS DADOS DE DENTRO DA TABELA */
td {
  font-size: 15px;
}
/* SEPARAR BUTTONS DO MODAL */
#buttonModal {
  margin: 0 15px;
}
#modal2 {
  font-weight: bold;
  font-size: 16px;
}

/* TAM FONTE DO MODAL */
h3 {
  font-size: 18px;
}


button:active {
  background-color: brown;
  transform: scale(0.9);
}
</style>
