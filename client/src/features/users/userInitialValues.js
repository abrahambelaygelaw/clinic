import useUser from "../../hooks/useUser";
const userInitialValues = () => {
  const { itemToEdit } = useUser();
  if (itemToEdit) {
    return {
      firstName: itemToEdit.firstName,
      lastName: itemToEdit.lastName,
      username: itemToEdit.username,
      admin: itemToEdit.role == "admin",
      password: itemToEdit.password,
    };
  } else {
    return {
      firstName: "",
      lastName: "",
      username: "",
      admin: false,
      password: "",
    };
  }
};

export default userInitialValues;
