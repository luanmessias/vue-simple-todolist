<template>
  <ul>
    <li
      v-for="task in tasklist"
      :key="task.index">
        <div class="taskDesc">{{ task }}</div>
        <div class="buttons">
          <div class="svgButton DelSVG"><DelSVG /></div>
          <div class="svgButton DoneSVG"><DoneSVG /></div>
        </div>
    </li>
  </ul>
</template>

<script>
import DelSVG from '@/assets/svg/del.svg'
import DoneSVG from '@/assets/svg/done.svg'
import eventbus from '@/eventbus'

export default {
  components: {
    DelSVG,
    DoneSVG
  },
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

<style scoped>
  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  li { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #CCC;
    padding: 5px;
    border-radius: 5px ;
  }

  li + li {
    margin-top: 10px;
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
    transition: all .3s;
  }

  .svgButton + .svgButton {
    margin-left: 10px;
  }


  .svgButton svg {
    max-width: 15px;
    max-height: 15px;
  }

  .DelSVG:hover {
    background-color: rgb(216, 0, 0);
    border-color: rgb(216, 0, 0);
  }

  .DelSVG:hover svg path {
    fill: #FFF
  }

  .DoneSVG:hover {
    background-color: #89c30d;
    border-color: #89c30d;
  }

  .DoneSVG:hover svg path {
    fill: #FFF
  }

  .svgButton svg path {
      fill: #CCC
    }



</style>