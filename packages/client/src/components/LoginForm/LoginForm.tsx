import { FormEvent, ReactElement, useState } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { useHistory } from 'react-router-dom';

import { authAPI } from '../../api/authApi';
import { LoginRequestData } from '../../types/api/authApi';
import { LoginErrorsObj, LoginFormFields } from '../../types/form';
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator';
import GuiInput from '../../ui/GuiInput/GuiInput';
import GuiButton from '../../ui/GuiButton/GuiButton';
import GuiLink from '../../ui/GuiLink/GuiLink';
import TextError from '../../ui/TextError/TextError';
import './LoginForm.scss';
import { fetchUser } from '../../store/auth-actions';
import { RoutePath } from '../../router/RoutePath';
import { oathAPI } from '../../api/oathApi';
import { OAUTH_REDIRECT_URI } from '../../constants';

const LoginForm = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginErrorsObj>({
    login: null,
    password: null
  });
  const [formError, setFormError] = useState('');
  const history = useHistory();

  const schema: IValidationSchema = {
    login: {
      isRequired: { msg: 'Это поле обязательно для заполнения' }
    },
    password: {
      isRequired: { msg: 'Это поле обязательно для заполнения' }
    }
  };

  const easyValidator = new EasyValidator(schema);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errorsObj = easyValidator.validateFields({ login, password });

    setErrors({ ...errorsObj });

    if (easyValidator.isValid()) {
      const loginData: LoginRequestData = {
        login: login,
        password: password
      };

      authAPI
        .login(loginData)
        .then(() => dispatch(fetchUser()))
        .then(() => {
          history.push(RoutePath.User);
        })
        .catch((error: string) => {
          setFormError(error);
        });
    }
  };

  const onChangeLogin = (e: FormEvent) => {
    setLogin((e.target as HTMLInputElement).value);
  };

  const onChangePassword = (e: FormEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const resetError = (type: LoginFormFields) => {
    const errorsObj = { ...errors, [type]: '' } as LoginErrorsObj;
    setErrors(errorsObj);
    setFormError('');
  };

  const onYandexAuthClick = () => {
    const redirect = { redirect_uri: OAUTH_REDIRECT_URI };
    oathAPI.getServiceID(redirect).then(response => {
      window.location.replace(
        `https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${OAUTH_REDIRECT_URI}`
      );
    });
  };

  return (
    <div className='login-form'>
      <div className='login-form__inner'>
        <div className='login-form__wrapper'>
          <div>
            <h1 className='login-form__title'>Войти</h1>

            <div className='login-form__text'>Добро пожаловать в 2048!</div>
          </div>

          <form onSubmit={onSubmit}>
            <GuiInput
              label='Логин'
              placeholder='Введите логин'
              value={login}
              error={errors[LoginFormFields.Login]}
              onChange={onChangeLogin}
              onBlur={() => resetError(LoginFormFields.Login)}
              onFocus={() => resetError(LoginFormFields.Login)}
            />

            <GuiInput
              label='Пароль'
              placeholder='Введите пароль'
              value={password}
              type='password'
              error={errors[LoginFormFields.Password]}
              onChange={onChangePassword}
              onBlur={() => resetError(LoginFormFields.Password)}
              onFocus={() => resetError(LoginFormFields.Password)}
            />

            <GuiButton
              type='submit'
              btnText='Войти'
              className='login-form__btn'
            />
            <GuiButton
              type='button'
              btnText='Вход через Яндекс'
              className='login-form__btn login-form__btn--yandex'
              onClick={onYandexAuthClick}
            />
            <TextError text={formError} />
            <div className='login-form__info'>
              Нет аккаунта?{' '}
              <GuiLink url='/registration' text='Зарегистрироваться' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
