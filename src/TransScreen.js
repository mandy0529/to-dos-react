//screen.js에서
import {useChangeTranslate, useTranslate} from './TransContext';

const TransScreen = () => {
  const setLang = useTranslate();
  const autoChangeLang = useChangeTranslate();

  return (
    <>
      <h1>{autoChangeLang('hi')}</h1>
      <button onClick={() => setLang('ko')}>
        {autoChangeLang('translate')}
      </button>
    </>
  );
};

export default TransScreen;
