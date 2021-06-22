import Vue from "vue";
export default new Vue({
  methods: {
    addTaskToTaskList(task) {
      this.$emit("taskListIsChanged", task);
    },
    whenAddNewTask(callback) {
      this.$on("taskListIsChanged", callback);
    },

    setTaskList(tasklist) {
      this.$emit("setTaskList", tasklist);
    },
    whenSetTaskList(callback) {
      this.$on("setTaskList", callback);
    },
  },
});
