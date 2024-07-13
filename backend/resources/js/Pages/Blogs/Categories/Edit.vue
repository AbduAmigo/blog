<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";

const props = defineProps({
    users: {
        type: Object,
    },
    editData: {
        type: Object,
    },
    errors: Object,
});
// console.log(props.editData.status);
const form = useForm({
    name: props.editData.name,
    start_at: props.editData.start_at,
    expiry_at: props.editData.expiry_at,
    group: props.editData.group,
    description: props.editData.description,
    url: props.editData.url,
    csrfToken: Laravel.csrfToken,
});
const submit = () => {
    form.post(route("services.update", props.editData.id));
};
</script>

<template>
    <Head :title="form.name" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Update Services
            </h2>
        </template>

        <div class="container-xxl flex-grow-1 container-p-y">
            <div class="col-xl-12">
                <div class="card mb-4">
                    <div
                        class="card-header d-flex justify-content-between align-items-center"
                    >
                        <h3 class="mb-0">Service detail</h3>
                    </div>
                    <div class="card-body">
                        <form
                            @submit.prevent="submit"
                            enctype="multipart/form-data"
                        >
                            <div class="row">
                                <!-- name -->
                                <div class="mb-3">
                                    <label class="form-label" for="name"
                                        ><h5>Name</h5></label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        v-model="form.name"
                                        placeholder="eg: Unifonic"
                                    />
                                    <div v-if="errors.name" class="text-danger">
                                        This input is required
                                    </div>
                                </div>
                                <!-- url -->
                                <div class="mb-3">
                                    <label class="form-label" for="url"
                                        ><h5>Provider (URL)</h5></label
                                    >
                                    <input
                                        type="url"
                                        class="form-control"
                                        id="url"
                                        v-model="form.url"
                                        placeholder=""
                                    />
                                    <div v-if="errors.url" class="text-danger">
                                        This URL is required
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <!-- start at -->
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="start_at"
                                        ><h5>
                                            Start at
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <input
                                        type="datetime-local"
                                        class="form-control"
                                        id="start_at"
                                        v-model="form.start_at"
                                    />
                                    <div
                                        class="text-danger"
                                        v-if="errors.start_at"
                                    >
                                        {{ errors.start_at }}
                                    </div>
                                </div>
                                <!-- expiry at -->
                                <div class="col-md-6 mb-3">
                                    <label class="form-label" for="expiry_at"
                                        ><h5>
                                            Expiry at
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <input
                                        type="datetime-local"
                                        class="form-control"
                                        id="expiry_at"
                                        v-model="form.expiry_at"
                                    />
                                    <div
                                        class="text-danger"
                                        v-if="errors.expiry_at"
                                    >
                                        {{ errors.expiry_at }}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <!-- description -->
                                <div class="col-md-8 mb-3">
                                    <label class="form-label" for="description"
                                        ><h5>
                                            Description
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        id="description"
                                        v-model="form.description"
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
                                <!-- assign for -->
                                <div class="col-md-4 mb-3">
                                    <label class="form-label" for="group"
                                        ><h5>
                                            Assign to
                                            <small class="text-danger">*</small>
                                        </h5></label
                                    >

                                    <select
                                        class="form-control"
                                        id="group"
                                        v-model="form.group"
                                        required
                                    >
                                        <option default>selected</option>
                                        <option value="1">sales</option>
                                        <option value="2">domains</option>
                                        <option value="3">dnet IT</option>
                                        <option value="4">billing</option>
                                    </select>
                                    <div
                                        class="text-danger"
                                        v-if="errors.group"
                                    >
                                        This option is required
                                    </div>
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
