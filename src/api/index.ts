export class ApiClient {
  login({ email }: { email: string; password: string }): Promise<void> {
    return new Promise((resolve, reject) =>
      setTimeout(() => (email.startsWith("a") ? resolve() : reject()), 1500)
    );
  }
}

export const api = new ApiClient();
