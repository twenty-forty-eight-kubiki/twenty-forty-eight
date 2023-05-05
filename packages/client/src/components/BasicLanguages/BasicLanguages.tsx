import { useState } from 'react';
import './BasicLanguages.scss';

const BasicLanguages = () => {
  const languages = ['RU', 'ENG'];
  const [lang, setLang] = useState('RU');

  const toggleLang = (code: string) => {
    if (code !== lang) setLang(code);
  };

  return (
    <div className='basic-languages'>
      {languages.map((item, index) => {
        return (
          <div
            key={index}
            className={`basic-languages__language${
              lang === item ? ' basic-languages__language--active' : ''
            }`}
            onClick={() => toggleLang(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default BasicLanguages;
