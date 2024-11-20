import { Link, useOutletContext } from "react-router-dom"
import { Note } from "../../types"
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import Markdown from "react-markdown";


type  Detailprops = {



deletenote: (id:string) => void;

}
const Detailpage = ({deletenote}:Detailprops) => {


    const found: Note = useOutletContext();

    console.log("burasıııı " +found.markdown)
    return (


        <div className=" container py-5">
            <Row>


                <Col>


                    <h1>{found.title}</h1>

                    <Stack direction="horizontal" gap={3} className="flex-wrap"  >

                        {found.tags.map((tag) => (
                            <Badge key={tag.value}>{tag.label}</Badge>
                        ))}

                    </Stack>
                </Col>


                <Col>

                    <Stack className=" align-items-center justiy-content-end" direction="horizontal" gap={2} >


                        <Link to={"edit"} >

                            <Button> Düzenle </Button>
                        </Link>


                        <Button  onClick={() => deletenote(found.id)} variant="danger"> Sil </Button>



                        <Link to={"/"}>

                            <Button variant="secondary"> Geri  </Button>
                        </Link>


                    </Stack>


                </Col>
            </Row>

            <Markdown  className={"my-5"}>{found.markdown}</Markdown>
        </div>

    )

}

export default Detailpage