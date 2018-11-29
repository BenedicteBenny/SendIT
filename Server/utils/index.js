import validator from 'validator';



const validateUser = ({userName, email, password}) => {
    const errors = {};
    if(!userName){
        errors.userName =  'User is required';
    } else if (!validator.isLength(userName, { min: 3, max: 10 }) && !validator.isAlpha(userName)) {
        errors.userName = 'Username should not be 3 chars less and not more than 10 chars'
    }

    if(!email) {
        errors.email = "Email is require"
    }else if(!validator.isEmail(email)) {
        errors.email = "Not  a valid email"
    }

    if(!password) {
        errors.password = "Password is required"
    }

    return errors;
};


const validateParcel = ({parcelName, pickup ,destination,weight }) => {
    const errors = {};
    if(!parcelName){
        errors.parcelName =  'User is required';
    } else if (!validator.isLength(parcelName, { min: 3, max: 10 }) && !validator.isAlpha(parcelName)) {
        errors.parcelName = 'Username should not be 3 chars less and not more than 10 chars'
    }

    if(!pickup) {
        errors.pickup = "Pick up location is require"
    }else if(!validator.isEmail(pickup)) {
        errors.pickup = "Not  a valid pickup location"
    }

    if(!destination) {
        errors.destination = "Destination location is require"
    }

    if(!weight) {
        errors.weight = "Weight is require"
    }

    return errors;
};

const validateUserId = (userId) => {
    const errors ={}
    if(!userId) {
        errors.userId = 'Id is required '
    } else if (!validator.isNumeric(userId)){
        errors.userId= 'The id must be a number'
    }
    
    return errors;
}


module.exports = {
    validateUser,
    validateUserId
}