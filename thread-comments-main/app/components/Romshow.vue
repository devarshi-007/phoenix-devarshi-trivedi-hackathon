<script setup>
// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['comArr', 'startId'])
const emits = defineEmits(['submitio', 'incStrt'])
const isInputOpen = ref(false)
const tempRefo = ref('')

function submiter() {
  isInputOpen.value = false
  emits('submitio', props.startId, tempRefo.value, props.comArr)
  tempRefo.value = ''
}
function submite(sId, tempRefo, comArr) {
  isInputOpen.value = false
  comArr.replies.push({ id: sId, comment: tempRefo, replies: [] })
  emits('incStrt')
}
function openInput() {
  isInputOpen.value = !isInputOpen.value
}
function incStrt() {
  console.log(props.startId)
  emits('incStrt')
}
</script>

<template>
  <div>
    <div class="d-flex">
      <div class="ms-3">{{ props.comArr.comment }}</div>
      <button class="ms-3" @click="openInput()">Replies</button>
    </div>
    <div v-if="isInputOpen" class="ms-5">
      <input v-model="tempRefo" type="text" />
      <button class="ms-3" @click="submiter()">Submit</button>
    </div>
    <div v-for="c in props.comArr.replies" :key="c.id">
      <romshow
        class="ms-5"
        :com-arr="c"
        :start-id="startId"
        @submitio="(sId, tempRefo, comArr) => submite(sId, tempRefo, comArr)"
        @inc-strt="() => incStrt()"
      />
    </div>
  </div>
</template>
