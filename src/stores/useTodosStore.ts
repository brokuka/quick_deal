import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export type Todo = {
  id: string;
  title: string;
};

type State = {
  todos: Todo[];
};

const ls = useLocalStorage("todos", [] as Todo[]);

export const useTodosStore = defineStore("todos", {
  state: (): State => ({
    todos: [],
  }),

  actions: {
    addTodo(todo: Todo) {
      this.todos.push(todo);
      ls.value.push(todo);
    },

    deleteTodo(id: string) {
      this.todos = this.todos.filter((item) => item.id !== id);
      ls.value = ls.value.filter((item) => item.id !== id);
    },

    updateTodo(todo: Todo) {
      this.todos = this.todos.map((item) =>
        item.id === todo.id ? { ...item, title: todo.title } : item
      );

      ls.value = ls.value.map((item) =>
        item.id === todo.id ? { ...item, title: todo.title } : item
      );
    },
  },

  getters: {
    getTodos(): State["todos"] {
      return ls.value ? ls.value : this.todos;
    },
  },
});
