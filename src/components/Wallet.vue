<template>
  <div id="wallet" class="mx-auto mb-12 mt-24 w-full px-4 xl:mb-0 xl:w-8/12">
    <div
      class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
    >
      <div class="mb-0 rounded-t border-0 px-4 py-3">
        <div class="flex flex-wrap items-center">
          <div
            class="relative w-full max-w-full flex-1 flex-grow px-4"
            v-for="carteira in users"
            :key="carteira"
          >
            <h3 class="text-blueGray-700 text-base font-semibold">CARTEIRA</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-wallet"
              width="150"
              height="50"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
              ></path>
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path>
            </svg>
            <td class="whitespace-nowrap py-4">
              <span class="font-semibold" id="carteira">
                {{ carteira.dollar_balance }}
              </span>
            </td>
          </div>
        </div>
      </div>

      <div class="block w-full overflow-x-auto">
        <table class="w-full border-collapse items-center bg-transparent">
          <thead>
            <tr>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                USUARIO
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                SALDO
              </th>
              <th
                class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody v-for="carteira in users" :key="carteira">
            <tr v-for="carteira in users" :key="carteira">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div id="font" class="ml-4">
                    <div id="font" class="text-sm font-medium text-gray-900">
                      {{ carteira.username }}
                    </div>
                    <div id="font" class="text-sm text-gray-500">
                      {{ carteira.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td
                id="font"
                class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs"
              >
                {{ carteira.dollar_balance }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <span
                  id="font"
                  class="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-black-800"
                >
                  Active
                </span>
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
      users: [],
      stocks: [],
    };
  },
  created() {
    this.carteira();
    this.buscaDollareEmail();
  },
  methods: {
    async buscaDollareEmail() {
      this.claims = await this.$auth.getUser();
      let accessToken = this.$auth.getAccessToken();
      let response = await axios.get(
        `http://localhost:8082/users?email=${this.claims.email}`,
        { headers: { Authorization: "Bearer " + accessToken } }
      );
      console.log(response);
    },
    async carteira() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        console.log(`Authorization: Bearer ${accessToken}`);
        try {
          let response = await axios.get(
            `http://localhost:8082/users?email=${this.claims.email}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          console.log(response.data);
          for (var carteira of response.data) {
            carteira.updated_on = carteira.updated_on.split("T")[0];
            carteira.created_on = carteira.created_on.split("T")[0];
            carteira.dollar_balance = carteira.dollar_balance.toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            );
            // CASO QUEIRA COLOCAR EM DOLLAR:

            // carteira.dollar_balance = carteira.dollar_balance.toLocaleString('pt-br', {
            // style: 'currency', currency: 'USD'
            // });
          }
          this.users = response.data;
        } catch (error) {
          this.users = `${error}`;
        }
      }
    },
  },
};
</script>

<style scoped>
/* Config da tabela */
#wallet {
  width: 800px;
  margin-top: -820px;
  margin-left: 1093px;
}

.inline-flex {
  display: inline-flex;
}

/* Tam da fonte do dollar balance */
#carteira {
  font-size: 30px;
}
/* tamanho da fonte das informações da carteira, nome email status */
#font {
  font-size: 16px;
}
/* Tam do Icon ds carteira */
svg {
  margin-left: 600px;
  margin-top: -20px;
}
</style>
