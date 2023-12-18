import * as Yup from "yup";
const transactionValidationSchema = Yup.object().shape({
  place: Yup.string().required("place is required"),
  documentRef: Yup.string(),
  in: Yup.number()
    .min(0, "Minimum value must be at least 0")
    .required("in value is required"),
  out: Yup.number()
    .min(0, "Minimum value must be at least 0")
    .required("out value is required"),
  expDate: Yup.date().required("date is required"),
  batchNo: Yup.string(),
  remark: Yup.string(),
});

export default transactionValidationSchema;
