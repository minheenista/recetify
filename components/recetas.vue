<template>
    <v-card
    :loading="loading"
    class="mx-auto my-6"
    max-width="250"
  >
   
    <v-img
      cover
      height="100"
      src="https://source.unsplash.com/random/250×100/?food"
    ></v-img>

    <v-card-item>
      <v-card-title>Nombre </v-card-title>
      <v-card-subtitle>
        <span class="me-1">Autor</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          
        ></v-rating>

        <div class="text-grey ms-2">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-1">
      <v-chip-group v-model="selection">
        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>

        <v-chip>tag</v-chip>
      </v-chip-group>
    </div>
    </v-card-text>

   

    
  </v-card>
</template>

<script>

export default {
    name: "Recetas"

}
</script>

<style>

</style>