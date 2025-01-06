/** Function to check for maximum length
 * @param {length} string
 * @param {message} string
 */
export function maxLength(length, message) {
  return (value) => {
    if (value.length > length) {
      return {
        isValid: false,
        errorMessage: message || `Must be at most ${length} characters.`,
      };
    }
    return { isValid: true };
  };
}
