import { defineStore } from 'pinia';

export const usePlanStore = defineStore('planStore', {
  state: () => ({
    selectedPlan: null,
  }),
  actions: {
    setSelectedPlan(plan) {
      this.selectedPlan = plan;
      this.saveState();
    },
    saveState() {
      localStorage.setItem('planStore', JSON.stringify(this.$state));
    },
    restoreState() {
      const storedState = localStorage.getItem('planStore');
      if (storedState) {
        this.$patch(JSON.parse(storedState)); 
      }
    },
  },
});

const planStore = usePlanStore();
planStore.restoreState(); 
