import { Button } from "../Button/Button";
import "./Modal.scss";

export const Modal: React.FC = ({}, props) => {

  const ModalSuccess = (
    <div className="sucess">
      <h1>Форма успешно отправлена</h1>
      <Button type="button" id="button-to-main">
        На главную
      </Button>
    </div>
  );

  const ModalFailed = (
    <div className="failed">
      <h1>Ошибка</h1>
      <Button type="button" id="button-close">
        Закрыть
      </Button>
    </div>
  );

  return <div></div>;
};
