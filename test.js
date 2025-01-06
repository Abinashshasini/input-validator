export default class Validator {
  constructor() {
    this.validations = []; // Store validation functions
    this.errors = [];
    this.isValid = true;
  }

  // Chainable method to validate as a string
  string() {
    this.validations.push(Validator.isString);
    return this;
  }

  // Chainable method for 'min' validation
  min(length, message) {
    this.validations.push(Validator.min(length, message));
    return this;
  }

  // Chainable method for 'max' validation
  max(length, message) {
    this.validations.push(Validator.max(length, message));
    return this;
  }

  // Chainable method for email validation
  isEmail(message) {
    this.validations.push(Validator.isEmail(message));
    return this;
  }

  // Chainable method for phone number validation
  isPhoneNumber(message) {
    this.validations.push(Validator.isPhoneNumber(message));
    return this;
  }

  // Run all validations and return the result
  parse(value) {
    this.errors = [];
    this.isValid = true;

    for (const validation of this.validations) {
      const result = validation(value);
      if (!result.isValid) {
        this.isValid = false;
        this.errors.push(result.errorMessage);
        break; // Stop at the first error
      }
    }

    return {
      isValid: this.isValid,
      errors: this.errors.length > 0,
      errorMessage: this.errors.length > 0 ? this.errors[0] : null,
    };
  }

  // Internal static method to check if value is a string
  static isString(value) {
    if (typeof value !== 'string') {
      return { isValid: false, errorMessage: 'Value must be a string.' };
    }
    return { isValid: true };
  }

  // Internal static method for min length validation
  static min(length, message) {
    return (value) => {
      if (value.length < length) {
        return {
          isValid: false,
          errorMessage:
            message || `Value must be at least ${length} characters.`,
        };
      }
      return { isValid: true };
    };
  }

  // Internal static method for max length validation
  static max(length, message) {
    return (value) => {
      if (value.length > length) {
        return {
          isValid: false,
          errorMessage:
            message || `Value must be at most ${length} characters.`,
        };
      }
      return { isValid: true };
    };
  }

  // Internal static method for email validation
  static isEmail(message) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (value) => {
      if (!emailRegex.test(value)) {
        return {
          isValid: false,
          errorMessage: message || 'Email must be a valid email address.',
        };
      }
      return { isValid: true };
    };
  }

  // Internal static method for phone number validation (Indian numbers)
  static isPhoneNumber(message) {
    const phoneRegex = /^[6789]\d{9}$/; // Indian phone number regex
    return (value) => {
      if (!phoneRegex.test(value)) {
        return {
          isValid: false,
          errorMessage:
            message ||
            'Phone number must be a valid Indian phone number (10 digits, starting with 7, 8, or 9).',
        };
      }
      return { isValid: true };
    };
  }
}
