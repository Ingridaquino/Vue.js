const vm = new Vue({
  el: "#app",
  data : {
    produtos: [],
    produto: false,
    carrinho: [],    
  },
  filters:{
    numeroPreco(valor){
      return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    }
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length) {
        this.carrinho.forEach(item => {
          total += item.preco;
        });
      }
      return total;
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
    },
    adicionarItem(){
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      console.log(carrinho)
    },
    removerItem(index){
      this.carrinho.splice(index, 1);
      console.log(carrinho.lenght)
    },
    checarLocalStorage(){
      if(window.localStorage.carrinho) {
        //parse para transformar string em array
        this.carrinho = JSON.parse(window.localStorage.carrinho)
      }
    }
  },
  watch: {
    //salvar no localStorage
    carrinho(){
      window.localStorage.carrinho = JSON.stringify(this.carrinho)
    }
  },
  created(){
    this.fetchProdutos(); //ativa o fetch assim que é criado a pagina
    this.checarLocalStorage();
  }
})
