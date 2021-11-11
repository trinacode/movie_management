<template>
  <q-page class="row justify-center justify-evenly">
    <Movies />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Movies from 'components/Movies.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {Movies },
  setup() {

    return { };
  }
});
</script>
