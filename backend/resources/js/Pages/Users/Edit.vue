<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    usersEdit: {
        type: Object,
        default: () => ({}),
    },
    groups: {
        type: Object
    },
    errors: Object
});

const form = useForm({
    name: props.usersEdit.name,
    email: props.usersEdit.email,
    phone: props.usersEdit.phone,
    group: props.usersEdit.group_id
});


const submit = () => {
    form.put(route("users.update", props.usersEdit.id));
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
                        <small class="text-muted float-end">Update user detail</small>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="mb-3">
                                <label class="form-label" for="group">Group</label>
                                <select name="group" id="group" v-model="form.group" class="form-control" required>
                                    <option value="">-- choose --</option>
                                    <option :value="row.group_id" v-for="row in groups" :key="row.group_id" :selected="row.group_id === props.usersEdit.group_id">{{ row.name }}</option>
                                </select>
                                <div class="text-danger" v-if="errors.group">
                                    This input is required
                                </div>  
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="fullname">Full Name</label>
                                <input type="text" name="name" class="form-control" id="name" v-model="form.name" placeholder="John Doe">
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="email">Email</label>
                                <div class="input-group input-group-merge">
                                <input type="text" name="email" id="email" v-model="form.email" class="form-control" placeholder="john.doe" aria-label="john.doe" aria-describedby="email2">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="phone">Phone No</label>
                                <input type="number" name="phone" maxlength="15" id="phone" v-model="form.phone" class="form-control phone-mask" placeholder="658 799 8941">
                            </div>
                            <button type="submit" class="btn bg-primary text-white">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>