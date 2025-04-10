import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const GoogleButton = () => {
  const onSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Login Success:", decoded);
    }
  };
  const onError = () => {
    console.log("Login Failed");
  };
  return (
    <GoogleLogin text="signin_with" onSuccess={onSuccess} onError={onError} />
  );
};
