<script setup>
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <h4 class="mb-2">Welcome to blog management system! 👋</h4>
        <p class="mb-4">Please sign-in to your account and start the adventure</p>
        <form @submit.prevent="submit" id="formAuthentication" class="mb-3">
            <div class="mb-3">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full form-control"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />
            </div>
            <div class="mb-3 form-password-toggle">
                <InputLabel for="password" value="Password" />
                <div class="input-group input-group-merge">
                    <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full form-control"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                    />

                    <InputError class="mt-2" :message="form.errors.password" />
                    <span class="input-group-text cursor-pointer"
                        ><i class="bx bx-hide"></i
                    ></span>
                </div>
            </div>
            <div class="mb-3">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ms-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>
            <div class="mb-3">
                <PrimaryButton
                    class="btn btn-primary d-grid w-100"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </form>
        <p class="text-center">
            <span>New on our platform? </span>
            <a :href="route('register')">
                <span> Create an account</span>
            </a>
        </p>
    </GuestLayout>
</template>
