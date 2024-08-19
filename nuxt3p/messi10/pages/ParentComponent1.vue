<template>
    <div>
      <h1>Parent Component 1</h1>
      <ChildComponent 
        :part1="data3" 
        :part2="data4" 
        :additionalPart1="additionalData1" 
        :additionalPart2="additionalData2" 
        :flagFromPc1="flagFromPc1"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from '~/components/ChildComponent.vue';
  
  // Using ref to create reactive data
  const data3 = ref('Data from Parent 2 - Part 1');
  const data4 = ref('Data from Parent 2 - Part 2');
  const additionalData1 = ref('Additional Data from Parent 2 - Part 1');
  const additionalData2 = ref('Additional Data from Parent 2 - Part 2');
  const flagFromPc1 = ref(true);
  </script>
  