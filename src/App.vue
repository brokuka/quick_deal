<template>
  <div class="container min-h-screen flex flex-col gap-10 items-center">
    <header class="pt-16 md:pt-36">
      <div>
        <span class="text-3xl"
          >👋, это тестовое приложение для <strong>Quick Deal</strong></span
        >
      </div>

      <nav>
        <ul class="flex gap-2">
          <li>
            <RouterLink active-class="text-red-600" :to="{ name: 'Home' }"
              >Главная</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="text-red-600" :to="{ name: 'TodoList' }"
              >Список задач</RouterLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="w-full flex flex-col items-center">
      <RouterView />
    </main>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: "Inter", sans-serif;
  }
}

@layer components {
  .form-field {
    @apply py-2 px-4 border border-light-gray-2 rounded-md appearance-none;
    @apply text-dark-gray-2;
    @apply hover:border-mid-gray-5;
    @apply focus:text-dark-gray-2 focus:ring-0;
  }
}
</style>
