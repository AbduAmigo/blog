<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />
        <h4 class="mb-2">Adventure starts here 🚀</h4>
        <p class="mb-4">Make your app management easy and fun!</p>
        <form @submit.prevent="submit">
            <div class="mb-3">
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="form-control"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>
            <div class="mb-3">
                  <InputLabel for="email" class="form-label" value="Email" />
                  <TextInput
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="form.email"
                    required
                    autocomplete="username"/>
                    <InputError class="mt-2" :message="form.errors.email" />
            </div>
            <div class="mb-3 form-password-toggle">
                    <InputLabel for="password" value="Password" />
                    <div class="input-group input-group-merge">
                    <TextInput
                        id="password"
                        type="password"
                        class="form-control"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                    />
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                    </div>
            </div>
            <div class="mb-3">
                <InputLabel for="password_confirmation" value="Confirm Password" />

                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="form-control"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />

                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="mb-3 d-none">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label class="form-check-label" for="terms-conditions">
                        I agree to
                        <a href="">privacy policy & terms</a>
                    </label>
                </div>
            </div>

            <div class="mb-3">
                <PrimaryButton class="btn btn-primary d-grid w-100" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
        
        <p class="text-center">
            <Link
                :href="route('login')"
                class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Already registered? Sign in instead
            </Link>
        </p>
       
    </GuestLayout>
</template>
