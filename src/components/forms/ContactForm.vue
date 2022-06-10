<script>
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import gql from 'graphql-tag';

import AppButton from '../button/AppButton.vue';
import { placeholderImage } from '@/constants';

// Load the environment variables for the email service
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_CONTACT_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default {
  name: 'ContactForm',
  components: {
    AppButton,
    ErrorMessage,
    Field,
    VeeForm,
  },
  apollo: {
    content: {
      query: gql`
        query content($id: ID!) {
          content(where: { id: $id }) {
            id
            contactPageFormImage {
              publicUrl
            }
          }
        }
      `,
      variables: {
        id: 1,
      },
    },
  },
  data() {
    // Using Yup to validate the form
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('name is required').min(2, 'name is too short'),
      email: Yup.string().required('email is required').email('email is invalid'),
      message: Yup.string().required('message is required').min(10, 'message is too short'),
    });

    return {
      isSubmitted: false,
      placeholderImage,
      validationSchema,
    };
  },
  methods: {
    onSubmit() {
      try {
        // Send the email with the emailjs API keys
        emailjs.sendForm(
          serviceId,
          templateId,
          this.$refs.contact_form,
          publicKey,
        );
      } catch (err) {
        console.log(err);
      }

      // Reset the contact form
      this.$refs.contact_form.reset();

      // Show a success message
      this.isSubmitted = true;
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
      class="contact-form__container container"
    >
      <div v-if="!this.$apollo.queries.content.loading" class="contact-form__content">
        <h2 class="contact-form__content__title">Let's Talk</h2>
        <div class="contact-form__content__image">
          <img
            :src="content.contactPageFormImage ? content.contactPageFormImage.publicUrl : placeholderImage"
          />
        </div>
      </div>

      <form
        v-if="!isSubmitted"
        class="contact-form__form"
        ref="contact_form"
        @submit="handleSubmit($event, onSubmit)"
      >
        <div class="contact-form__form__field contact-form__form__field--name">
          <label for="name">Name</label>

          <Field
            id="name"
            name="name"
            type="text"
            placeholder="Como te llamas?"
          />

          <ErrorMessage class="contact-form__form__field__alert" name="name" />
        </div>

        <div class="contact-form__form__field contact-form__form__field--email">
          <label for="email">Email</label>

          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Where can we contact you?"
          />

          <ErrorMessage class="contact-form__form__field__alert" name="email" />
        </div>

        <div
          class="contact-form__form__field contact-form__form__field--message"
        >
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

        <AppButton type="secondary">Send</AppButton>
      </form>

      <p v-if="isSubmitted" class="contact-form__form__success">
        Gracias! Your message has been sent.
      </p>
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

  &__container {
    @include responsive(desktop) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__content {
    @include responsive(desktop) {
      flex-basis: 25%;
    }

    &__title {
      margin-bottom: 2rem;
    }

    &__image {
      display: none;

      @include responsive(desktop) {
        display: block;
      }

      img {
        border-radius: 70px 30px 70px 30px;
        width: 100%;
        height: 15rem;
        object-fit: cover;
      }
    }
  }

  &__form {
    @include responsive(desktop) {
      flex-basis: 66.67%;
    }

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

      textarea {
        resize: vertical;
      }

      &__alert {
        color: red;
        font-size: $fontSize14;
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    &__success {
      flex-basis: 66.67%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
