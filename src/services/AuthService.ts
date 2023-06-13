import { ref, Ref } from "vue";

class AuthService {
  private jwt: Ref<string>;
  private error: Ref<string>;

  constructor() {
    this.jwt = ref<string>("");
    this.error = ref("");
  }

  getJwt(): Ref<string> {
    return this.jwt;
  }

  getError(): Ref<string> {
    return this.error;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const res = await fetch("https://376usy84.directus.app/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const response = await res.json();

      if ("errors" in response) {
        this.error.value = "Login failed";
        return false;
      }

      this.jwt.value = response.data.access_token;
      return true;
    } catch (error) {
      console.log(error);
      return false; // Add a return statement here to handle the error case
    }
  }
}

export default AuthService;
