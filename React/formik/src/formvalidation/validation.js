import { object, string , ref } from "yup";

const validations = object({
  email: string().email("Lütfen geçerli bir email giriniz").required("Zorunlu alan"),
  password: string().min(5,"Parolanız en az 5 karakter uzunluğunda olmalı").required(),
  passwordConfirm: string().oneOf([ref("password")],"Parolanız eşleşmiyor").required()
});

export default validations;
