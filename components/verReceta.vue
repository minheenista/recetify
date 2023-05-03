<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title> <h1> HOLA </h1>
<!--         {{ recipe.title }}
 -->      </v-card-title>
      <v-card-text>
        <!-- {{ recipe.description }} -->
      </v-card-text>
      <v-card-actions>
        <v-btn @click="dialog = false" color="primary">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
