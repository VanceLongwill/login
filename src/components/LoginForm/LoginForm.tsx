import * as React from "react";
import * as Yup from "yup";
import { useForm } from "src/hooks";
import {
  VerticalRhythm,
  SpaceBetween,
  Button,
  Link,
  TextInput,
} from "src/components";

const LoginFormSchema = Yup.object()
  .shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("An email address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters in length")
      .required("A password is required"),
  })
  .required();

export type LoginFormFields = Yup.InferType<typeof LoginFormSchema>;

export const LoginForm = ({
  onSubmit,
  submitting = false,
}: {
  onSubmit: (fields: LoginFormFields) => Promise<void> | void;
  submitting: boolean;
}) => {
  const { values, touched, errors, setValue } = useForm(LoginFormSchema, {
    email: "",
    password: "",
  });

  return (
    <VerticalRhythm<"form">
      as="form"
      gap="medium"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >
      <VerticalRhythm>
        <TextInput
          name="email"
          type="email"
          placeholder="Enter an email"
          value={values.email}
          touched={touched.email}
          disabled={submitting}
          error={errors.email}
          onChange={(e) => setValue("email", e.target.value)}
          onBlur={(e) => !touched.email && setValue("email", e.target.value)}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          touched={touched.password}
          disabled={submitting}
          error={errors.password}
          onChange={(e) => setValue("password", e.target.value)}
          onBlur={(e) =>
            !touched.password && setValue("password", e.target.value)
          }
        />
      </VerticalRhythm>
      <SpaceBetween>
        <Link to="#create-an-account">Create an account</Link>
        <Button
          type="submit"
          disabled={
            submitting ||
            Object.keys(touched).length === 0 ||
            Object.values(errors).some(Boolean)
          }
        >
          {submitting ? "LOGGING IN..." : "LOGIN"}
        </Button>
      </SpaceBetween>
    </VerticalRhythm>
  );
};
