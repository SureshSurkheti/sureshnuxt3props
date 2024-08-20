<template>
    <div>
      <h3>Child Component 1</h3>
      <input type="text" v-model="messi" placeholder="Enter data for Parent" /><br><br>
      <button @click="sendDataToParent">Send Data to Parent</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const messi = ref('');
  
  // Define the emit method
  const emit = defineEmits(['sendMessi']);
  
  // Function to send data to parent
  const sendDataToParent = () => {
    emit('sendMessi', messi.value);
  };
  </script>
  