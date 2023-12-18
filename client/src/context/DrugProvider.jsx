import React, {  createContext ,useState} from 'react'
const DrugContext = createContext()
export const DrugProvider = ({children}) => {
    const [itemToDelte, setItemToDelete] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [showForm, setShowForm] = useState(false);
  return (
    <DrugContext.Provider value={{    
        itemToDelte,
        setItemToDelete,
        showForm,
        setShowForm,
        itemToEdit,
        setItemToEdit}}>
        {children}
    </DrugContext.Provider>
  )
}

export default DrugContext