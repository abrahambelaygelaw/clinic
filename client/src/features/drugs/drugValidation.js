import * as Yup from "yup";

const drugValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  strength: Yup.string().required("Strength is required"),
  min: Yup.number()
    .required("Minimum value is required")
    .min(0, "Minimum value must be at least 0"),
  max: Yup.number()
    .required("Maximum value is required")
    .moreThan(
      Yup.ref("min"),
      "Maximum value must be greater than Minimum value"
    ),
  stockCardNo: Yup.string(),
  location: Yup.string(),
  itemCode: Yup.string(),
});

export default drugValidationSchema;
