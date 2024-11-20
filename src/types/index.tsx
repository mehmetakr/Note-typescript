
// formdan alınan note verisini tipi 

export type Notedata = {


    title: string;
    markdown: string;
    tags: Tag[];

}

// listelenicek note verisinin tipi 
// state e kaydedilicek note verisinin tipi 

export type Note = {

    id: string;
}
    & Notedata;



export type Tag = {
    label: string;
    value: string;
}


// type daki  bütün değerlerin opsiyonel olmasını istiyorsak 
// partial  kullanıp opsiyonel olmasını istediğimiz tipi  
// generic olarak göndeririz.