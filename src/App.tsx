import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mainpage from "./pages/Mainpage/index";
import Createpage from "./pages/Createpage"
import Detailpage from "./pages/Detailpage"
import Editpage from "./pages/Editpage"
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, Notedata, Tag } from "./types"
import { v4 } from "uuid"
import Layout from "./components/Layout";
// App componenti, createpage, editpage, detailpage, ve mainpage'yi
const App = () => {


  // sayfa yenilendigi zaman verilerin kaybolmasını 
  // istemıyorsak verileri localstorage adında bir 
  //yapay  veritabanında tutmalıyız..  

  const [notes, setnotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, settags] = useLocalStorage<Tag[]>("tags", []);


  // yeni etiket olusturma 
  const createtag = (tag:Tag): void => {


    settags((prev) => [...prev, tag]);
  }


  // yen, note olusturma > id sini ekle 

  const createnote = (notedata: Notedata): void => {

    // objeye id özelliği ekle 

    const newnote: Note = {


      id: v4(),
      ...notedata,
    };

    setnotes((prev) => [...prev, newnote]);
  }



  // note u sil 

  const deletenote = (id: string) => {


    setnotes((prev) => prev.filter((n) => n.id !== id));
  }

  // note u güncelle

  const updateNote = (id: string, updateData: Notedata) => {
    const updated = notes.map((note) =>
      note.id === id ? { id, ...updateData } : note
    );
    setnotes(updated);
  };


  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage notes={notes} availableTags={tags} />} />
        <Route path="/new" element={<Createpage handleSubmit={createnote} createTag={createtag} availableTags={tags} />} />


        <Route path="/:id" element={<Layout notes={notes} />}>

          <Route
            index
            element={
              <Detailpage deletenote={deletenote} />}


          />
          <Route path="edit"
            element={<Editpage availableTags={tags} createTag={createtag} onSubmit={updateNote} />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )

}
export default App 