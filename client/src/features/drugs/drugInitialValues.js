import useDrug from "../../hooks/useDrug";

const drugInitialValues = () => {
  const { itemToEdit } = useDrug();
  if (itemToEdit) {
    return {
      name: itemToEdit.name,
      strength: itemToEdit.strength,
      min: itemToEdit.min,
      max: itemToEdit.max,
      stockCardNo: itemToEdit.stockCardNo,
      location: itemToEdit.location,
      itemCode: itemToEdit.itemCode,
    };
  } else {
    return {
      name: "",
      strength: "",
      min: 0,
      max: 0,
      stockCardNo: "",
      location: "",
      itemCode: "",
    };
  }
};

export default drugInitialValues;
