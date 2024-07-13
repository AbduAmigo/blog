<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

const props = defineProps({
    category: {
        type: Object,
    },
    selectedCategoryId: 4, // Set the initial selected category ID here
    editData: {
        type: Object,
    },
    errors: Object,
});
// console.log(props.editData.status);
const form = useForm({
    id: props.editData.id,
    title: props.editData.title,
    author: props.editData.author,
    content: props.editData.content,
    name: props.editData.name,
    image: props.editData.image,
    csrfToken: Laravel.csrfToken,
    base_url: Laravel.base_url
});
const submit = () => {
    form.put(route("blogs.update", props.editData.id));
};
</script>

<template>
    <Head :title="form.title" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Update Blog
            </h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div
                        class="card-header d-flex justify-content-between align-items-center"
                    >
                        <h3 class="mb-0">Blog detail</h3>
                    </div>
                    <div class="card-body">
                        <form
                            @submit.prevent="submit"
                            enctype="multipart/form-data"
                        >
                        <div class="row">
                                <!-- title -->
                                <div class="col-md-12 mb-3">
                                    <label class="form-label" for="title"
                                        ><h5>
                                            Title
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="title"
                                        v-model="form.title"
                                        placeholder="eg: The best PHP framework in 2024"
                                    />
                                    <div class="text-danger" v-if="errors.title">
                                        This input is required
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <!-- name -->
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="url"
                                        ><h5>
                                            Category name
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <select class="form-control" v-model="form.name">
                                        <option default="">-- select --</option>
                                        <option v-for="row in category" :value="row.id" :key="row.id" :selected="form.category_id === row.id">{{ row.name }}</option>
                                    </select>
                                    <div class="text-danger" v-if="errors.name">
                                        This category name is required
                                    </div>
                                </div>
                                <!-- author at -->
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="author_at"
                                        ><h5>
                                            Author
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="author"
                                        required
                                        v-model="form.author"
                                    />
                                    <div
                                        class="text-danger"
                                        v-if="errors.author"
                                    >
                                        This input is required
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <!-- description -->
                                <div class="col-md-12 mb-3">
                                    <label class="form-label" for="description">
                                        <h5>
                                            Content
                                            <small class="text-danger">*</small>
                                        </h5>
                                    </label>

                                    <textarea
                                        type="text"
                                        class="form-control"
                                        id="content"
                                        required
                                        v-model="form.content"
                                        rows="7"
                                        placeholder="Write some description..."
                                    >
                                    </textarea>
                                    <div
                                        class="text-danger"
                                        v-if="errors.description"
                                    >
                                        This description is required and can't
                                        be less than 5 characters
                                    </div>
                                </div>
                               
                            </div>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label class="form-label" for="Image">
                                        <h5>
                                            Image
                                            <small class="text-danger">*</small>
                                        </h5>
                                    </label>
                                    <input type="file" accept="image/jpg,image/png" @input="form.image = $event.target.files[0]" />
                                    <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                    {{ form.progress.percentage }}%
                                    </progress>
                                    <img
                                        :src="$page.props.ziggy.url+'/public/blogs/'+form.image"
                                        class="card-img-top w-25"
                                        :alt="form.title"/>
                                </div>
                            </div>
                            <div class="m-end">
                                <button
                                    type="submit"
                                    class="btn bg-primary text-white"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
