import { useContext } from 'react'
import DrugContext from "../context/DrugProvider"
const useDrug = () => {
  return useContext(DrugContext)
}

export default useDrug