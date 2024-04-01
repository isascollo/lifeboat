export interface RegistrationResponseModel {
  success: boolean;
  message?: string; // Success message or general message
  user?: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
  };
  error?: {
    code: string;
    message: string;
  };
}
