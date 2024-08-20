<template>
    <div>
      <h3>Child Component 2</h3>
      <input type="text" v-model="suresh" placeholder="Enter data for Parent" /><br><br>
      <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const suresh = ref('');
  
  // Define the emit method
  const emit = defineEmits(['sendSuresh']);
  
  // Function to send data to parent
  const sendDataToParent = () => {
    emit('sendSuresh', suresh.value);
  };
  </script>
  