import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    if(Validator.isEmpty(data.email)){
        errors.email = "this field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "invalid email address";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}