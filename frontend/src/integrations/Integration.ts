import { RegistrationData } from "../models/RegistrationModel";
import { RegistrationResponseModel } from "../models/RegistrationReponseModel";

export interface Integration {
  registerUser(
    requestData: RegistrationData,
  ): Promise<RegistrationResponseModel>;
}

const Integration: Integration = {
  async registerUser(
    requestData: RegistrationData,
  ): Promise<RegistrationResponseModel> {
    const response = await fetch("/api/registerUser", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Network response error");
    }

    return await response.json();
  },
};

export default Integration;
