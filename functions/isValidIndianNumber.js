/** Validate if the given phone number is a valid Indian number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - True if valid, False otherwise.
 */
export function isValidIndianNumber(message) {
  return (value) => {
    if (!value || typeof value !== 'number') {
      return {
        isValid: false,
        errorMessage: message || 'Value must be a number.',
      };
    }
    const pattern = /^(\+91[-\s]?|91[-\s]?|0)?[6-9]\d{9}$/;

    if (!pattern.test(phoneNumber.trim())) {
      return {
        isValid: false,
        errorMessage: message || 'Not a valid Indian phone number.',
      };
    }

    return { isValid: true };
  };
}
