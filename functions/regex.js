/** Function to test the pattern on the value
 * @param {pattern} string
 * @param {message} string
 */
export function regex(pattern, message) {
  return (value) => {
    if (!pattern.test(value)) {
      return { isValid: false, errorMessage: message || 'Invalid format.' };
    }
    return { isValid: true };
  };
}
