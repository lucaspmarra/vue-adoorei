import { defineStore } from 'pinia';
import { onUnmounted } from 'vue';

export const usePlanStore = defineStore('planStore', {
  state: () => ({
    selectedPlan: null,
  }),
  actions: {
    setSelectedPlan (plan) {
      this.selectedPlan = plan;
      this.saveState();
    },
    saveState () {
      localStorage.setItem('planStore', JSON.stringify(this.$state));
    },
    restoreState () {
      const storedState = localStorage.getItem('planStore');
      if (storedState) {
        this.$patch(JSON.parse(storedState));
      }
    },
    clearState () {
      this.selectedPlan = null;
      localStorage.removeItem('planStore');
    },
    setupAutoClear () {
      const clearStateOnUnload = () => {
        this.clearState();
      };

      window.addEventListener('unload', clearStateOnUnload);

      onUnmounted(() => {
        window.removeEventListener('beforeunload', clearStateOnUnload);
        window.removeEventListener('unload', clearStateOnUnload);
      });
    },
  },
});
