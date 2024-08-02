// src/store/useDataStore.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useDataStore = defineStore('useDataStore', ()=>{
  
    
    const test = ref('0'
   );
    return {
        
        test
        
}
});