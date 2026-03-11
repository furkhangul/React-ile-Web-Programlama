import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hosgeldin from "./components/HosGeldiniz"
import Furkan from "./components/Furkan"

createRoot(document.getElementById('root')).render(
    <Hosgeldin />
  ,
)
createRoot(document.getElementById('furkan')).render(
  <Furkan/>
  ,
)
