/** Function to check for minimum length
 * @param {length} string
 * @param {message} string
 */
export function minLength(length, message) {
  return (value) => {
    if (value && value.length < length) {
      return {
        isValid: false,
        errorMessage: message || `Must be at least ${length} characters.`,
      };
    }
    return { isValid: true };
  };
}
