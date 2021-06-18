import Vue from 'vue'
export default new Vue({
  methods: {
    addTaskToTaskList(task) {
      this.$emit('taskListIsChanged', task)
    },
    whenAddNewTask(callback) {
      this.$on('taskListIsChanged', callback)
    },
  }
})