<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>{{myName}}</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { mapState } from 'vuex'
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  get myName(): string {
    return this.$store.state.name
  }
}
</script>
