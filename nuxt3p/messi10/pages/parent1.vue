<template>
    <div>
      <h2>Parent Component</h2>
      <p>Data from Child 1: {{ dataFromChild1 }}</p>
      <p>Data from Child 2: {{ japan }}</p>
  
      <!-- Include child components -->
      <child1 @sendMessi="updateDataFromChild1" /><br>
      <child2 @sendSuresh="updateDataFromChild2" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define reactive data for storing child component data
  const dataFromChild1 = ref('');
  const japan = ref('');
  
  // Methods to update data when events are emitted from child components
  const updateDataFromChild1 = (data) => {
    dataFromChild1.value = data;
    console.log('Received data from Child 1:', dataFromChild1);
  };
  
  const updateDataFromChild2 = (data) => {
    japan.value = data;
    console.log('Received data from Child 2:', dataFromChild1);
  };
  </script>
  