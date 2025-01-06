/** Function to check if it's a valid email address
 * @param {message} string
 */
export function isEmail(message) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
  return (value) => {
    if (!emailRegex.test(value)) {
      return {
        isValid: false,
        errorMessage: message || 'Invalid email format.',
      };
    }
    return { isValid: true };
  };
}
