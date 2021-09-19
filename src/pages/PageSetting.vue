<template>
  <div>
    <div class="q-pa-md">
      <q-list padding>
        <q-item-label header class="text-h5 text-center">Settings</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Battery too low</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle color="blue" v-model="notif1" val="battery" />
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Friend request</q-item-label>
            <q-item-label caption>Allow notification</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-toggle color="green" v-model="notif2" val="friend" />
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-item-label>Picture uploaded</q-item-label>
            <q-item-label caption
              >Allow notification when uploading images</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-toggle color="red" v-model="notif3" val="picture" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default{
    data(){
        return{
        
        notif1:false,
        notif2: false,
        notif3:false
        }


    }
}
</script>
