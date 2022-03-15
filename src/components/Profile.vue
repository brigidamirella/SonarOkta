<template>
  <div id="profile" class="flex flex-col">
    <!---->
    <div id="profile" class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div
          class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
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
                  Data/hora
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
                {{ acao.updated_on }}
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

              <!-- <td class="whitespace-nowrap px-6 py-4">
                <span
                  class="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-green-800"
                >
                  Active
                </span>
              </td> -->
              <td class="whitespace-nowrap px-6 py-4">
                <div>
                  <button
                    class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    COMPRAR
                  </button>
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
                        <div class="relative p-6 flex-auto">
                          <p
                            class="my-4 text-blueGray-500 text-lg leading-relaxed"
                          >
                            Escolha suas ações
                          </p>
                        </div>
                        <!--footer-->
                        <div
                          class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
                        >
                          <button
                            id="buttonModal"
                            class="text-black-500 bg-transparent border border-solid border-blue-900 hover:bg-blue-700 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            v-on:click="toggleModal()"
                          >
                            Close
                          </button>
                          <button
                            id="buttonModal"
                            class="rounded bg-blue-900 py-2 px-4 font-bold text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="comprar"
                            v-on:click="toggleModal()"
                          >
                            SALVAR
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

  <div>
    <wallet></wallet>
  </div>

  <div>
    <orders></orders>
  </div>
</template>

<script>
// import SockJS from "sockjs-client";
// import Stomp from "webstomp-client";
import axios from "axios";
import Wallet from "./Wallet.vue";
import Orders from "./Orders.vue";

export default {
  components: { Wallet, Orders },
  data: function () {
    return {
      claims: [],
      stocks: [],
      posts: [],
      showModal: true,
      connection: null,
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
    async toggleModal() {
      this.showModal = !this.showModal;
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
          }
          this.stocks = response.data;
        } catch (error) {
          this.stocks = `${error}`;
        }
      }
    },
  },
  createPost() {
    axios
      .post("http://localhost:8082/orders/add/", this.posts)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  },

  WebSocket() {
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onmessage = function (event) {
      console.log(event);
    };

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };
  }
}


// send() {
//     console.log("Send message:" + this.send_message);
//     if (this.stompClient && this.stompClient.connected) {
//       const msg = { name: this.send_message };
//       console.log(JSON.stringify(msg));
//       this.stompClient.send("/app/hello", JSON.stringify(msg), {});
//     }
//   },
//   connect() {
//     this.socket = new SockJS("http://localhost:8081/gs-guide-websocket");
//     this.stompClient = Stomp.over(this.socket);
//     this.stompClient.connect(
//       {},
//       frame => {
//         this.connected = true;
//         console.log(frame);
//         this.stompClient.subscribe("/topic/greetings", tick => {
//           console.log(tick);
//           this.received_messages.push(JSON.parse(tick.body).content);
//         });
//       },
//       error => {
//         console.log(error);
//         this.connected = false;
//       }
//     );
//   },
//   disconnect() {
//     if (this.stompClient) {
//       this.stompClient.disconnect();
//     }
//     this.connected = false;
//   },
//   tickleConnection() {
//     this.connected ? this.disconnect() : this.connect();
//   },
//    mounted() {
//   // this.connect();
// }
</script>

<style scoped>
/* CONFIG DA TABELA */
#profile {
  background-color: rgb(255, 255, 255);
  width: 1060px;
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
  font-size: 14px;
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
</style>
