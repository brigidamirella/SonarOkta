


//  methods: {
//      async comprar() {
//     console.log("jsonPost")
//     let jsonPost = {
//       id_user: this.id_user,
//       id_stock: this.id,
//       email: this.email,
//       volume: this.volume,
//       price: this.price,
//       type: 1,
//       stock_name: this.stock_name,
//       stock_symbol: this.stock_symbol,
//     };
//     this.PostCompra(jsonPost);
//     console.log(jsonPost);
//   },
//   async PostCompra(jsonPost) {
//     if (this.$root.authenticated) {
//       console.log(this.claims);
//       this.claims = await this.$auth.getUser();
//       let accessToken = this.$auth.getAccessToken();
//       console.log(`Authorization: Bearer ${accessToken}`);

//       let response = await axios.post(
//         `http://localhost:8082/orders?email=${this.claims.email}`,
//         jsonPost,
//         {
//           headers: { Authorization: "Bearer " + accessToken },
//         }
//       );
//       console.log(response);
//     }
//   },
//     async toggleModal(id, nome, symbol) {
//       this.showModal = !this.showModal;
//       this.stock_name = nome;
//       this.stock_symbol = symbol;
//       this.id = id;
//       console.log(id, nome, symbol);
//     },

//     async setup() {
//       if (this.$root.authenticated) {
//         console.log(this.claims);
//         this.claims = await this.$auth.getUser();
//         let accessToken = this.$auth.getAccessToken();
//         console.log(`Authorization: Bearer ${accessToken}`);
//         try {
//           let response = await axios.get("http://localhost:8083/stocks/teste", {
//             headers: { Authorization: "Bearer " + accessToken },
//           });
//           console.log(response.data);
//           for (var acao of response.data) {
//             acao.updated_on = acao.updated_on.split("T")[0];
//           }
//           this.stocks = response.data;
//         } catch (error) {
//           this.stocks = `${error}`;
//         }
//       }
//     },
//   },
