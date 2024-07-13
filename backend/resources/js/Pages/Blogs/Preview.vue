<script setup>
import HomeLayout from '@/Layouts/HomeLayout.vue';
import { useForm, router } from '@inertiajs/vue3';

const props = defineProps({
    preview: {
        type: Object,
        default: () => ({}),
    },
});
// console.log(props.ziggy);
const form = useForm({
    fullname: "",
    url: props.preview,
    csrfToken: Laravel.csrfToken,
});
const submit = () => {
    router.post(route("ecard.apply"), form, {
        forceFormData: true,
    });
};
// const downloadImage = () => 
// {
//     // const link = document.createElement('a');
//     // link.href = this.$page.props.ziggy.url + '/public/cards/' + this.$props.preview.file;
//     // link.download = 'image_with_text.png';
//     // link.click();
// }
</script>

<Head title="Preview" />
<template>
  <HomeLayout>
    <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Preview</h2>
    </template>
   
      <div class="col-md-12">
        <h3 class="text-primary text-center mb-5">{{ $props.title }}</h3>
      </div>
      <div class="col-md-5">
        <div class="eid-box py-4">
            <h1 class="text-end">فضلاً قم بكتابة أسمك هنا لمعايدة من تحب</h1>
        </div>
        <form @submit.prevent="submit">
          <div class="mb-3">
            <input type="text" name="text" class="form-control text-center" v-model="form.fullname" dir="auto"id="fullname" placeholder="مثال: عبدالله" required="" autofocus="" autocomplete="off">
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">عرض المعايدة</button>
          </div>
        </form>
      </div>
      <div class="col-md-7">
        <div class="card py-5">
          <div class="text-center image-container">
            <img :src="$page.props.ziggy.url+'/public/cards/'+$props.preview.file" alt="" class="position-relative px-3">
            <h3 class="position-absloute">{{ $props.preview.fullname }} Abdalla Adam</h3>
            
          </div>
        </div>
        <button class="btn btn-primary mt-3 w-25" @click="downloadImage">تحميل الصورة</button>
      </div>
   
  </HomeLayout>
</template>