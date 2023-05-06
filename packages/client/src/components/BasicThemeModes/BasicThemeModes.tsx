import lightMode from '../../assets/icons/light_mode.svg';
import darkMode from '../../assets/icons/dark_mode.svg';
import './BasicThemeModes.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';

const BasicThemeModes = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const modes = [
    {
      code: 'light',
      name: 'Light',
      icon: lightMode
    },
    {
      code: 'dark',
      name: 'Dark',
      icon: darkMode
    }
  ];

  const toggleTab = (code: string): void => {
    if (code !== theme) {
      toggleTheme(code);
    }
  };

  return (
    <div className={`basic-theme-modes ${theme}`}>
      <span className='basic-theme-modes__switch-box'></span>

      {modes.map((item, index) => {
        return (
          <div
            key={index}
            className='basic-theme-modes__switch-wrapper'
            onClick={() => toggleTab(item.code)}
          >
            <div className='basic-theme-modes__switch-item basic-theme-modes__switch-item--active'>
              <img
                src={item.icon}
                className='basic-theme-modes__switch-item-icon'
              />

              <span>{item.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BasicThemeModes;
