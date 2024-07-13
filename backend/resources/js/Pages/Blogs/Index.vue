<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
  blogs: {
        type: Object,
        default: () => ({}),
    },
});

const form = useForm({});

function destroy(id) {
    if (confirm("Are you sure you want to Delete?")) {
        form.delete(route('blogs.destroy', id));
    }
}


</script>

<template>

  <Head title="Blogs List" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Blogs List</h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
                <div class="row">
                    <div class="col-md-9"><h3 class="card-header">Blogs List</h3></div>
                    <div class="col-md-3 text-right my-3">
                        <PrimaryButton>
                            <a :href="route('blogs.create')" class="text-white">Add new blog +</a>
                        </PrimaryButton>
                    </div>
                </div>
                <div class="table-responsive text-nowrap">
                
                  <table class="table">
                    <thead class="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr
                        v-for="row in blogs"
                        :key="row.id">
                        <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>
                          {{ row.id }}
                        </strong></td>
                        <td>
                          <img
                            :src="$page.props.ziggy.url+'/public/blogs/'+row.image"
                            class="card-img-top w-50"
                            :alt="row.title"/>
                        </td>
                        <td>{{ row.title }}</td>
                        <td>
                          <span class="badge bg-label-info">{{ row.category['name'] }}</span>
                        </td>
                        <td>{{ row.author }}</td>                        
                        <td>
                          <span v-if="row.status == 1" class="badge bg-label-success me-1">active</span>
                          <span v-else="row.status == 0" class="badge bg-label-danger me-1">inactive</span>
                        </td>  
                        <td>
                            <a :href="$page.props.ziggy.url+'/blogs/edit/'+row.id" class="btn btn-outline-primary mx-1">edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>