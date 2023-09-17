import * as yup from "yup";

export const basicSchema = yup.object().shape({
    email: yup.string().email("Valid email required").required("Email required")
})