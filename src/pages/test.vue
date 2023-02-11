<template>
  <div class="container">
    <h1>The Luhn's Algorithm</h1>
    <!-- <Modal
      v-if="showModal"
      :title="'Registration Form'"
      @close="toggleModal()"
    /> -->
    <pre>{{ loc }}</pre>
    <label class="label">Account Number:&nbsp;</label
    ><input class="" placeholder="Enter your code" type="text" v-model="code" />
    <div>
      {{ getCheckDigit(code) }}
    </div>
    <div @click="showModal = !showModal" class="output">
      {{ validate }}
    </div>
  </div>
</template>
<script setup>
// import Modal from "./../components/Modal.vue";
import { ref, computed, watch } from "vue";
// import { strBool } from "../helpers";
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const loc = ref("test");
navigator.geolocation.watchPosition(
  (pos) => {
    const { latitude, longitude, accuracy, speed, altitude } = pos.coords;
    loc.value = { latitude, longitude, accuracy, speed, altitude };
    console.log(pos.coords);
  },
  () => "",
  options
);
const code = ref("79927398713");
const SYMBOLS = "34679ACDEFGHJKLMNPQRTUVWXY";
// const SYMBOLS = "34679ACDEFGHJKLMNPQRTUVWXY";
const N_SYMBOLS = SYMBOLS.length;

const nDigit = computed(() => code.value.length);
const check_digit = computed(() => code.value[nDigit.value - 1]);
const payload = computed(() => code.value.substring(0, nDigit.value - 1));

const getPoint = (val) => SYMBOLS.indexOf(val);

const getCheckDigit = (_payload) => {
  let pnt = getPoint(_payload[_payload.length - 1]) * 2;
  let sum = pnt >= N_SYMBOLS ? pnt - N_SYMBOLS + 1 : pnt;
  for (var i = _payload.length - 2; i >= 0; i--) {
    pnt = getPoint(_payload[i]);
    if (i % 2 == 0) {
      pnt *= 2;
    }
    sum += pnt >= N_SYMBOLS ? pnt - N_SYMBOLS + 1 : pnt;
  }
  return SYMBOLS.indexOf(N_SYMBOLS - ((sum % N_SYMBOLS) % N_SYMBOLS));
};
const showModal = ref(false);
const toggleModal = () => (showModal.value = !showModal.value);
const validate = computed(() => {
  // let pnt = getPoint(payload.value[payload.value.length - 1]) * 2;
  // let sum = pnt >= N_SYMBOLS ? pnt - N_SYMBOLS + 1 : pnt;
  // for (var i = nDigit.value - 3; i >= 0; i--) {
  //   pnt = getPoint(payload.value[i]);
  //   if (i % 2 == 0) {
  //     pnt *= 2;
  //   }
  //   sum += pnt >= N_SYMBOLS ? pnt - N_SYMBOLS + 1 : pnt;
  // }
  // return (N_SYMBOLS - (sum % N_SYMBOLS)) % N_SYMBOLS == check_digit.value;
  const sumDigit = (c) =>
    c < N_SYMBOLS ? c : sumDigit(Math.trunc(c / N_SYMBOLS) + (c % N_SYMBOLS));

  return (
    code.value
      .split("")
      .reverse()
      .map((i) => SYMBOLS.indexOf(i))
      .map((c, i) => (i % 2 !== 0 ? sumDigit(c * 2) : c))
      .reduce((acc, v) => acc + v) %
      N_SYMBOLS ===
    0
  );
});
</script>
<style scoped lang="scss">
.output {
  @apply text-center mt-10 text-green-200 uppercase font-black text-8xl;
}
.container {
  @apply sm:text-center text-left;
}

.label {
  @apply sm:inline-block block;
}
</style>
