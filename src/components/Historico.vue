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

  <div id="historico" class="mx-auto mb-12 mt-24 w-full px-4 xl:mb-0 xl:w-8/12">
    <div
      class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
      style="height: 818px"
    >
      <div class="mb-0 rounded-t border-0 px-4 py-3">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-1 flex-grow px-4">
            <h3 class="text-base font-semibold text-blue-900">
              HISTÓRICO DE ORDENS
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
                SYMBOL NAME
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
                PREÇO
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                DATA
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                STATUS
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                TIPO
              </th>
            </tr>
          </thead>

          <tbody v-for="listar in id_user" :key="listar">
            <tr>
              <td
                id="symbol"
                class="text-blueGray-700 whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs"
              >
                {{ listar.stock_name }}
              </td>
              <td
                id="symbol"
                class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
              >
                {{ listar.stock_symbol }}
              </td>

              <td
                class="align-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-xs"
              >
                {{ listar.volume }}
              </td>
              <td
                class="align-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-xs"
              >
               <strong class="fas fa-arrow-up mr-4 text-blue-500"></strong>
                {{ listar.price }}
              </td>
              <td
                class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
              >
                {{ listar.updated_on }}
              </td>
              <td
                class="align-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-xs"
              >
                {{ listar.status }}
              </td>
              <td
                class="align-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-xs"
              >
                {{ listar.type }}
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
      id_user: 0,
    };
  },
  created() {
    this.buscaOrders();
  },
  methods: {
    async buscaOrders() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        try {
          let response = await axios.get(
            // "http://localhost:8082/orders/listar",
             `http://localhost:8082/orders?email=${this.claims.email}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var busca of response.data) {
            busca.updated_on = busca.updated_on.split("T")[0];
            busca.created_on = busca.created_on.split("T")[0];
          }
          this.id_user = response.data;
          console.log("olha pra baixo");
          console.log(this.id_user);
        } catch (error) {
          this.id_user = `${error}`;
        }
      }
    },
  },
};
</script>

<style scoped>
/* STOCK SYMBOL E STOCK NAME EM NEGRITO */
#symbol {
  font-weight: bold;
}
/* CONFIG DA TABELA */
#historico {
  background-color: white;
  width: 1060px;
  margin-top: 1px;
  margin-left: 15px;
  height: 818px;
}
/* TAM DA FONTE DOS DADOS DE DENTRO DA TABELA */
td {
  font-size: 15px;
}
/* TAM DA FONTE DOS DADOS DO MENU DA TABELA */
th {
  font-size: 14px;
  margin: 1px;
}
/* TITULO */
h3 {
  font-size: 18px;
  margin-left: -12px;
}
</style>
