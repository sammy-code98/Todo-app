<template>
  <q-input
    autofocus
    outlined
    :value="name"
    @input="$emit('update:name', $event)"
    label="Task name"
    :rules="[val => !!val || 'Task name is required']"
    ref="name"
  >
    <template v-slot:append>
      <q-icon v-if="name !== ''" name="close" @click="$emit('update:name', ' ') " class="cursor-pointer" />
    </template>
  </q-input>
</template>
<script>
export default {
  props: ["name"]
};
</script>