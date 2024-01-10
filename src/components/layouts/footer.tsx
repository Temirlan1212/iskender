import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-[#2D82BE] py-[72px]">
      <div className="container px-[55px] pb-[100px]">
        <div className="flex flex-wrap gap-[100px] justify-between">
          <div className="flex flex-col gap-[42px]">
            <ReactSVG
              src="footer-logo.svg"
              className="cursor-pointer text-white"
            />
            <p className="max-w-[230px] text-white !text-[14px]">
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </p>

            <div className="flex gap-[10px] mt-[30px] flex-wrap">
              <ReactSVG
                src="apple-store.svg"
                className="cursor-pointer text-white"
              />
              <ReactSVG
                src="google-play.svg"
                className="cursor-pointer text-white"
              />
            </div>
          </div>

          <div className="flex gap-x-[155px] gap-y-[50px] flex-wrap">
            <div className="text-white flex flex-col gap-[40px]">
              <h2 className="font-bold text-[20px]">Адреса</h2>
              <ul className="flex flex-col gap-[20px]">
                <li className="flex flex-col gap-[3px]">
                  <span className="font-thin">ЭлитСтрой</span>
                  <a href="#">ул. Ден-Сяопина 18/1</a>
                </li>
                <li className="flex flex-col gap-[3px]">
                  <span className="font-thin">Баткен</span>
                  <a href="#">ул. Льва-Толстого 19</a>
                </li>
                <li className="flex flex-col gap-[3px]">
                  <span className="font-thin">ТааТан</span>
                  <a href="#">ул. Ден-Сяопина 18/1</a>
                </li>
              </ul>
            </div>

            <div className="text-white flex flex-col gap-[40px]">
              <h2 className="font-bold text-[20px]">Компания</h2>
              <ul className="flex flex-col gap-[20px]">
                <li className="flex flex-col gap-[3px]">
                  <a href="#" className="font-thin">
                    Каталог
                  </a>
                </li>
                <li className="flex flex-col gap-[3px]">
                  <a href="#" className="font-thin">
                    Избранное
                  </a>
                </li>
                <li className="flex flex-col gap-[3px]">
                  <a href="#" className="font-thin">
                    Личный кабинет
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-white flex flex-col gap-[40px]">
              <h2 className="font-bold text-[20px]">Контакты</h2>
              <ul className="flex flex-col gap-[20px]">
                <li className="flex flex-col gap-[3px]">
                  <span className="font-thin">Email:</span>
                  <a href="#">iskender.kg@gmail.com</a>
                </li>
                <li className="flex flex-col gap-[3px]">
                  <span className="font-thin">Телефон:</span>
                  <a href="#">+996 (500) 000-104</a>
                  <a href="#">+996 (997) 000-104</a>
                  <a href="#">+996 (222) 000-104</a>
                </li>
              </ul>
              <ReactSVG
                src="whatsapp.svg"
                className="cursor-pointer text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="w-full h-[2px] bg-white/20 my-[55px]" />
        <div className="flex gap-[30px] justify-between flex-wrap">
          <span className="text-white font-thin text-white/50">
            © 2023 Iskender.kg - Отечественный бренд сантехники
          </span>
          <div className="flex gap-[10px]">
            <ReactSVG
              src="instagram.svg"
              className="cursor-pointer text-white/50 hover:text-white"
            />
            <ReactSVG
              src="facebook.svg"
              className="cursor-pointer text-white/50 hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
