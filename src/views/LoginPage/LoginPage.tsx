import * as React from "react";

import {
  FullScreenContainer,
  Logo,
  H1,
  Card,
  ErrorMessage,
  VerticalRhythm,
  VerticalCenter,
  LoginForm,
  LoginFormFields,
} from "src/components";

export const LoginPage = ({
  error,
  login,
  loading,
}: {
  error?: string;
  loading?: boolean;
  login: (fields: LoginFormFields) => Promise<void>;
}) => {
  return (
    <FullScreenContainer>
      <Card padding="large">
        <VerticalRhythm gap="medium">
          <VerticalCenter>
            <Logo />
            <H1>Sign in</H1>
          </VerticalCenter>
          <LoginForm onSubmit={login} submitting={Boolean(loading)} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </VerticalRhythm>
      </Card>
    </FullScreenContainer>
  );
};
