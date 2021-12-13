// import * as yup from "yup";
const yup = require("yup");

const userSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("This is not a valid email address").required("Email is a required field"),
    message: yup.string().max(100, "The message can not be greater than 100 characters").required("Message is a required field"),
})

userSchema
    .validate({
        name: 'jimmy',
        email: "asdlfjkmail.com",
        message: ";sdfasdfasdfadsfasdfasdfasdfasdfasdfasdfadfasdfasdfasfasdfasfasdfasdfasdfasdfasdfasdfa;asdfasfasdffgdfaasfasfasfsfasdfsaasasdfasdfasd;falksjdf"

    }, { abortEarly: false })
    .then(function(valid) {
        console.log("Form submitted successfully")
    })
    .catch(function(e) {
        console.log({ errors: e.errors })
        console.log({ e })
    })