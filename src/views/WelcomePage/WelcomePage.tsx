import * as React from "react";
import {
  FullScreenContainer,
  VerticalRhythm,
  H1,
  Button,
  VerticalCenter,
} from "src/components";
import { User } from "src/state";

export const WelcomePage = ({
  user,
  logout,
}: {
  logout: () => void;
  user: User;
}) => (
  <FullScreenContainer>
    <VerticalCenter>
      <VerticalRhythm>
        <H1>Welcome {user.email}. You're logged in.</H1>
        <Button onClick={logout}>Logout</Button>
      </VerticalRhythm>
    </VerticalCenter>
  </FullScreenContainer>
);
