const vm = new Vue({
  el: "#app",
  data : {
    produtos: [],
    produto: true,
  },
  filters:{
    numeroPreco(valor){
      return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    }
  },
  methods: {
    fetchProdutos(){
      fetch("./api/produtos.json")
        .then(resp => resp.json())
        .then(resp => {
          this.produtos = resp;
          console.log('fetch')
        })
    },
    fetchProduto(id){
      fetch(`./api/produtos/${id}/dados.json`)
        .then(resp => resp.json())
        .then(resp => {
          this.produto = resp;
        })
    },
      abrirModal(id){
        this.fetchProduto(id);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      },
    fecharModal({target, currentTarget}){
      if(target === currentTarget)
      this.produto = false;
    }
  },
  created(){
    this.fetchProdutos(); //ativa o fetch assim que é criado a pagina
  }
})
