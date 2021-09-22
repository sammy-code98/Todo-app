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
          <q-btn
            flat
            dense
            round
            no-caps
            :icon="$q.dark.isActive ? 'mdi-brightness-5' : 'mdi-brightness-4'"
            @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          ></q-btn>
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
              eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quidem, eius reprehenderit eos
              corrupti commodi magni quaerat ex numquam, dolorum officiis modi
              facere maiores architecto suscipit iste eveniet doloribus ullam
              aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
              numquam, dolorum officiis modi facere maiores architecto suscipit
              iste eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quidem, eius reprehenderit eos
              corrupti commodi magni quaerat ex numquam, dolorum officiis modi
              facere maiores architecto suscipit iste eveniet doloribus ullam
              aliquid.
              <div class="q-pa-md q-ma-sm q-gutter-md">
                <p>Catch up with  the latest on;</p>
                <q-btn flat round color="primary" icon="mdi-facebook" />
                <q-btn flat round color="light-blue-8" icon="mdi-twitter" />

                <q-btn flat round color="primary" icon="mdi-linkedin" />

                <q-btn flat round color="black" icon="mdi-github" />
              </div>
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
      darkmode: false
    };
  }
};
</script>
