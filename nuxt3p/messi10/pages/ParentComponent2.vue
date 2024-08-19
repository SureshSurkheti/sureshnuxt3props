<template>
    <div>
      <h1>Parent Component 2</h1>
      <ChildComponent 
        :part3="data3" 
        :part4="data4" 
        :additionalPart5="additionalData2" 
        :additionalPart3="additionalData3" 
        :flagFromPC2="isFromParentComponent2" 
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from '~/components/ChildComponent.vue';
  
  // Using ref to create reactive data
  const data3 = ref('Data from Parent 2 - Part 1');
  const data4 = ref('Data from Parent 2 - Part 2');
  const additionalData3 = ref('Additional Data from Parent 2 - Part 1');
  const additionalData2 = ref('Additional Data from Parent 2 - Part 2');
  
  // Define a flag to indicate that the data is from ParentComponent2
  const isFromParentComponent2 = ref(true);
  </script>
  