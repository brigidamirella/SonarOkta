<template>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <div id="profile" class="flex flex-col">
    <!---->

    <div id="profile" class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div
          class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <caption></caption>
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  Stock symbol
                </th>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  Stock name
                </th>

                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  askmin
                </th>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  askmax
                </th>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  bidmin
                </th>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  bidmax
                </th>
                <th
                  scope="col"
                  class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                >
                  Data
                </th>
              </tr>
            </thead>
            <tbody
              class="divide-y divide-gray-200 bg-white"
              v-for="acao in stocks"
              :key="acao"
            >
              <td
                id="symbol"
                class="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
              >
                {{ acao.stock_name }}
              </td>
              <td
                id="symbol"
                class="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
              >
                {{ acao.stock_symbol }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {{ acao.ask_min }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {{ acao.ask_max }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {{ acao.bid_min }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {{ acao.bid_max }}
              </td>
              
              <td
                id="data"
                class="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
              >
                {{ acao.updated_on }}
              </td>

              <td>
                <div>
                  <button
                    class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    type="button"
                    @click="
                      toggleModal(acao.id, acao.stock_name, acao.stock_symbol)
                    "
                  >
                    COMPRAR
                  </button>
                </div>
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <div>
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
                          <h3 class="text-3xl font-semibold">COMPRAR AÇÕES</h3>
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
                            <tr id="modal" class="text-gray-900">
                              Name:
                              {{
                                stock_name
                              }}
                            </tr>
                            <tr id="modal" class="text-gray-900">
                              Symbol:
                              {{
                                stock_symbol
                              }}
                            </tr>
                            <!-- <tr id="modal" class="text-gray-900">
                              id:
                              {{
                                id
                              }}
                            </tr> -->
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
                              Price: R$
                              <input
                                v-model="price"
                                placeholder=" price"
                                type="text"
                                min="0.00"
                                max="10000.00"
                                step="0.01"
                                style="width: 120px; margin-left: 5px"
                                name="number"
                                pattern="([0-9]{1,3}).([0-9]{1,3})"
                              />

                              <label for=""></label>
                            </tr>
                          </thead>
                        </div>
                        <!--footerc-->
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
                            @click="comprar"
                            id="buttonModal"
                            class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            COMPRAR
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      claims: [],
      stocks: [],
      showModal: true,
      stock_name: "",
      stock_symbol: "",
      id: "",
      volume: "",
      price: "",
      id_user: "",
      email: "",
      // received_messages: [],
      // send_message: null,
      // connected: false
    };
  },
  created() {
    this.setup();
    this.toggleModal();
  },
  methods: {
    async comprar() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        const body = {
          id_user: 4,
          id_stock: this.id,
          email: this.claims.email,
          volume: this.volume,
          price: this.price,
          type: 1,
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
    async toggleModal(id, nome, symbol) {
      this.showModal = !this.showModal;
      this.stock_name = nome;
      this.stock_symbol = symbol;
      this.id = id;
      console.log(id, nome, symbol);
    },
    async setup() {
      if (this.$root.authenticated) {
        console.log(this.claims);
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        console.log(`Authorization: Bearer ${accessToken}`);
        try {
          let response = await axios.get("http://localhost:8083/stocks/teste", {
            headers: { Authorization: "Bearer " + accessToken },
          });
          console.log(response.data);
          for (var acao of response.data) {
            acao.updated_on = acao.updated_on.split("T")[0];
            acao.ask_min = acao.ask_min.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            acao.ask_max = acao.ask_max.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            acao.bid_min = acao.bid_min.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            acao.bid_max = acao.bid_max.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
          }
          this.stocks = response.data;
        } catch (error) {
          this.stocks = `${error}`;
        }
      }
    },
  },
};
</script>

<style scoped>
/* CONFIG DA TABELA */
#profile {
  background-color: rgb(255, 255, 255);
  width: 1110px;
  margin-top: 1px;
  margin-left: 15px;
  height: 818px;
}
/* TAM DA FONTE DOS DADOS DA 1 LINHA DA TABELA */
th {
  font-size: 14px;
  margin: 1px;
}
/* TAM DA FONTE DOS DADOS DE DENTRO DA TABELA */
td {
  font-size: 15px;
  margin: 1px;
}
/* STOCK SYMBOL E STOCK NAME EM NEGRITO */
#symbol {
  font-weight: bold;
}
/* SEPARAR BUTTONS DO MODAL */
#buttonModal {
  margin: 0 15px;
}

/* TAM FONTE DO MODAL */
h3 {
  font-size: 18px;
}
/* dados da modal em negrito */
#modal {
  font-weight: bold;
  font-size: 16px;
}
#data {
  font-weight: bold;
  font-size: 15px;
}
/* animação ao clicar nos botões */
button:active {
  background-color: brown;
  transform: scale(0.9);
}
</style>
