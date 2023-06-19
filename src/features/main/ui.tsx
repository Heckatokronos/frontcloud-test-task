import { Button, Endpoints, Field, useAppDispatch } from "../../shared";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateInputs } from "features/create/types";
import { useForm } from "react-hook-form";
import { MainType } from "./model/types";
import { mainSchema } from "./model/schema";
import { Steps } from "entities/general";
import { changeStep } from "entities/root/model/rootSlice";

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
    navigate(Endpoints.Form);
  };

  useEffect(() => {
    const phone = localStorage.getItem(CreateInputs.Phone);
    if (phone) setValue(CreateInputs.Phone, phone);

    const email = localStorage.getItem(CreateInputs.Email);
    if (email) setValue(CreateInputs.Email, email);

    dispatch(changeStep(Steps.One));
  }, [dispatch, setValue]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Field
        id="field-phone-number"
        name="Номер телефона"
        label="Номер телефона"
        placeholder="+7 999 999-99-99"
        error={errors.phone?.message}
        control={control}
      />
      <Field
        id="field-email"
        name="Email"
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
  );
};
