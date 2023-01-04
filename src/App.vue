<template>
  <div>
    <p>{{mensagem}}</p>
    <HeaderPrincipal />
    <modal-principal></modal-principal>

    <button @click="componenteAtivo = 'AulaPrincipal'">Principal</button>
    <button @click="componenteAtivo = 'AulaDownloads'">Download</button>

    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

  </div>
</template>

<script>
import HeaderPrincipal from "./components/HeaderPrincipal.vue"
import ModalPrincipal from "./components/Modal.vue"
import AulaDownloads from "./components/dynamic/AulaDownloads.vue"
import AulaPrincipal from "./components/dynamic/AulaPrincipal.vue"

export default {
  name: 'App',
  components: {
    HeaderPrincipal,
    ModalPrincipal,
    AulaDownloads, 
    AulaPrincipal
  },
  data() {
    return {
      mensagem: "Essa é uma mensagem",
      componenteAtivo: "AulaPrincipal"

    }
  }
}
</script>

<style>

</style>
