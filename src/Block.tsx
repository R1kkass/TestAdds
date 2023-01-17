import { FC, useState } from "react";

interface IBlock {
  disabl?: boolean;
  name: string;
  weight: string;
  message: string;
  count: number[];
  advice?: boolean;
}

const Block: FC<IBlock> = ({
  count,
  disabl,
  name,
  weight,
  message,
  advice
}) => {
  const [bol, setBol] = useState<boolean>(false);
  const [text, setText] = useState<string>("Сказочное заморское яство");

  const toggleText = () => {
    setBol((p) => !p);
    setText("Сказочное заморское яство");
  };

  if (bol) {
    return (
      <>
        <div
          onMouseOut={() => setText("Котэ не одобряет?")}
          onMouseOver={() => setText("Сказочное заморское яство")}
          onClick={() => toggleText()}
          className="Block__main_check"
        >
          <div className="Block__container_check">
            <div className="Block__unit">
              <h3
                className={`Block__mainText ${
                  text.includes("?") ? "hov_mainText" : ""
                } `}
              >
                {text}
              </h3>
              <h1 className="Block__mainText">Нямушка</h1>
              <h2 className="Block__mainText">С {name}</h2>
              <h4 className="Block__mainText">
                {count[0]} порций
                <br />
                {count[1] === 1
                  ? "мышь в подарок"
                  : `${count[1]} мыши в подарок`}
                <br />
                {advice ? "заказчик доволен" : ""}
              </h4>
              <img src="Photo.png" alt="Котик" />
              <div className="Block__circle_check">
                <span>{weight}</span>
                КГ
              </div>
            </div>
          </div>
          <p onClick={(e) => e.stopPropagation()}>{message}</p>
        </div>
      </>
    );
  }

  if (disabl) {
    return (
      <>
        <div className="Block__main_disable">
          <div className="Block__container disabl_main">
            <div className="Block__unit disabl">
              <h3 className="Block__mainText disabl">
                Сказочное заморское яство
              </h3>
              <h1 className="Block__mainText disabl">Нямушка</h1>
              <h2 className="Block__mainText disabl">С {name}</h2>
              <h4 className="Block__mainText disabl">
                {count[0]} порций
                <br />
                {count[1] === 1
                  ? "мышь в подарок"
                  : `${count[1]} мыши в подарок`}
                <br />
                {advice ? "заказчик доволен" : ""}
              </h4>
              <img src="Photo.png" alt="Котик" />
              <div className="Block__circle_disable">
                <span>{weight}</span>
                КГ
              </div>
            </div>
          </div>
          <p>Печалька, с {name} закончился.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div onClick={() => setBol((p) => !p)} className="Block__main">
        <div className="Block__container">
          <div className="Block__unit">
            <h3 className="Block__mainText ">Сказочное заморское яство</h3>
            <h1 className="Block__mainText">Нямушка</h1>
            <h2 className="Block__mainText">С {name}</h2>
            <h4 className="Block__mainText">
              {count[0]} порций
              <br />
              {count[1] === 1 ? "мышь в подарок" : `${count[1]} мыши в подарок`}
              <br />
              {advice ? "заказчик доволен" : ""}
            </h4>
            <img src="Photo.png" alt="Котик" />
            <div className="Block__circle">
              <span>{weight}</span>
              КГ
            </div>
          </div>
        </div>
        <p onClick={(e) => e.stopPropagation()}>
          Чего сидишь? Порадуй котэ,
          <span onClick={() => setBol((p) => !p)}>купи.</span>
        </p>
      </div>
    </>
  );
};

export default Block;
