# Input Validator

A flexible and powerful input validation library designed to simplify validation for forms and APIs. It provides chainable validation rules and supports validating individual fields or entire objects.

---

## Features

- **Chainable validation rules:** Simplify validation for individual fields.
- **Schema-based validation:** Easily validate objects with multiple fields.
- **Built-in rules:** Includes common validations like string, min/max length, regex, and email.
- **Extensible:** Add custom validation rules as needed.
- **Lightweight:** Minimal dependencies and easy to integrate.

---

## Installation

To use this library, clone the repository or install it as a dependency:

### Clone Repository

````
git clone https://github.com/Abinashshasini/input-validator.git
```

### Validating a Single Field

Use the `Validator` class to validate individual fields with chainable rules.

```javascript
import { Validator } from './path/to/Validator.js';

const validator = new Validator('username')
  .string()
  .min(3, 'Username must be at least 3 characters long.')
  .max(20, 'Username cannot exceed 20 characters.');

const result = validator.validate('ab');
console.log(result);
// Output:
// {
//   isValid: false,
//   errors: 'Username must be at least 3 characters long.'
// }


#### Object Validation Example
```markdown
### Validating an Object

Define a schema with validation rules for each field and validate an object against it.

```javascript
import { Validator } from './path/to/Validator.js';

const schema = {
  username: new Validator('username')
    .string()
    .min(3, 'Username must be at least 3 characters long.')
    .max(20, 'Username cannot exceed 20 characters.'),
  email: new Validator('email')
    .isEmail('Please provide a valid email address.'),
};

const data = {
  username: 'ab',
  email: 'invalid-email',
};

const validator = Validator.object(schema);
const result = validator.parse(data);

console.log(result);
// Output:
// {
//   isValid: false,
//   errors: {
//     username: 'Username must be at least 3 characters long.',
//     email: 'Please provide a valid email address.'
//   }
// }
````
