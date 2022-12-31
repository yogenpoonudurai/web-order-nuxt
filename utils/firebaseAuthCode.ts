const firebaseAuthErrors: { [key: string]: string } = {
  "auth/app-deleted": "This app has been deleted",
  "auth/app-not-authorized":
    "This app is not authorized to use Firebase Authentication",
  "auth/argument-error": "An argument error occurred",
  "auth/invalid-api-key": "The API key provided is invalid",
  "auth/invalid-user-token":
    "The user's credential is no longer valid. The user must sign in again",
  "auth/network-request-failed": "A network error occurred",
  "auth/operation-not-allowed": "The requested operation is not allowed",
  "auth/requires-recent-login":
    "This operation is sensitive and requires recent authentication. Log in again before retrying this request",
  "auth/too-many-requests":
    "We have blocked all requests from this device due to unusual activity. Try again later",
  "auth/unauthorized-domain":
    "This domain is not authorized for OAuth operations",
  "auth/user-disabled": "The user account has been disabled",
  "auth/user-not-found":
    "There is no user record corresponding to this identifier",
  "auth/user-token-expired":
    "The user's credential is no longer valid. The user must sign in again",
  "auth/web-storage-unsupported": "This browser is not supported",
  "auth/invalid-email": "The email address is badly formatted",
  "auth/invalid-password":
    "The password is invalid or the user does not have a password",
  "auth/invalid-phone-number": "The phone number is invalid",
  "auth/missing-email": "An email address must be provided",
  "auth/missing-password": "A password must be provided",
  "auth/missing-phone-number": "A phone number must be provided",
  "auth/phone-number-already-exists":
    "The phone number is already in use by another account",
  "auth/weak-password": "The password is not strong enough",
};

export default function getAuthErrorMessage(code: string) {
  return firebaseAuthErrors[code] || "Unknown error";
}
