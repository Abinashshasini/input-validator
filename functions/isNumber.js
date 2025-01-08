/** Function to check if value is string or not
 * @param {message} string
 */
export function isNumber(message) {
  return (value) => {
    if (value && typeof value !== 'number') {
      return {
        isValid: false,
        errorMessage: message || 'Value must be a number.',
      };
    }

    return { isValid: true };
  };
}
