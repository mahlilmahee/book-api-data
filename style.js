const bookbtn=()=>{
    // console.log('hello I am here ');
    const inputText=document.getElementById("inputtext");
    const inputInner =inputText.value;
    // console.log(inputInner);
    inputText.value='';
    const bookUrl =`https://openlibrary.org/search.json?q=${inputInner}`;
    fetch(bookUrl)
    .then(res=>res.json())
    .then(data=>bookName(data))
}
const bookName = (data)=>
{
    console.log(data);
    const totalBook = document.getElementById('bookNumber');
    const books =data.numFound;
    totalBook.innerText=books;
    const detailBook=data.docs;
    // console.log(detailBook);
    detailBook.forEach(book => 
        {
            console.log(book);
            // books name 
            const bookRealTitle = book.text[1];
            console.log(bookRealTitle);
            // authors name 
            const booksAuthor=book.author_name[0];
            const publisherOfTheBook =book.publisher;
            const publishYear =book.publish_year[0];
            const divforBooks=document.getElementById('divOnlyOne');
             const div =document.createElement('div');
             div.classList.add('col-4');
             div.innerHTML=`
             
             <img src="" alt="">
             <p>Books-name: ${bookRealTitle}</p>
             <p>Authors-name :${booksAuthor}</p>
             <p>Publisher-name: ${publisherOfTheBook}</p>
             <p>Publish date :${publishYear} </p>
         
             `;
             divforBooks.appendChild(div);
            
        })
}









// here is a optional code unrelated with the assignment only to add the enter btn connection with the btn so please ignore it 
document.getElementById("inputtext").addEventListener('keyup',function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById('Btn').click();
    }
})