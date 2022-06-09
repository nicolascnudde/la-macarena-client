<script>
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import gql from 'graphql-tag';

import AppButton from '../button/AppButton.vue';

// Load the environment variables for the email service
const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_JS_ACTIVITY_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default {
  name: 'ActivityForm',
  components: {
    AppButton,
    ErrorMessage,
    Field,
    VeeForm,
  },
  props: {
    activityTitle: {
      type: String,
    },
    activityPrice: {
      type: Number,
    },
    activityDate: {
      type: String,
    },
    activityToDate: {
      type: String,
    },
  },
  data() {
    // Using Yup to validate the form
    const validationSchema = Yup.object().shape({
      firstName: Yup.string()
        .required('first name is required')
        .min(2, 'first name is too short'),
      lastName: Yup.string()
        .required('last name is required')
        .min(2, 'last name is too short'),
      email: Yup.string()
        .required('email is required')
        .email('email is invalid'),
      phone: Yup.string()
        .required('phone number is required')
        .matches(new RegExp('[0-9]'), 'phone number must only contain numbers')
        .min(8, 'phone number is too short')
        .max(12, 'phone number is too long'),
      actTitle: Yup.string(),
      actPrice: Yup.number(),
      actDate: Yup.string(),
      message: Yup.string().min(2, 'message is too short'),
    });

    return {
      validationSchema,
      isSubmitted: false,
    };
  },
  methods: {
    parseDate(date) {
      const parsedDate = new Date(date);
      const day = parsedDate.getDate();
      const month = parsedDate.getMonth() + 1;
      const year = parsedDate.getFullYear();

      return `${day}/${month}/${year}`;
    },
    // Mutate the form input values to the Reservation table in the database
    createReservation(values) {
      this.$apollo.mutate({
        mutation: gql`
          mutation createReservation($input: ReservationCreateInput!) {
            createReservation(data: $input) {
              firstName
              lastName
              email
              phone
              activityTitle
              activityPrice
              activityDate
              message
              createdAt
            }
          }
        `,
        variables: {
          input: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            activityTitle: values.activityTitle,
            activityPrice: values.activityPrice,
            activityDate: values.activityDate,
            message: values.message,
            createdAt: new Date(),
          },
        },
      });
    },
    onSubmit(values) {
      // Call the createReservation function to mutate the values to the database
      this.createReservation(values);

      // Send the email with the emailjs API keys
      try {
        emailjs.sendForm(
          serviceId,
          templateId,
          this.$refs.activity_form,
          publicKey
        );
      } catch (error) {
        console.log(error);
      }

      // Reset the contact form
      this.$refs.activity_form.reset();

      // Show a success message
      this.isSubmitted = true;
    },
  },
};
</script>

<template>
  <section class="activity-form">
    <VeeForm
      v-slot="{ handleSubmit }"
      :validation-schema="validationSchema"
      as="div"
      class="activity-form__container container"
    >
      <div class="activity-form__content">
        <h2 class="activity-form__content__title">Ready to reserve?</h2>
        <div class="activity-form__content__image">
          <img
            src="https://res.cloudinary.com/dvb6lcmag/image/upload/v1654678968/content/default-image_onwn5a.webp"
          />
        </div>
      </div>

      <form
        v-if="!isSubmitted"
        class="activity-form__form"
        ref="activity_form"
        @submit="handleSubmit($event, onSubmit)"
      >
        <div
          class="activity-form__form__field activity-form__form__field--first-name"
        >
          <label for="firstName">First name</label>

          <Field
            id="firstName"
            name="firstName"
            type="text"
            placeholder="What's your first name?"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="firstName"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--last-name"
        >
          <label for="lastName">Last name</label>

          <Field
            id="lastName"
            name="lastName"
            type="text"
            placeholder="What's your last name?"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="lastName"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--email"
        >
          <label for="email">Email</label>

          <Field
            id="email"
            name="email"
            type="email"
            placeholder="To where can we write you?"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="email"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--phone"
        >
          <label for="phone">Phone number</label>

          <Field
            id="phone"
            name="phone"
            type="tel"
            placeholder="Which number can we call to reach you?"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="phone"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--activity-title"
        >
          <label>Activity</label>

          <Field
            id="activityTitle"
            name="activityTitle"
            type="text"
            :value="activityTitle"
            readonly
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityTitle"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--activity-price"
        >
          <label>Price</label>

          <Field
            id="activityPrice"
            name="activityPrice"
            type="text"
            :value="activityPrice"
            readonly
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityPrice"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--activity-date"
        >
          <label>Date</label>

          <Field
            id="activityDate"
            name="activityDate"
            type="text"
            :value="`${parseDate(activityDate)} ${activityToDate ? ' – ' + parseDate(activityToDate) : ''}`"
            readonly
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityDate"
          />
        </div>

        <div
          class="activity-form__form__field activity-form__form__field--message"
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
            class="activity-form__form__field__alert"
            name="message"
          />
        </div>

        <AppButton type="primary">Send</AppButton>
      </form>

      <p v-if="isSubmitted" class="activity-form__form__success">
        Gracias! Your message has been sent.
      </p>
    </VeeForm>
  </section>
</template>

<style lang="scss">
.activity-form {
  background: $clrBlue;
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

      &--first-name,
      &--last-name,
      &--email,
      &--phone {
        label {
          margin-bottom: 0.5rem;

          &::after {
            content: '*';
          }
        }
      }

      &--activity-title,
      &--activity-price,
      &--activity-date {
        input {
          cursor: default;
        }
      }

      label {
        margin-bottom: 0.5rem;
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
