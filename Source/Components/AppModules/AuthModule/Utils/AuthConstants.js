export const AUTH_CONSTANTS = {
  EMAIL: "Email",
  USER_LOGIN: "User login",
  AT: "@",
  PASSWORD: "Password",
  PASSWORD_ERROR_TEXT:
    "Password must be 8 character or longer, have an uppercase, lowercase and special character",
  EMAIL_ERROR_TEXT: "Please enter a valid Email",
  NOT_YET_REGISTERED: "Not yet Registered?",
  REGISTER: "Register",
  LOGIN: "Login",
  USER_NAME: "User name",
  PHONE: "Phone",
  CITY: "City",
  USER_DETAILS: "User Details",
  LOGOUT: "Logout",
  USER_NAME_ERROR_TEXT: "Username cannot be empty",
  PHONE_ERROR_TEXT: "Phone enter a valid mobile number",
  CITY_ERROR_TEXT: "Enter a city name",
  USER_NAME_OR_PASSWORD_INVALID: 'Username or Password Invalid'
};

export const REGEX_PATTERN = {
  EMAIL_PATTERN: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
  PASSWORD_PATTERN:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  PHONE_PATTERN: "^[0-9]{10}$"
};
