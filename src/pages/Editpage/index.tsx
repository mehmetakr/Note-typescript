import { useOutletContext } from "react-router-dom"
import { Note, Notedata, Tag } from "../../types";
import Form  from "../../components/Form";
type Editnoteprops = {

    onSubmit: (id: string, updateData: Notedata) => void,
    createTag: (tag: Tag) => void;
    availableTags: Tag[];

}


const Editpage = ({ onSubmit, createTag, availableTags }: Editnoteprops) => {


    const found: Note = useOutletContext();

    return (

        <div className="container py-5">

            <h1>Note'u Düzenle</h1>
            <Form handleSubmit={(updateNote) => onSubmit(found.id, updateNote)}
                availableTags={availableTags}
                title={found.title}
                markdown={found.markdown}
                createTag={createTag} />

        </div>
    )

}

export default Editpage