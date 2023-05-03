<template>
    <div>

    
    <v-row>
        <v-col
        cols="12"
        sm="7"
        >
        <v-text-field
        label="Paso"
        required
        
        ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        sm="4"
        >
        <v-file-input
        color=""
        counter
        
        
        placeholder=""
        prepend-icon="mdi-camera"
        
        >
        <template v-slot:selection="{ index, text }">
            <v-chip
            v-if="index < 2"
            color=""
            dark
            label
            small
            >
            {{ text }}
            </v-chip>

        </template>
        </v-file-input>
    </v-col>
    <v-col
        cols="12"
        sm="1"
    > <v-btn @click="removeStep"
      class="mx-2"
      fab
      dark
      small
      color="error"
    >
      <v-icon>
        mdi-trash-can
      </v-icon>
    </v-btn>
    
    </v-col>
    
        
    </v-row>
    
    </div>

</template>

<script>
export default {
    name: "addStep",
  data() {
    return {
      text: '',
      file: null,
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeStep() {
      this.$emit('remove', this.index);
    },
  },
 /*  rules: = {
    pasos: {
      required: (value: string) => !!value || "No puede haber pasos vacios.",
      min: (v: string) => v.length >= 8 || "Mínimo 8 caracteres",
      emailMatch: () => `The email and password you entered don't match`,
      regex: (v: string): string | boolean =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/.test(v) ||
      "La contraseña debe contener al menos un número, una mayúscula y un caracter especial. Vuelve a intentarlo. Minimo 8 caracteres",
    },
  } */
};

</script>
