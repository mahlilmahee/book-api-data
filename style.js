const bookbtn=()=>{
    const inputText=document.getElementById("inputtext");
    const inputInner =inputText.value;
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
             console.log(book);
            const bookRealTitle = book.text?.[1];
            console.log(bookRealTitle);
            const booksAuthor=book.author_name?.[0];
            console.log(booksAuthor);
            const publisherOfTheBook =book.publisher?.[0];
            console.log(publisherOfTheBook);
            let publishYear =book.publish_year?.[0];
            // const variable =book=>
            // {
            //    if(book.publish_year[0] ==undefined){
            //        return booksAuthor;
            //    }
            //    else{
            //        return publishYear;
            //    }
            // }
            // ;
            // const booksatuo=variable(book);
           
            console.log(publishYear);
            let coverId =book.cover_i;
             const div =document.createElement('div');
             div.classList.add('col-4');
             div.innerHTML=`
              <img width:"100%" class="img-fluid" src=" https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="">
              <p>Books-name: ${bookRealTitle}</p>
              <p>Authors-name :${booksAuthor}</p>
              <p>Publisher-name: ${publisherOfTheBook}</p>
              <p>Publish date :${publishYear} </p> `;
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