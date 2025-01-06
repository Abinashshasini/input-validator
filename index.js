import {
  isString,
  isEmail,
  maxLength,
  minLength,
  regex,
} from './functions/index.js';

export class Validator {
  constructor(filedName = '') {
    this._rules = [];
    this.name = filedName;
  }

  string(message) {
    this._rules.push(isString(message));
    return this;
  }

  min(length, message) {
    this._rules.push(minLength(length, message));
    return this;
  }

  max(length, message) {
    this._rules.push(maxLength(length, message));
    return this;
  }

  regex(pattern, message) {
    this._rules.push(regex(pattern, message));
    return this;
  }

  isEmail(message) {
    this._rules.push(isEmail(message));
    return this;
  }

  /** Method to validate a single field */
  validate(value) {
    let errors = '';

    for (const rule of this._rules) {
      const result = rule(value);
      if (!result.isValid) {
        errors = result.errorMessage;
        break;
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /** Method to validate an object with field rules which tore schema as rules for object validation */
  static object(schema) {
    const validator = new Validator();
    validator._objectSchema = schema;
    return validator;
  }

  /** Method to validate an object using the schema */
  parse(data) {
    if (!this._objectSchema) {
      throw new Error('parse can only be called on an object schema.');
    }

    const errors = {};
    let isValid = true;

    for (const field in this._objectSchema) {
      const fieldValidator = this._objectSchema[field];
      const value = data[field];

      const fieldResult = fieldValidator.validate(value);

      if (!fieldResult.isValid) {
        isValid = false;
        errors[field] = fieldResult.errors;
      }
    }

    return {
      isValid,
      errors,
    };
  }
}

//he;;sjndj
