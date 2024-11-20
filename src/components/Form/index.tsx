import { useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Tag } from "../../types";
import { Createpageprops } from "../../pages/Createpage";
import CreatableSelect from "react-select/creatable";
import { v4 } from "uuid";
import { FormEvent } from "react";



const CustomForm = ({ availableTags, createTag, handleSubmit, title = "", tags = [], markdown = '' }: Createpageprops) => {

    const [selectedtags, setselectedtags] = useState<Tag[]>(tags);

    const navigate = useNavigate();

    // useRef ile input ve textarea'yı çağır  
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);


    const handlesub = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();


        // note oluştur
        handleSubmit({

            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedtags,
        });

        navigate(-1);

    };
    return (
        <Form onSubmit={handlesub}>
            <Stack>
                <Row>
                    {/* üst kısım  */}
                    <Col>
                        <Form.Group>
                            <Form.Label>BAŞLIK</Form.Label>
                            <Form.Control defaultValue={title}
                                ref={titleRef}
                                required className="shadow" />
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group>

                            <Form.Label style={{ color: "white" }}>Etiketler</Form.Label>
                            <CreatableSelect onChange={(all_tags) => setselectedtags(all_tags as Tag[])}
                                // yeni etiket oluşturuldugunda çalışır.
                                onCreateOption={(text) => {

                                    // etiket objesi olustur ve id ekle

                                    const newTag: Tag = { label: text, value: v4() };
                                    // yeni etiketi lokale kaydet

                                    createTag(newTag);


                                    // state ' e yeni etiketi ekle 

                                    setselectedtags([...selectedtags, newTag]);
                                }}

                                // daha önce olusturulan etiketleri listele

                                options={availableTags}
                                // seçili etiketleri 

                                value={selectedtags}
                                className="text-black shadow"
                                isMulti
                            />
                        </Form.Group>

                    </Col>
                </Row>

                {/*  içerik alanı */}
                <Form.Group className="mt-4">
                    <Form.Label>İçerik  (markdown destekler)</Form.Label>


                    <Form.Control defaultValue={markdown} ref={markdownRef} as="textarea" className="shadow" style={{ minHeight: "300px ", maxHeight: "500px" }} />

                </Form.Group>

                {/*  butonlar */}

                <Stack direction="horizontal" gap={4} className="justify-content-end mt-5">

                    <Button type="submit">Kaydet</Button>
                    {/*  geçmişte bir adım geri gider */}
                    <Button onClick={() => navigate(-1)} type="button" variant="secondary" > Geri
                    </Button>
                </Stack>
            </Stack>
        </Form>

    )




}

export default CustomForm;