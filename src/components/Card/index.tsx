
import { Note } from "../../types";
import { Badge, Card, Stack } from "react-bootstrap";

/*  module scss dosyasını import ettıgımız zaman bir style 
nesnesi elde ederiz
 */

import styles from "./cars.module.css"
import { Navigate, useNavigate } from "react-router-dom";



type Cardtype = {


    note: Note;
}


const Notecard = ({ note }: Cardtype) => {

    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/${note.id}`)} className={styles.notecard}>
            <Card.Body>
                <Stack>
                    <span>{note.title}</span>

                    <Stack direction="horizontal" className="justify-content-center" gap={2}>

                        {note.tags.map((tag) => (

                            <Badge>{tag.label}</Badge>
                        ))}


                    </Stack>
                </Stack>
            </Card.Body>
        </Card>

    )



}

export default Notecard;