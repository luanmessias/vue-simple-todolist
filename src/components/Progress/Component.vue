<template>
  <div class="progress">
    <div class="progress__card">
      <vue-ellipse-progress
        :progress="percentDone"
        :size="60"
        color="#89c30d"
      />
      <div class="progress__info">
        <strong>Your Progress</strong>
        <span>{{ tasksDone }} /{{ totalTasks }} tasks done</span>
      </div>
    </div>
  </div>
</template>

<script>
import eventbus from "@/eventbus";
export default {
  data() {
    return {
      totalTasks: 0,
      tasksDone: 0,
      tasksUndone: 0,
      percentDone: 0,
    };
  },
  created() {
    eventbus.whenSetTaskList((tasklist) => {
      this.totalTasks = tasklist.length | 0;
      this.tasksDone = tasklist.filter(({ done }) => done === true).length | 0;
      this.tasksUndone =
        tasklist.filter(({ done }) => done === false).length | 0;
      this.percentDone =
        Math.round((this.tasksDone / this.totalTasks) * 100, 0) | 0;
    });
  },
};
</script>

<style scoped lang="scss">
.progress {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  &__card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;

    strong {
      display: block;
      margin-bottom: 3px;
    }

    span {
      font-weight: 200;
    }
  }
}
</style>
