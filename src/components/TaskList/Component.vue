<template>
  <ul>
    <li v-for="task in tasklist" :key="task.index">
      <div :class="['taskItem', { done: task.done }]">
        <div class="buttons">
          <div
            v-if="task.done"
            class="svgButton DelSVG"
            @click="toggleTask(task.description)"
          >
            <DelSVG />
          </div>
          <div
            v-if="!task.done"
            class="svgButton DoneSVG"
            @click="toggleTask(task.description)"
          >
            <DoneSVG />
          </div>
        </div>

        <div class="taskDesc">
          {{ task.description }}
        </div>
      </div>
      <div class="deleteTask" @click="deleteTask(task.description)">
        <BinSVG />
      </div>
    </li>
  </ul>
</template>

<script>
import DelSVG from "@/assets/svg/del.svg";
import DoneSVG from "@/assets/svg/done.svg";
import BinSVG from "@/assets/svg/bin.svg";
import eventbus from "@/eventbus";

export default {
  components: {
    DelSVG,
    DoneSVG,
    BinSVG,
  },
  data() {
    return {
      tasklist: [],
    };
  },
  watch: {
    tasklist: {
      deep: true,
      handler() {
        eventbus.setTaskList(this.tasklist);
      },
    },
  },
  methods: {
    toggleTask(taskName) {
      const task = this.tasklist.find(
        ({ description }) => description === taskName
      );
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(taskDesk) {
      const filteredTaskList = this.tasklist.filter(
        ({ description }) => description !== taskDesk
      );

      this.tasklist = filteredTaskList;
    },
  },
  created() {
    eventbus.whenAddNewTask((task) => {
      const duplicate = this.tasklist.find(
        ({ description }) => description === task
      );

      const data = {
        description: task,
        done: false,
      };

      if (duplicate) {
        eventbus.callToastMsg({
          type: "error",
          msg: "this task is already registered!",
        });
      } else {
        this.tasklist.push(data);
        eventbus.callToastMsg({
          type: "success",
          msg: "task added successfully!",
        });
      }
    });
  },
};
</script>

<style scoped lang="scss">
ul {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}

li {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  box-sizing: border-box;
}

li + li {
  margin-top: 10px;
}

.taskItem {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-right-width: 0;
  padding: 5px;
  transition: all 0.3s;
  width: auto;
  height: 40px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &.done {
    background-color: #aaca64;
  }
}

.deleteTask {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 25px;
  background-color: rgb(216, 0, 0);
  margin-left: auto;
  height: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  svg {
    opacity: 0;
    fill: #fff;
    max-width: 20px;
    max-height: 20px;
    transition: all 0.3s;
  }

  &:hover {
    width: 50px;
    svg {
      opacity: 1;
    }
  }
}

.taskDesc {
  margin-left: 15px;
}

.buttons {
  display: flex;
  flex-direction: row;
}

.svgButton {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgb(226, 226, 226);
  transition: all 0.3s;

  & + .svgButton {
    margin-left: 10px;
  }

  svg {
    max-width: 15px;
    max-height: 15px;

    path {
      fill: #ccc;
    }
  }
}

.DelSVG {
  background-color: #fff;

  svg {
    path {
      fill: rgb(105, 105, 105);
    }
  }

  &:hover {
    background-color: rgb(216, 0, 0);
    border-color: rgb(216, 0, 0);

    svg {
      path {
        fill: #fff;
      }
    }
  }
}

.DoneSVG {
  &:hover {
    background-color: #89c30d;
    border-color: #89c30d;

    svg {
      path {
        fill: #fff;
      }
    }
  }
}
</style>
