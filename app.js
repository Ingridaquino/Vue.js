const vm = new Vue({
  el: "#app",
  data : {
    produtos: []
  },
  methods: {
    fetchProdutos(){
      fetch("./api/produtos.json")
        .then(resp => resp.json())
        .then(resp => {
          this.produtos = resp;
          console.log('fetch')
        })
    }
  },
  created(){
    this.fetchProdutos(); //ativa o fetch assim que é criado a pagina
  }
})
