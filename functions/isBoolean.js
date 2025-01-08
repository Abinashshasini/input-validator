/** Function to check if value is string or not
 * @param {message} string
 */
export function isBoolean(message) {
  return (value) => {
    if (!value || typeof value !== 'boolean') {
      return {
        isValid: false,
        errorMessage: message || 'Value must be a boolean.',
      };
    }

    return { isValid: true };
  };
}
