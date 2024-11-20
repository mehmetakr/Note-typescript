import Form from "../../components/Form"
import { Notedata, Tag } from "../../types";


export type Createpageprops = {



    handleSubmit: (noteData: Notedata) => void,
    createTag: (tags: Tag) => void,
    availableTags: Tag[];
} & Partial<Notedata>;

const Createpage = ({ handleSubmit, availableTags, createTag }: Createpageprops) => {


    return (

        <div className="container py-5">

            <h2>Yeni not oluştur..</h2>

            <Form availableTags={availableTags} handleSubmit={handleSubmit} createTag={createTag} />  </div>

    )

}

export default Createpage