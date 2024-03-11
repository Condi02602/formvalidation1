import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(20).required('Please enter your name'),
    lastname:Yup.string().min(2).max(20).required('Please enter your lastname'),
    password:Yup.string().min(2).max(20).required('Please enter your password'),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], 'Password must match'),
    emailAddress:Yup.string().email.required('Please enter your email'),
    birthdayDate:Yup.date().required('Please enter your birthday'),
    phonenumber :Yup.number().min(10).max(10).required('Please enter your phonenumber')
    
})