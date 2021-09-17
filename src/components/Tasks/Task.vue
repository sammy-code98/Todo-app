<template>
  <div>
    <q-item
    class="border"
      clickable
      :class="!task.completed ? 'bg-orange-1': 'bg-green-1'"
      @click="updateTask({id: id, updates:{completed : !task.completed}})"
      v-ripple
    >
      <q-item-section side top>
        <q-checkbox v-model="task.completed" />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
      </q-item-section>
      <q-item-section v-if="task.dueDate" side>
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

      <q-item-section side>
        <!-- the dot stop prevents the btn from trigerring the function on the parent  -->
        <div class="row">
          <q-btn @click.stop="showEditTask= true" flat round dense color="primary" icon="edit" />

          <q-btn @click.stop="alertDelete(id)" flat round dense color="red" icon="delete" />
        </div>
      </q-item-section>
      <q-dialog v-model="showEditTask">
        <edit-task @close="showEditTask = false" :task="task" :id="id"></edit-task>
      </q-dialog>
    </q-item>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      showEditTask: false
    };
  },
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),

    alertDelete(id) {
      this.$q
        .dialog({
          title: "Delete",
          message: "Sure you want to delete?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          console.log("deleted");
          this.deleteTask(id);
        });
    }
  },
  components: {
    "edit-task": require("components/Tasks/Modals/EditTask").default
  }
};
</script>
<style lang="scss" scoped>
.border{

  margin: 10px;
}
</style>