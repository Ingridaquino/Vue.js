<template>
  <nav>
    <ul>
      <li @click="abaAtivo = 'EmpresaVue'">Empresa</li>
      <li @click="abaAtivo = 'FormularioVue'">Formulario</li>
      <li @click="abaAtivo = 'ServicosEmpresa'">ServicosEmpresa</li>
    </ul>

    <keep-alive>
      <component :is="abaAtivo"></component>
    </keep-alive>
  </nav>
</template>

<script>

import FormularioVue from "./exercicio-dynamic/Formulario.vue"
import ServicosEmpresa from "./exercicio-dynamic/ServicosEmpresa.vue"

export default {
    name: "HeaderPrincipal",
    components: {
      EmpresaVue: () =>  import("./exercicio-dynamic/Empresa.vue"),
      FormularioVue,
      ServicosEmpresa
    },

    data() {
      return {
        abaAtivo: "Empresa"
      }
    }
 }
</script>

<style>

</style>