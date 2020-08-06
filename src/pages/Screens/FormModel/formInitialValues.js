import continueFormModel from './continueFormModel';
const {
  formField: {
    schoolName,
    email,
    phone,
    address,
    about,
    password
  }
} = continueFormModel;

export default {
  [schoolName.name]: '',
  [email.name]: '',
  [phone.name]: '',
  [address.name]: '',
  [about.name]: '',
  [password.name]: '',

};
