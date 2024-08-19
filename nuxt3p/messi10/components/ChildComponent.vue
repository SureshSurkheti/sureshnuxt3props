<template>
    <div>
      <table>
        <tr v-if="part1 && flagFromPc1">
          <td><label for="part1">Part 1:</label></td>
          <td><input type="text" id="part1" :value="part1" @input="updatePart1($event.target.value)" /></td>
        </tr>
        <tr v-if="part2">
          <td><label for="part2">Part 2:</label></td>
          <td><input type="text" id="part2" :value="part2" @input="updatePart2($event.target.value)" /></td>
        </tr>
        <!-- Conditionally render or control the behavior of additionalPart1 based on the flag -->
        <tr v-if="(flagFromPc3 && suresh) || (flagFromPC2 && additionalPart5) || (flagFromPc1 && additionalPart1)">
        <td><label for="additionalPart1">Additional Part 1:</label></td>
        <td>
          <input 
            type="text" 
            id="additionalPart1" 
            :value="additionalPart1" 
            @input="updateAdditionalPart1($event.target.value)" 
          />
            <!-- Disable input if flagFromPC2 is false -->
          </td>
        </tr>
        <tr v-if="additionalPart2">
          <td><label for="additionalPart2">Additional Part 2:</label></td>
          <td><input type="text" id="additionalPart2" :value="additionalPart2" @input="updateAdditionalPart2($event.target.value)" /></td>
        </tr>
        <tr>
          <td><label for="flagFromPc1">Flag from Parent Component 2:</label></td>
        </tr>
      </table>
  
      <!-- Conditionally render content based on the flag -->
      <p v-if="flagFromPC2 || !flagFromPc1 || flagFromPc3">This content is displayed because the flag is true.</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  // Define props to receive data and the flag from the parent component
  const props = defineProps({
    part1: String,
    part2: String,
    additionalPart1: String,
    additionalPart2: String,
    flagFromPC2: Boolean,
    flagFromPc1: Boolean,
    flagFromPc3: Boolean,
    suresh: String,
    messi: String,
    additionalPart3: String,
    additionalPartMessi3:String,
    part3:String,
    part4:String,
    additionalPart5:String,
    additionalPart3:String,
    flagFromPC2:String
  });
  
  // Emit events to update the parent component
  const emit = defineEmits(['update:part1', 'update:part2', 'update:additionalPart1', 'update:additionalPart2']);
  
  const updatePart1 = (value) => emit('update:part1', value);
  const updatePart2 = (value) => emit('update:part2', value);
  const updateAdditionalPart1 = (value) => emit('update:additionalPart1', value);
  const updateAdditionalPart2 = (value) => emit('update:additionalPart2', value);
  </script>
  