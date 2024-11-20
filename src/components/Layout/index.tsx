import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../../types";





interface layoutprops  {

    notes:Note[];


}
const Layout = ({notes}:layoutprops) => {

    
    // 1 ) url den id yi al 

    const {id}  =useParams();

    // 2 ) alınan id eşleşen note u al (yani ondakı id yi al)  eşitle

const found = notes.find((n) => n.id ===id);

    // 3 )note bulunamadıysa anasayfaya yönlendir.


    if (!found)  return <Navigate to={"/"}/>
    // 4 )  alt route ı ekrana bas bulunan noteu route a gore  


    return (
       <Outlet  context={found}/>
    )
}

export default Layout;