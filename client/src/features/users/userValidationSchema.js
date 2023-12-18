import * as Yup from "yup";
const userValidationSchema = (createMode) => {
  if (createMode) {
    return Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      passord: Yup.string().required("Required"),
      admin: Yup.bool(),
    });
  } else {
    return Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      username: Yup.string().required("Required"),
      admin: Yup.bool(),
    });
  }
};

export default userValidationSchema;
