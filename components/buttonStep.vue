<template>
  <div>
    
    <div v-for="(step, index) in steps" :key="index">
      <add-step :index="index" @remove="removeStep"/>
    </div>
    <v-btn @click="addStep" class="mt-3 ml-10"
        color="primary"
        elevation="2"
        > + paso
    </v-btn>
  </div>
</template>

<script>
import addStep from '@/components/addStep.vue';

export default {
  components: {
    addStep,
  },
  data() {
    return {
      steps: [],
    };
  },
  methods: {
    addStep() {
      this.steps.push({});
    },
    removeStep(index) {
      this.steps.splice(index, 1);
    },
  },
};
</script>
