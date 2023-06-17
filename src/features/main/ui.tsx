import { Formik, Form } from "formik";
import { Button, Input } from "../../shared";
import { initialValues } from "./types";
import "./ui.scss";
import { Link } from "react-router-dom";

export const MainComponent: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="form">
        <Input
          id="field-phone-number"
          name="Номер телефона"
          label="Номер телефона"
          placeholder="+7 999 999-99-99"
        />
        <Input
          id="field-email"
          name="Email"
          label="Email"
          placeholder="tim.jennings@example.com"
        />
        <Link to="/create">
          <Button type="submit" id="button-start" className="button-primary">
            Начать
          </Button>
        </Link>
      </Form>
    </Formik>
  );
};
