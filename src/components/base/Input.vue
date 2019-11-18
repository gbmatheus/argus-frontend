<template>
  <v-text-field
    v-model="input.model"
    :label="input.label"
    :hint="input.hint"
    :placeholder="input.placeholder"
    outlined
    filled
    :clearable="input.clearable"
    :persistent-hint="input.persistentHint"
    :counter="input.counter!=0 ? input.counter : false"
    dense
  />
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      input: {
        model: {
          type: Object
          // required: true,
        },
        label: {
          type: String,
          required: true
        },
        hint: String,
        placeholder: String,
        clearable: {
          type: Boolean,
          default: false,
        },
        persistentHint: Boolean,
        counter: Number,
      },
    },
    data: () => ({
      model: this.input.model,
      label: this.input.label,
      hint: this.input.hint,
      placeholder: this.input.placeholder,
      clearable: this.input.clearable,
      persistentHint: this.input.persistentHint,
      counter: this.input.counter
    }),
  }
</script>

<style>
</style>
