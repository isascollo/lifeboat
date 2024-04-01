import { Integration } from "./Integration";
import { RegistrationData } from "../models/RegistrationModel";
import { RegistrationResponseModel } from "../models/RegistrationReponseModel";

const MockIntegration: Integration = {
  registerUser(
    requestData: RegistrationData,
  ): Promise<RegistrationResponseModel> {
    // Example condition for success or failure
    const isSuccess = requestData.email.includes("@");

    // Simulating network delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccess) {
          // Simulate successful registration response
          const response: RegistrationResponseModel = {
            success: true,
            message: "Registration successful",
            user: {
              userId: "12345",
              firstName: requestData.firstName,
              lastName: requestData.lastName,
              email: requestData.email,
              mobileNumber: requestData.mobileNumber,
            },
          };
          resolve(response);
        } else {
          // Simulate error response
          const response: RegistrationResponseModel = {
            success: false,
            error: {
              code: "INVALID_EMAIL",
              message: "The provided email is invalid.",
            },
          };
          resolve(response); // Use `resolve` here to simulate a server response; use `reject` for network errors.
        }
      }, 1000); // 1-second delay to simulate network call
    });
  },
};

export default MockIntegration;
