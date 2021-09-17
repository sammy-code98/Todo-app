<template>
  <div>
    <q-card>
      <modal-header>Add Todo</modal-header>
      <!-- to be able to submit the inputs make sure u surround the input elements in the form tag  -->

      <!-- the action component inclusive -->
      <form @submit.prevent="submitForm">
        <q-card-section>
          <modal-task-name :name.sync="tasksToSubmit.name"  ref="modalTaskName"/>
          <!-- date picker -->
          <modal-due-date :dueDate.sync="tasksToSubmit.dueDate" @clear="clearDueDate" />
          <!-- time picker -->
          <modal-due-time  v-if="tasksToSubmit.dueDate" :dueTime.sync="tasksToSubmit.dueTime" />
         
        </q-card-section>
       <modal-buttons />
      </form>
    </q-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tasksToSubmit: {
        // this holds the data to send to store
        name: "",
        completed: false,
        dueDate: "",
        dueTime: ""
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      console.log("submit form");
      // this helps validate the form before submision
      this.$refs.modalTaskName.$refs.name.validate();
      // console.log(this.$refs.name)
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      // console.log('submit task')
      this.addTask(this.tasksToSubmit);
      // this event closes the dialog
      this.$emit("close");
    },
    clearDueDate() {
      (this.tasksToSubmit.dueDate = ""), (this.tasksToSubmit.dueTime = "");
    }
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader")
      .default,
    "modal-task-name": require("components/Tasks/Modals/Shared/ModalTaskName")
      .default,
    "modal-due-date": require("components/Tasks/Modals/Shared/ModalDueDate")
      .default,
      "modal-due-time": require("components/Tasks/Modals/Shared/ModalDueTime").default,
      'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons').default
  }
};
</script>