<template>
  <div>
    <div class="header">
      <h1>Hello There!</h1>
      <div
        :class="['addTask', { active: showTaskForm }]"
        @click="showTaskForm = !showTaskForm"
      >
        <PlusSVG />
      </div>
    </div>
    <add-task-form :activeForm="showTaskForm" />
  </div>
</template>

<script>
import PlusSVG from "@/assets/svg/plus.svg";
import AddTaskForm from "@/components/AddTaskForm/Component.vue";

export default {
  components: {
    PlusSVG,
    AddTaskForm,
  },
  data() {
    return {
      showTaskForm: false,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
}
h1 {
  font-size: 20px;
  font-weight: 400;
  color: rgb(53, 53, 53);
}
.addTask {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #a8eb12;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #89c30d;
  }

  svg {
    transition: all 0.3s;
    width: 15px;
    height: 15px;
  }

  &.active {
    background-color: rgb(216, 0, 0);

    &:hover {
      background-color: rgb(182, 0, 0);
    }

    svg {
      transform: rotate(45deg);
      fill: #fff;
    }
  }
}
</style>
