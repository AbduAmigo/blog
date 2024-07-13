<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
  servicesList: {
        type: Object,
        default: () => ({}),
    },
});

const form = useForm({});

function destroy(id) {
    if (confirm("Are you sure you want to Delete?")) {
        form.delete(route('services.destroy', id));
    }
}


</script>

<template>

  <Head title="Services List" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Services List</h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="row">
                    <div class="col-md-9"><h3 class="card-header">Services List</h3></div>
                    <div class="col-md-3 text-right my-3">
                        <PrimaryButton>
                            <a :href="route('services.create')" class="text-white">Add new service +</a>
                        </PrimaryButton>
                    </div>
                </div>
                <div class="table-responsive text-nowrap">
                
                  <table class="table">
                    <thead class="table-light">
                      <tr>
                        <th>Created at</th>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Start</th>
                        <th>Expiry</th>
                        
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr
                        v-for="row in servicesList"
                        :key="row.id">
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>{{ row.created_at }}</strong></td>
                        <td>{{ row.name }}</td>
                        <td>
                          <span class="badge bg-label-info">{{ row.group_name }}</span>
                        </td>
                        <td>{{ row.start_at }}</td>
                        <td>{{ row.expiry_at }}</td>
                        
                        <td>
                          <span v-if="row.status === 'active'" class="badge bg-label-success me-1">active</span>
                          <span v-if="row.status === 'expired'" class="badge bg-label-danger me-1">expired</span>
                          <span v-if="row.status === 'cancelled'" class="badge bg-label-default me-1">cancelled</span>
                          <span v-else class="badge bg-label-warning me-1">new</span>
                        </td>  
                        <td>
                            <a :href="$page.props.ziggy.url+'/services/edit/'+row.id" class="btn btn-outline-primary mx-1">edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>