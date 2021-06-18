<template>
  <ul>
    <li
      v-for="task in tasklist"
      :key="task.index">{{ task }}
    </li>
  </ul>
</template>

<script>
import eventbus from '@/eventbus'

export default {
  data() {
    return {
      tasklist: ['asdasdd', 'asdasdasd', 'asdasdasd']
    }
  },
  created() {
    eventbus.whenAddNewTask(task => {
      const duplicate = this.tasklist.find(txt => txt === task)

      if(duplicate) {
        console.log('this task is already registered!')
      } else {
        this.tasklist.push(task)
      }
    
    })
  }
}
</script>

<style>

</style>