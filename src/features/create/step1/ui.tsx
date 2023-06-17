import { Form, Formik } from "formik";
import { customStyles, initialValues, options } from "./types";
import { Input } from "../../../shared";
import Select from "react-select";

export const Step1: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="form" >
        <Input
          id="field-nickname"
          label="Никнейм"
          name={"nickname"}
          placeholder={"Введите ваш никнейм"}
        />
        <Input
          id="field-name"
          label="Имя"
          name={"name"}
          placeholder={"Введите ваше имя"}
        />
        <Input
          id="field-surname"
          label="Фамилия"
          name={"surname"}
          placeholder={"Введите вашу фамилию"}
        />
        <Select
          id="field-sex"
          options={options}
          placeholder="Не выбрано"
          styles={customStyles}
        />
      </Form>
    </Formik>
  );
};
