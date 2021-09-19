<template>
  <div>
    <div class="q-pa-md">
      <q-list bordered class="rounded-borders q-mb-md">
        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-medium text-grey"
              >Dark Mode</q-item-label
            >
          </q-item-section>
          <q-item-section side>
            <q-toggle color="blue" v-model="notif1" val="battery"   @click="$q.dark.toggle()"
 />
          </q-item-section>
        </q-item>
      </q-list>

      <q-list bordered class="rounded-borders q-mb-md">
        <q-expansion-item
          label="About"
          class="text-subtitle1 text-weight-medium text-grey"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notif1: false,
      notif2: false,
      notif3: false

    };
              console.log(this.$q.dark.mode)

  }
};
</script>
