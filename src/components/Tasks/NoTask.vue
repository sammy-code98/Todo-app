<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    <span class="text-bold text-h6">No Tasks to do for today</span>
    <template v-slot:action>
      <q-btn 
      @click="$root.$emit('showAddTask')"
      outline no-caps color="primary" label="Add Task" />
    </template>
  </q-banner>
</template>
<script>
export default {};
</script>