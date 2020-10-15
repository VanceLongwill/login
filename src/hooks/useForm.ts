import * as React from "react";
import * as Yup from "yup";

interface FormState<T extends Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
}

export function useForm<
  T extends Yup.Schema<any, any>,
  TData extends Record<string, unknown> = Yup.InferType<T>
>(schema: T, initialValues: TData) {
  type State = FormState<TData>;
  const [values, setValues] = React.useState<State["values"]>(initialValues);
  const [errors, setErrors] = React.useState<State["errors"]>({});
  const [touched, setTouched] = React.useState<State["touched"]>({});

  const setValue = async <TKey extends keyof TData, TValue extends TData[TKey]>(
    key: TKey,
    value: TValue
  ) => {
    const nextValues = {
      ...values,
      [key]: value,
    };
    setValues(nextValues);
    setTouched({
      ...touched,
      [key]: true,
    });

    try {
      await schema.validate(nextValues, { abortEarly: false });
      setErrors({});
    } catch (err) {
      if (Yup.ValidationError.isError(err)) {
        setErrors(
          err.inner.reduce((acc, e) => ({ ...acc, [e.path]: e.message }), {})
        );
      }
    }
  };

  return {
    values,
    touched,
    errors,
    setValue,
  };
}
