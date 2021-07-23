<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input id="email-address" placeholder="Email address *" v-model="email" type="text" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
          </div>
          <div>
            <input id="password" v-model="password" type="password" placeholder="Password *" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
            <span v-if="v$.$error">{{ empty }}</span>

          </div>
        </div>

        <div class="flex justify-end">

          <div class="text-sm">
            <a href="#recover" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button @click="submitForm" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  data () {
    return {
      v$: useValidate(),
      email: '',
      password: '',
      empty: 'Required'
    }
  },

  validations () {
    return {
      email: { required, email },
      password: { required }
    }
  },

  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.$router.push("/dashboard")
      } else {
        alert('Login failed')
      }
    }
  }
}
</script>