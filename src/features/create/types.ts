import { Advantage } from "./step2/model/types";

export interface CreateState {
  step: string;
  advantages: Advantage[];
  checkbox: any;
  radio: string;
}

export enum CreateInputs {
  Phone = "phone",
  Email = "email",
  Nickname = "nickname",
  Name = "name",
  Surname = "surname",
  Sex = "sex",
  Advantages = "advantages",
  AdvantageItem = "advantage-item",
  CheckboxGroup = "checkbox-group",
  RadioGroup = "radio-group",
  About = "about",
}

export enum Validations {
  required = "Поле обязательно для заполнения",
  email = "Пожалуйста, введите корректный Email",
  phone = "Неправильный формат номера",
  phoneMin = "Номер должен состоять из 11 цифр",
  notSpecialSymbols = "Разрешены только буквы и цифры",
  nameMax = "Максимальная длина 50 символов",
  nicknameMax = "Максимальная длина 30 символов",
  onlyAlphabetic = "Разрешены только буквы",
  aboutMax = "Максимальная длина 200 символов",
}
