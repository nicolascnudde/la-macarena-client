<script>
import { ErrorMessage, Field, Form as VeeForm } from 'vee-validate';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import gql from 'graphql-tag';

import { AppButton } from '@/components/button';
import { placeholderImage } from '@/constants';

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
    activitySlots: {
      type: Number,
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
      message: Yup.string()
        .min(2, 'message is too short'),
    });

    return {
      isSubmitted: false,
      placeholderImage,
      validationSchema,
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
        throw new Error(error);
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
  <section v-if="this.activitySlots > 0" class="activity-form">
    <VeeForm
      v-slot="{ handleSubmit }"
      :validation-schema="validationSchema"
      as="div"
      class="activity-form__container container"
    >
      <div class="activity-form__content">
        <h2 class="activity-form__content__title">Ready to reserve?</h2>

        <div class="activity-form__content__image">
          <img :src="placeholderImage" alt="ready to reserve" />
        </div>
      </div>

      <form
        v-if="!isSubmitted"
        class="activity-form__form"
        ref="activity_form"
        @submit="handleSubmit($event, onSubmit)"
      >
        <div class="activity-form__form__field activity-form__form__field--first-name">
          <label for="firstName">First name</label>

          <Field
            id="firstName"
            name="firstName"
            placeholder="What's your first name?"
            type="text"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="firstName"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--last-name">
          <label for="lastName">Last name</label>

          <Field
            id="lastName"
            name="lastName"
            placeholder="What's your last name?"
            type="text"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="lastName"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--email">
          <label for="email">Email</label>

          <Field
            id="email"
            name="email"
            placeholder="To where can we write you?"
            type="email"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="email"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--phone">
          <label for="phone">Phone number</label>

          <Field
            id="phone"
            name="phone"
            placeholder="Which number can we call to reach you?"
            type="tel"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="phone"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--activity-title">
          <label for="activityTitle">Activity</label>

          <Field
            id="activityTitle"
            name="activityTitle"
            type="text"
            readonly
            :value="activityTitle"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityTitle"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--activity-price">
          <label for="activityPrice">Price</label>

          <Field
            id="activityPrice"
            name="activityPrice"
            type="text"
            readonly
            :value="activityPrice"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityPrice"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--activity-date">
          <label for="activityDate">Date</label>

          <Field
            id="activityDate"
            name="activityDate"
            type="text"
            readonly
            :value="`${parseDate(activityDate)} ${activityToDate ? ' – ' + parseDate(activityToDate) : ''}`"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="activityDate"
          />
        </div>

        <div class="activity-form__form__field activity-form__form__field--message">
          <label for="message">Message</label>

          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="What do you want to tell us?"
            rows="4"
          />

          <ErrorMessage
            class="activity-form__form__field__alert"
            name="message"
          />
        </div>

        <AppButton type="primary">Send</AppButton>
      </form>

      <p v-if="isSubmitted" class="activity-form__form__success">
        Gracias... the form has been successfully submitted!
      </p>
    </VeeForm>
  </section>

  <section v-else class="activity-fully-booked">
    <div class="container">
      <p class="activity-fully-booked__text">Sorry... this activity is fully booked!</p>
    </div>
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

.activity-fully-booked {
  text-align: center;
  background: $clrBlue;
  margin-bottom: 5rem;
  padding: 3rem 0;

  @include responsive(tablet) {
    margin-bottom: 8rem;
  }

  &__text {
    font-size: $fontSize20;
  }
}
</style>
