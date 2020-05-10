import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const emailVal = data =>{
    let errors = {};

    if(Validator.isEmpty(data.email)){
        errors.email = "This field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid email address";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const accountVal = data => {
    let errors = {};

    if(Validator.isEmpty(data.school_name)){
        errors.school_name = "This field is required";
    }else if(Validator.isEmpty(data.email)){
        errors.email = "This field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid email address";
    }else if(Validator.isEmpty(data.phone_number)){
        errors.phone_number = "This field is required";
    }else if(!Validator.isNumeric(data.phone_number)){
        errors.phone_number = "It must be a number";
    }else if(Validator.isEmpty(data.address)){
        errors.address = "This field is required";
    }else if(Validator.isEmpty(data.about)){
        errors.about = "This field is required";
    }else if(Validator.isEmpty(data.password)){
        errors.password = "This field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const userAddVal = data => {
    let errors = {};

    if(Validator.isEmpty(data.firstname)){
        errors.firstname = "This field is required";
    }else if(Validator.isEmpty(data.lastname)){
        errors.lastname = "This field is required";
    }else if(Validator.isEmpty(data.roleld)){
        errors.roleld = "This field is required";
    }else if(Validator.isEmpty(data.schoolld)){
        errors.schoolld = "This field is required";
    }else if(Validator.isEmpty(data.email)){
        errors.email = "This field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Invalid email address";
    }else if(Validator.isEmpty(data.password)){
        errors.password = "This field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


export default({
    emailVal,
    accountVal,
    userAddVal
})