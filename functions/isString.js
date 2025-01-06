/** Function to check if value is string or not
 * @param {value} string
 * @param {message} string
 */
export function isString(message) {
  return (value) => {
    if (typeof value !== 'string') {
      return {
        isValid: false,
        errorMessage: message || 'Value must be a string.',
      };
    } else if (value.trim() === '') {
      return {
        isValid: false,
        errorMessage: 'Value must not be empty.',
      };
    }

    return { isValid: true };
  };
}
