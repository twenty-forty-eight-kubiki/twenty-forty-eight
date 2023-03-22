import { IValidatorConfig, TForm, TValidator, validators } from './validators';

export type IValidationSchema = Record<
  string,
  Record<string, IValidatorConfig>
>;

export default class EasyValidator {
  schema: IValidationSchema = {};
  errors: Record<string, string | null> = {};

  constructor(schema: IValidationSchema) {
    this.schema = { ...schema };
  }

  validateField(
    value: string,
    config: Record<string, IValidatorConfig>,
    form: TForm
  ) {
    for (const validatorName in config) {
      const validatorConfig = config[validatorName] as IValidatorConfig;
      const validator: TValidator = validators[validatorName];
      const configuredValidator = validator(validatorConfig, form);
      const errorMessage = configuredValidator(value);

      if (errorMessage) {
        return errorMessage;
      }
    }

    return null;
  }

  validateFields(form: Record<string, string>) {
    const errors = {};
    const keys = Object.keys(form);
    keys.forEach(key => {
      const config = this.schema[key];
      const value = form[key];

      // @ts-ignore
      errors[key] = this.validateField(value, config, form);
    });

    this.errors = errors;
    return errors;
  }

  isValid() {
    const values = Object.values(this.errors);
    return values.every(value => value === null);
  }
}
