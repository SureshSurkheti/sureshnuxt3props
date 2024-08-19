<template>
    <div>
      <h1>Parent Component 3</h1>
      <ChildComponent 
        :suresh="sureshdon" 
        :messi="sureshmessi" 
        :additionalPart3="suresh1" 
        :additionalPartMessi3="messi" 
        :flagFromPc3="flagFromPc30"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from '~/components/ChildComponent.vue';
  
  // Using ref to create reactive data
  const sureshdon = ref('suresh surkheti');
  const sureshmessi = ref('i am 26 years old');
  const suresh1 = ref('i am from nepal');
  const messi = ref('i live in japan now');
  const flagFromPc30 = ref(true);
  </script>