<template>
  <q-page class="q-pa-md">
    <no-task v-if="!Object.keys(tasksTodo).length" class="q-mb-md"  />

    <task-todo :tasksTodo="tasksTodo" class="q-mb-md"  v-if="Object.keys(tasksTodo).length"/>
      <task-completed :tasksCompleted="tasksCompleted" v-if="Object.keys(tasksCompleted).length"/>
    <!-- <q-list separator bordered  v-if="Object.keys(tasksTodo).length">
      <tasks v-for="(task, key) in tasksTodo" :key="task.id" :task="task" :id="key"></tasks>
      <q-item
        v-for="(task, key) in tasks"
        :key="task.id"
        clickable
        :class="!task.completed ? 'bg-orange-1': 'bg-green-1'"
        @click="task.completed = !task.completed"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="colunm justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="colunm">
              <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
              <q-item-label class="row justify-end" caption>
                <small>{{task.dueTime}}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>-->
    <!-- </q-list> --> 

  
   
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
    // tasks() {
    //   return this.$store.getters("tasks/tasks");

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

  // remove the task array here and the get data from store

  // data() {

  // return {
  //   tasks: [
  //     {
  //       id: 1,
  //       name: "study for 3 hours",
  //       completed: false,
  //       dueDate: "2020/05/10",
  //       dueTime: "22:00"
  //     },
  //     {
  //       id: 2,
  //       name: "code for 6 hours",
  //       completed: false,
  //       dueDate: "2020/05/10",
  //       dueTime: "22:00"
  //     },
  //     {
  //       id: 3,
  //       name: "see a movie",
  //       completed: false,
  //       dueDate: "2020/05/10",
  //       dueTime: "22:00"
  //     },
  //     {
  //       id: 4,
  //       name: "have an amazing sleep",
  //       completed: false,
  //       dueDate: "2020/05/10",
  //       dueTime: "22:00"
  //     }
  //   ]
  // };
  // }
};
</script>
