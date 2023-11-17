<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>สบ.3</h1>
      <v-btn
        rounded
        size="large"
        color="primary"
        variant="outlined"
        @click="printPDF"
      >
        Test
      </v-btn>
    </v-responsive>
  </v-container>
</template>

<script>
import print from '@/print/sb3'

export default {
  methods: {
    printPDF(){
      print.exportSb3();
    }
  }
}
</script>
