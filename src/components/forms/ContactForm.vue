<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

import AppButton from '../button/AppButton.vue';

export default {
  name: 'ContactForm',
  components: {
    AppButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const validationSchema = Yup.object().shape({
      email: Yup.string().required('Name is required.').email(),
      name: Yup.string().required(),
      message: Yup.string().required(),
    });
    return {
      validationSchema,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<template>
  <section class="contact-form">
    <div class="container">
      <Form class="contact-form__form"
        @submit="onSubmit"
        :validation-schema="validationSchema"
      >
        <div class="contact-form__form__field">
          <label for="name">Name *</label>

          <Field name="name" type="text" placeholder="What should we call you?" />

          <ErrorMessage name="name" />
        </div>

        <div class="contact-form__form__field">
          <Field name="email" type="email" />
        </div>

        <div class="contact-form__form__field">
          <Field name="message" type="textarea" />
        </div>

        <input type="submit" value="Submit" />
      </Form>
    </div>
  </section>
</template>

<style lang="scss">
.contact-form {
  background: $clrYellow;
  margin-bottom: 5rem;
  padding: 3rem 0;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  &__form {
    &__field {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;
      }

      input {
        margin-bottom: 1.5rem;
        padding: 0.75rem;
        border: none;
        background: none;
        outline: none;
        border-bottom: 1px solid $clrPrimary;
      }
    }
  }
}
</style>
