const bookbtn=()=>{
    // console.log('hello I am here ');
    const inputText=document.getElementById("inputtext");
    const inputInner =inputText.value;
    // console.log(inputInner);
    // refreshing the page 
    
    inputText.value='';
    const bookUrl =`https://openlibrary.org/search.json?q=${inputInner}`;
    fetch(bookUrl)
    .then(res=>res.json())
    .then(data=>bookName(data));
}
const bookName = (data)=>
{
    // console.log(data);
    const totalBook = document.getElementById('bookNumber');
    const books =data.numFound;
    totalBook.innerText=books;
    const detailBook=data.docs;
    const divforBooks=document.getElementById('divOnlyOne');
     divforBooks.textContent='';
    // console.log(detailBook);
    // console.log(detailBook);
    detailBook.forEach(book => 
        {// books name 
            const bookRealTitle = book.text[1];
            const booksAuthor=book.author_name[0];
            const publisherOfTheBook =book.publisher;
            const publishYear =book.publish_year[0];
            let coverId =book.cover_i;
            if(coverId===undefined){
                converId=" there is no image sorry "
            }
            
             const div =document.createElement('div');
             div.classList.add('col-4');
             div.innerHTML=`
              <img width:"100%" class="img-fluid" src=" https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="">
              <p>Books-name: ${bookRealTitle}</p>
              <p>Authors-name :${booksAuthor}</p>
              <p>Publisher-name: ${publisherOfTheBook}</p>
              <p>Publish date :${publishYear} </p>
             `;
             divforBooks.appendChild(div);
            //  divforBooks.innerHTML='';
            
        })
}









// here is a optional code unrelated with the assignment only to add the enter btn connection with the btn so please ignore it 
document.getElementById("inputtext").addEventListener('keyup',function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById('Btn').click();
    }
})