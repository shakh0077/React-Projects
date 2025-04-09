import WebLogo from '../assets/Logo Web.png'
import { useContext, useRef } from 'react';
import { CartContext } from '../Feature/ContextProvider'
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';

function Footer() {
  const { lang, setLang } = useContext(CartContext) || {
    cart: [],
    lang: "en",
    setLang: () => {},
  };

  const { t } = useTranslation();

  const emailRef = useRef(null);

  const sendMessageToTelegram = async () => {
    const email = emailRef.current?.value;
  
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    if (!email || !isValidEmail) {
      toast.error("❌ Email manzili noto‘g‘ri! Iltimos, to‘g‘ri email kiriting.");
      return;
    }
  
    const BOT_TOKEN = "7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0";
    const CHAT_ID = "7426153375";
    const message = `📩 Yangi obunachi: ${email}`;
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
  
      const data = await response.json();
      if (data.ok) {
        toast.success("Xabar Telegramga yuborildi!");
        emailRef.current.value = "";
      } else {
        toast.error("🚫 Telegram xatosi: " + data.description);
      }
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Tarmoqda muammo! Qaytadan urinib ko‘ring.");
    }
  };

  return (
    <>
      <div className='mt-[150px] mb-10 text-center px-5 w-full mx-auto lg:max-w-[1440px] lg:text-start'>
        <div className='flex flex-col gap-10 items-center lg:flex-row lg:gap-20'>
          <div className='w-[300px]'>
            <img className='w-[320px]' src={WebLogo} alt="" />
            <h2 className='text-xl font-semibold leading-6 text-gray-700'>{t("footer.description")}</h2>
          </div>
          <div className='w-[200px]'>
            <h1 className='text-2xl font-extrabold text-gray-800'>{t("footer.menu")}</h1>
            <div className='flex flex-col gap-1 px-4'>
              <HashLink className='text-xl font-semibold text-gray-600' to={'/#'}>{t("footer.home")}</HashLink>
              <HashLink className='text-xl font-semibold text-gray-600' to={'/collection#'}>{t("footer.collection")}</HashLink>
              <HashLink className='text-xl font-semibold text-gray-600' to={'/about#'}>{t("footer.about")}</HashLink>
              <HashLink className='text-xl font-semibold text-gray-600' to={'/contacts#'}>{t("footer.contacts")}</HashLink>
            </div>
          </div>
          <div className='w-[300px] lg:w-[330px]'>
            <h1 className='text-2xl font-extrabold text-gray-800'>{t("footer.contacts")}</h1>
            <h2 className='text-xl font-normal text-gray-600'>{t("footer.email")}</h2>
            <h2 className='text-xl font-normal text-gray-600'>{t("footer.telegram")}</h2>
            <h2 className='text-xl font-normal text-gray-600'>{t("footer.subscribe")}</h2>
            <a href="tel:+998940337212">
              <h2 className='text-xl font-normal text-gray-600'>+998 94 033 72 12</h2>
            </a>
          </div>
          <div className='w-[290px] relative flex flex-col gap-3 lg:w-[380px]'>
            <h1 className='text-2xl font-extrabold text-gray-800'>{t("footer.inputPlaceholder")}</h1>
            <input
              type="text"
              ref={emailRef}
              placeholder='Email'
              className='pl-4 py-3 w-[300px] text-xl border rounded-xl lg:w-[340px]'
            />
            <button
              onClick={sendMessageToTelegram}
              className='text-xs cursor-pointer bg-red-500 rounded text-white px-3 py-2 absolute top-14 right-0 lg:top-13.5 lg:right-9'
            >
              {t("footer.submit")}
            </button>
            <h2 className='text-base font-medium text-gray-700'>{t("footer.selectWarning")}</h2>
          </div>
        </div>
      </div>
      <div className='bg-black py-5'>
        <div className='px-5 w-full mx-auto lg:max-w-[1440px]'>
          <h1 className='text-gray-600'>{t("footer.copyright")}</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
