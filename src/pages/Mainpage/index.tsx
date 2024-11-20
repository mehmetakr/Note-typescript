import { Button, Col, Stack, Form, Row } from "react-bootstrap";
import { Note, Tag } from "../../types";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import ReactSelect from "react-select"
import Notecard from "../../components/Card";

type Mainpageprops = {



    notes: Note[];
    availableTags: Tag[];
}

const Mainpage = ({ notes, availableTags }: Mainpageprops) => {

    const [title, settitle] = useState<String>("");
    const [selectedtags, setselectedtags] = useState<Tag[]>([]);




    const filtrednote = useMemo(() => notes.filter((note) => {


        return (
            // note un baslıgı aranılan metnı içeriyorsa noteu döndür. 

            (title === "" ||
                note.title.toLowerCase().includes(title.toLowerCase())) &&
            // seçtiğim etiketlerin tamamı notta varsa note 'u döndür

            (selectedtags.length === 0 || selectedtags.every((s_tags) => note.tags.some((notetag) => notetag.value == s_tags.value)
            ))
        )
    }
    ), [title, selectedtags, notes]);
    return (




        <div className="container py-5" >


            {/* üst kısım  */}

            <Stack direction="horizontal" className="justify-content-between">

                <h1>Notlar</h1>

                <Link to="/new">
                    <Button>Olustur </Button>

                </Link>
            </Stack>

            {/* filtreleme kısmı  */}

            <Form className="mt-4">
                <Row>

                    <Col>
                        <Form.Group>

                            <Form.Label>Başlığa Göre</Form.Label>

                            <Form.Control onChange={(e) => settitle(e.target.value)} />
                        </Form.Group>

                    </Col>


                    <Col>


                        <Form.Group>
                            <Form.Label>
                                Etikete Göre Ara
                            </Form.Label>

                            <ReactSelect onChange={(all_tags) => setselectedtags(all_tags as Tag[])}
                                // daha önceden olusturulan etiketleri listele

                                options={availableTags}
                                isMulti
                                className="text-black"
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            {/*  not listesi listleleme  */}
            <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
                {filtrednote.map((note) => (

                    <Col>
                        <Notecard key={note.id} note={note} />
                    </Col>

                ))}
            </Row>

        </div>

    )


}

console.log("Bileşen dışı kontrol!");

export default Mainpage;