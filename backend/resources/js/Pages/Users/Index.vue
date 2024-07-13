<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
    usersList: {
        type: Object,
        default: () => ({}),
    },
});

const form = useForm({});

function destroy(id) {
    if (confirm("Are you sure you want to Delete?")) {
        form.delete(route('users.destroy', id));
    }
}
</script>

<template>

  <Head title="Users" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="row">
                    <div class="col-md-10"><h5 class="card-header">Users</h5></div>
                    <div class="col-md-2 text-right my-3">
                        <PrimaryButton>
                            <a :href="route('users.create')" class="text-white">Add +</a>
                        </PrimaryButton>
                    </div>
                </div>
                <div class="table-responsive text-nowrap">
                
                  <table class="table">
                    <thead class="table-light">
                      <tr>
                        <th>Created at</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Group</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr
                        v-for="row in usersList"
                        :key="row.id">
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{ row.created_at }}</strong></td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.email }}</td>
                        <td><span class="badge bg-label-warning me-1">{{ row.group_name }}</span></td>
                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                        <td>
                            <a :href="route('users.edit', row.id)" class="btn btn-outline-primary">edit</a>
                            <a class="btn btn-outline-primary mx-2" @click="destroy(row.id)">
                                Delete
                            </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>