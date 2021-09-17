<template>
  <q-page class="q-pa-md">
    <no-task v-if="!Object.keys(tasksTodo).length" class="q-mb-md"  />

    <task-todo :tasksTodo="tasksTodo" class="q-mb-md"  v-if="Object.keys(tasksTodo).length"/>
      <task-completed :tasksCompleted="tasksCompleted" v-if="Object.keys(tasksCompleted).length"/>
     
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn  @click="showAddTask = !showAddTask" round color="primary" size="24px" icon="add" />
    </div>
<!-- dialog -->
       <q-dialog v-model="showAddTask">
      <add-task @close='showAddTask = false'></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {

  data(){
    return{
      showAddTask:false
    }
  },
  computed: {
   

    // using map getters
    // ...mapGetters("tasks", ["tasks"])
    ...mapGetters("tasks", ['tasksTodo', 'tasksCompleted'] )
  },
  mounted(){
this.$root.$on('showAddTask', ()=>{
  this.showAddTask = true
})
  },
  

  components: {
    addTask: require('components/Tasks/Modals/AddTask').default,
    taskTodo: require('components/Tasks/TaskTodo').default,
    taskCompleted:require('components/Tasks/TasksCompleted').default,
    noTask: require('components/Tasks/NoTask').default
  }

  
};
</script>
