import * as Yup from "yup";
import continueFormModel from "./continueFormModel";
const {
  formField: { schoolName, email, phone, address, about, password },
} = continueFormModel;

export default [
  Yup.object().shape({
    [schoolName.name]: Yup.string().required(`${schoolName.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [email.name]: Yup.string().nullable(),
  }),
  Yup.object().shape({
    [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [about.name]: Yup.string().required(`${about.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  }),
];
