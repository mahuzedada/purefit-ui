import useNext from "../useNext.ts";
import { useTranslation } from 'react-i18next';
import {useContext} from "react";
import {QuestionContext} from "../context";
import emptyResponse from "../constants/emptyResponse";

const lngs: any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function Home(): React.ReactElement {
  const next = useNext();
  const { t, i18n } = useTranslation();
  const { setAnswers, setStoredMeals } = useContext(QuestionContext);
  function start() {
    setAnswers(emptyResponse);
    setStoredMeals(null);
    next();
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center items-center">
      <div className="text-center">
        <p className=" text-3xl text-white mt-4 uppercase">
          {t('home.title')}
        </p>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-xl shadow-lg text-center">
        <p className="quoted-paragraph">"Achieving good health shouldn't mean giving up good taste."</p>
      </div>
      <div className="w-full">
        <p className="text-white font-bold mb-3 text-center">
                Build personalized tasty recipes now!
        </p>
        <button
          onClick={start}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg w-full"
        >
                Start
        </button>
      </div>
      <div className="mt-auto text-transparent">
        {Object.keys(lngs).map((lng: string, idx) => (
          <button key={idx} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
