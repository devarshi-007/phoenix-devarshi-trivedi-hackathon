<script setup>
/*Define Pinia store*/
/*import { useUsersStore } from '~/store/users'
const UsersStore = useUsersStore()
console.log(UsersStore);*/
const com = reactive([])
const startId = ref(1)
const tempRef = ref('')
function submit(sId, comVal) {
  com.push({ id: sId, comment: comVal, replies: [] })
  tempRef.value = ''
  incr()
}
function submite(sId, tempRefo, comArr) {
  comArr.replies.push({ id: sId, comment: tempRefo, replies: [] })
  incr()
}
function incr() {
  startId.value++
}
</script>
<template>
  <div class="container mt-3">
    <input v-model="tempRef" type="text" class="w-75" />
    <button class="ms-3" @click="submit(startId, tempRef)">Submit</button>
    <div v-for="c in com" :key="c.id">
      <romshow
        :com-arr="c"
        :start-id="startId"
        @submitio="(sId, tempRefo, comArr) => submite(sId, tempRefo, comArr)"
        @inc-strt="() => incr()"
      />
    </div>
  </div>
</template>
<style scoped>
.homepage {
  margin-top: 400px;
  font-size: 30px;
}
</style>
