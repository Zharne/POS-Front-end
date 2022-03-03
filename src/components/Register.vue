<template>
  <div class="form-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <Form
            @submit="handleRegister"
            :validation-schema="schema"
            class="form-horizontal"
          >
            <span class="heading">Signup</span>
            <div v-if="!successful">
              <div class="form-group">
                <label for="name">Username</label>
                <Field
                  name="name"
                  type="text"
                  id="inputEmail3"
                  class="form-control"
                />
                <ErrorMessage name="username" class="error-feedback" />
                <i class="fa fa-user"></i>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <Field name="email" type="email" class="form-control" />
                <ErrorMessage name="email" class="error-feedback" />
              </div>
              <div class="form-group help">
                <label for="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  id="inputPassword3"
                  class="form-control"
                />
                <ErrorMessage name="password" class="error-feedback" />
                <i class="fa fa-lock"></i>
                <a href="#" class="fa fa-question-circle"></a>
              </div>
              <div class="form-group">
                <div class="main-checkbox">
                  <input
                    type="checkbox"
                    value="None"
                    id="checkbox1"
                    name="check"
                  />
                  <label for="checkbox1"></label>
                </div>
                <span class="text">Remember me</span>
                <button
                  type="submit"
                  class="btn btn-default"
                  :disabled="loading"
                >
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  <span>Signup</span>
                </button>
              </div>
            </div>
          </Form>
          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
