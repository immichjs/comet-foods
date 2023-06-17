<template>
  <main class="h-screen bg-purple-800 flex justify-center items-center">
    <section class="w-[24rem] h-[24rem] shadow bg-white border border-purple rounded-xl py-8 px-8">
      <form class="h-full flex flex-col items-start" @submit.prevent="authenticate()">
        <div class="w-full flex justify-center">
          <img src="../assets/images/comet-logo-2.png" class="w-12">
        </div>

        <div class="flex flex-col gap-2 w-full text-sm">
          <label for="email" class="text-sm text-zinc-400 font-medium">Email</label>
          <input type="email" id="email" required v-model="formGroup.email"
            class="w-full border border-zinc-300 py-1.5 rounded-md outline-none focus:border-purple-800 px-2.5 text-center"
            placeholder="Digite seu e-mail">

          <label for="password" class="text-sm text-zinc-400 font-medium">Senha</label>
          <input type="password" id="password" required v-model="formGroup.password"
            class="w-full border border-zinc-300 py-1.5 rounded-md outline-none focus:border-purple-800 px-2.5 text-center"
            placeholder="Digite sua senha">
        </div>

        <div class="flex justify-between items-center mt-auto w-full">
          <span class="text-xs text-zinc-400 font-medium">
            Não possui cadastro? <br />
            <a href="#" class="text-purple-800 hover:underline">Cadastre-se</a>
          </span>
          <button type="submit"
            class="py-2 px-4 rounded-md bg-purple-800 transform hover:-translate-y-[0.25rem] duration-100 text-white text-sm font-medium">Pronto
            para comer</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore'

const store = useUserStore()
const router = useRouter()

const formGroup = reactive({
  email: '',
  password: ''
})

function authenticate() {
  if (!formGroup.email || !formGroup.password) return

  store.user = { ...formGroup }
  store.authenticated = true

  formGroup.email = ''
  formGroup.password = ''

  localStorage.setItem('USER_INFOS', JSON.stringify(store.user))

  router.push('/')
}
</script>