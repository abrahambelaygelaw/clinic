export const removeNullFields = (obj) => {
  for (const key in obj) {
    if (obj[key] === null) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      removeNullFields(obj[key]); // Recursively call the function for nested objects
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
  return obj;
};
