import { Button, Field, useAppDispatch } from "../../shared";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateInputs } from "features/create/types";
import { useForm } from "react-hook-form";
import { MainType } from "./model/types";
import { mainSchema } from "./model/schema";
import { changeStep } from "entities/root/model/rootSlice";
import { Routes, Steps } from "entities/root";

import styles from "./ui.module.scss";

export const MainComponent: React.FC = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<MainType>({
    defaultValues: {
      phone: "",
      email: "",
    },
    resolver: yupResolver(mainSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = () => {
    localStorage.setItem("phone", control._getWatch("phone"));
    localStorage.setItem("email", control._getWatch("email"));
    navigate(Routes.Form);
  };

  useEffect(() => {
    const phone = localStorage.getItem(CreateInputs.Phone);
    if (phone) setValue(CreateInputs.Phone, phone);

    const email = localStorage.getItem(CreateInputs.Email);
    if (email) setValue(CreateInputs.Email, email);

    dispatch(changeStep(Steps.One));
  }, [dispatch, setValue]);

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <Field
          id="phone"
          name="phone"
          label="Номер телефона"
          placeholder="+7 999 999-99-99"
          error={errors.phone?.message}
          control={control}
        />
        <Field
          id="email"
          name="email"
          label="Email"
          placeholder="tim.jennings@example.com"
          error={errors.email?.message}
          control={control}
        />
        <Link to="/create">
          <Button type="submit" id="button-start" variant="primary">
            Начать
          </Button>
        </Link>
      </form>
    </main>
  );
};
