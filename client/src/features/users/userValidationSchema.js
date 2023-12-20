import * as Yup from "yup";
const userValidationSchema = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    admin: Yup.bool().notRequired(),
  });
};

export default userValidationSchema;
