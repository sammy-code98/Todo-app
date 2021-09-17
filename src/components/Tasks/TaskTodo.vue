<template>
  <div>
   <list-header
   bgColor=" bg-orange-4"
    >Todo</list-header>
    <q-list separator bordered >
      <tasks v-for="(task, key) in tasksTodo" :key="task.id" :task="task" :id="key"></tasks>
    </q-list>
  </div>
</template>
<script>
export default {
  props: ["tasksTodo"],
  components: {
    tasks: require("components/Tasks/Task.vue").default,
    listHeader: require('components/Tasks/Modals/Shared/ListHeader').default
  }
};
</script>
<style lang="scss" scoped>
</style>