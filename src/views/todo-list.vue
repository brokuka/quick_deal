<template>
  <form class="mb-4" @submit="onSubmit">
    <Field
      #default="{ field, errorMessage }"
      name="todo"
      :validate-on-blur="false"
      :validate-on-input="true"
    >
      <TextField
        autocomplete="off"
        v-bind="field"
        placeholder="Введите задачу"
        :error-message="errorMessage"
      />
    </Field>
  </form>

  <div
    class="max-w-[350px] w-full flex flex-col gap-2 h-[350px] overflow-y-auto"
    v-if="todosStore.getTodos.length"
  >
    <template v-for="todo in todosStore.getTodos" :key="todo.id">
      <TodoItem @delete="onDelete" @update="(v) => onUpdate(v)" :todo="todo" />
    </template>
  </div>

  <div v-else class="flex flex-col items-center justify-center gap-5 h-[350px]">
    <span class="text-7xl">😔</span>
    <span>Список задач пуст</span>
  </div>
</template>

<script setup lang="ts">
import { Field, useForm } from "vee-validate";
import TextField from "../components/TextField.vue";
import TodoItem from "../components/TodoItem.vue";
import { Todo, useTodosStore } from "../stores/useTodosStore";

import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const validationSchema = toTypedSchema(
  zod.object({
    todo: zod.string().nonempty("Обязательное поле").optional().default(""),
  })
);

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    todo: "",
  },
});

const todosStore = useTodosStore();

const onSubmit = handleSubmit((values, { resetForm }) => {
  todosStore.addTodo({ id: crypto.randomUUID(), title: values.todo });

  resetForm();
});

const onDelete = (id: string) => {
  todosStore.deleteTodo(id);
};

const onUpdate = (todo: Todo) => {
  todosStore.updateTodo(todo);
};
</script>
