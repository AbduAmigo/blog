<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    groups: {
        type: Object
    },
    errors: Object
});
const form = useForm({
  name: "",
  email: "",
  phone: "",
  group: "",
  csrfToken: Laravel.csrfToken
});
const submit = () => {
    form.post(route('users.store'));
};
</script>

<template>

  <Head title="Users" />
  <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Basic Info</h5>
                        <small class="text-muted float-end">Add user detail</small>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                <label class="form-label" for="group">Group</label>
                                <select name="group" id="group" v-model="form.group" class="form-control">
                                    <option value="">-- choose --</option>
                                    <option :value="row.group_id" v-for="row in groups" :key="row.group_id">{{ row.name }}</option>
                                </select>
                                <div class="text-danger" v-if="errors.group">
                                    This input is required
                                </div>  
                            </div>
                            
                            <div class="mb-3">
                                <label class="form-label" for="fullname">Full Name</label>
                                <input type="text" class="form-control" id="name" v-model="form.name" placeholder="eg Abdalla">
                                <div class="text-danger" v-if="errors.name">
                                    This input is required
                                </div> 
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="email">Email</label>
                                <div class="input-group input-group-merge">
                                <input type="text" id="email" v-model="form.email" class="form-control" placeholder="eg abdalla@example.com" aria-label="abdalla@example.com" aria-describedby="email2">
                                </div>
                                <div class="text-danger" v-if="errors.email">
                                    This input is required
                                </div> 
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="phone">Phone No</label>
                                <input type="number" maxlength="15" id="phone" v-model="form.phone" class="form-control phone-mask" placeholder="591234567">
                                <div class="text-danger" v-if="errors.phone">
                                    This input is required
                                </div> 
                            </div>
                            <button type="submit" class="btn bg-primary text-white">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>