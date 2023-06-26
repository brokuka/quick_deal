<template>
  <div class="relative flex flex-col gap-2">
    <input
      class="form-field"
      :class="{ 'border-red-600': errorMessage }"
      :placeholder="(attrs?.placeholder as string) ?? ' '"
      type="text"
      v-bind="attrs"
    />

    <Transition
      v-show="errorMessage"
      enter-active-class="transition-opacity"
      leave-active-class="transition-opacity"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <span class="text-red-600" v-if="errorMessage">{{ errorMessage }}</span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

defineProps<{
  errorMessage?: string;
}>();

const attrs = useAttrs();

defineOptions({
  inheritAttrs: false,
});
</script>
