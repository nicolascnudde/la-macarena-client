<script>
import { Form as VeeForm, Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import AppButton from '../button/AppButton.vue';

export default {
  name: 'ContactForm',
  components: {
    AppButton,
    ErrorMessage,
    Field,
    VeeForm,
  },
  data() {
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('name is required').min(2, 'name is too short'),
      email: Yup.string().required('email is required').email('email is invalid'),
      message: Yup.string().required('message is required').min(10, 'message is too short'),
    });

    return {
      validationSchema,
    };
  },
  methods: {
    onSubmit() {
      try {
        emailjs.sendForm(
          'service_0z7ibx8',
          'template_ql3v9mr',
          this.$refs.contact_form,
          'yuamOnHSsNcJNHWot'
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <section class="contact-form">
    <VeeForm
      v-slot="{ handleSubmit }"
      :validation-schema="validationSchema"
      as="div"
      class="container"
    >
      <form class="contact-form__form" ref="contact_form" @submit="handleSubmit($event, onSubmit)">
        <div class="contact-form__form__field">
          <label for="name">Name</label>

          <Field
            id="name"
            name="name"
            type="text"
            placeholder="What should we call you?"
          />

          <ErrorMessage class="contact-form__form__field__alert" name="name" />
        </div>

        <div class="contact-form__form__field">
          <label for="email">Email</label>

          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Where can we contact you?"
          />

          <ErrorMessage class="contact-form__form__field__alert" name="email" />
        </div>

        <div class="contact-form__form__field">
          <label for="message">Message</label>

          <Field
            id="message"
            name="message"
            as="textarea"
            rows="4"
            placeholder="What do you want to tell us?"
          />

          <ErrorMessage
            class="contact-form__form__field__alert"
            name="message"
          />
        </div>
        
        <input class="btn btn--primary" type="submit" value="Send" />
      </form>
    </VeeForm>
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
      position: relative;

      label {
        margin-bottom: 0.5rem;

        &::after {
          content: '*';
        }
      }

      input,
      textarea {
        margin-bottom: 2rem;
        padding: 0.75rem;
        border: none;
        background: none;
        outline: none;
        border-bottom: 1px solid $clrPrimary;
      }

      &__alert {
        position: absolute;
        top: 0;
        right: 0;
        font-size: $fontSize14;
        color: red;
      }
    }
  }
}
</style>
