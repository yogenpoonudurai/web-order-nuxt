<template>
  <NuxtLayout name="bare">
    <div class="flex flex-col min-h-screen justify-center lg:w-1/2 mx-auto">
      <div class="space-y-2 mb-4 text-center">
        <h1 class="text-2xl">Forgot password?</h1>
        <p>No worries, we'll send you the reset instructions.</p>
      </div>
      <div
        class="card flex-shrink-0 shadow-2xl bg-base-100 max-w-md mx-auto w-full"
      >
        <form @submit.prevent="handlePasswordReset">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="badge badge-error badge-lg text-xs" v-if="error">
              {{ error }}
            </div>
            <div class="form-control mt-4">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
      <NuxtLink href="/login" class="text-center mt-10">
        <div class="flex justify-center">
          <i class="ri-arrow-left-s-line"></i> Back to login
        </div>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
let email = ref("");
let error = ref("");

const { resetPassword } = useAuth();

const { $toast } = useToast();

async function handlePasswordReset() {
  try {
    await resetPassword(email.value)
      .then((data) => {
        if (!data) {
          $toast.success(
            "Instruction to reset password sent to " + email.value
          );
        } else {
          error.value = data;
        }
      })
      .catch((err) => {
        error.value = err;
      });
  } catch (err) {
    error.value = err as string;
  }
}
definePageMeta({
  layout: false,
});
</script>
