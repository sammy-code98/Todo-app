<template>
  <q-input outlined class="q-mt-sm" :value="dueDate" label="Due Date">
    <template v-slot:append>
      <q-icon
        v-if="dueDate !== ''"
        name="close"
        @input="$emit('update:dueDate', $event)"
        @click="$emit('clear')"
        class="cursor-pointer"
      />

      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
export default {
  props: ["dueDate"]
};
</script>