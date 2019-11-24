<template>
  <v-text-field
    v-model="model"
    :value="value"
    :label="label"
    :hint="hint"
    :placeholder="placeholder"
    outlined
    filled
    :clearable="clearable"
    :persistent-hint="persistentHint"
    :counter="counter!=0 ? counter : false"
    dense
  />
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      value: null,
      label: {
        type: String,
        required: true,
      },
      hint: {
        type: String,
        default: null,
      },
      placeholder: String,
      clearable: {
        type: Boolean,
        default: false,
      },
      persistentHint: Boolean,
      counter: Number,
    },
    data: () => ({
      model: null,

    }),
    methods: {

    },
  }
</script>

<style>
</style>
