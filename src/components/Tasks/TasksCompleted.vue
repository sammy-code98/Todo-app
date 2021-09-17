<template>
<div>
<list-header bgColor="bg-green"> Completed</list-header>
     <q-list separator bordered  >
      <tasks v-for="(task, key) in tasksCompleted" :key="task.id" :task="task" :id="key"></tasks>
    
    </q-list>
</div>
 
</template>

<script>
export default {
    props:['tasksCompleted'],
     components:{
            tasks: require("components/Tasks/Task.vue").default,
                listHeader: require('components/Tasks/Modals/Shared/ListHeader').default


    }
    
    
}
</script>