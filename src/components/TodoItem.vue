<template>
  <div
    class="flex py-2 pl-6 pr-2 rounded-md text-mid-gray-1 border-light-gray-2 border items-center justify-between gap-0.5"
  >
    <input
      :value="todo.title"
      @input="(e) => emit('update', { id: todo.id, title: (e.target as HTMLInputElement).value })"
    />

    <button
      @click="emit('delete', todo.id)"
      class="hover:text-red-600"
      type="button"
    >
      <Icon width="20" icon="fluent:delete-12-regular" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Todo } from "../stores/useTodosStore";

defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: "delete", id: string): void;
  (e: "update", todo: Todo): void;
}>();
</script>
