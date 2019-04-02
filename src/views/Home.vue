<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{name}}</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { State, Getter, Mutation, Action } from 'vuex-class'


@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @State name!: string
}
</script>
