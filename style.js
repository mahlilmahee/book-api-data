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
    const totalBook = document.getElementById('bookNumber');
    const books =data.numFound;
    totalBook.innerText=books;
    const detailBook=data.docs;
    const divforBooks=document.getElementById('divOnlyOne');
     divforBooks.textContent=''; 
    //  the function for unneccsary name 
     checkingValid();
    // result showed total 
    const lenghtOfResult =detailBook.length;
    const shownResult=document.getElementById("resultshown");
    shownResult.innerText=lenghtOfResult;
    detailBook.forEach(book => 

        {// books whole detail 
            
            const bookRealTitle = book.text?.[1];
            const bookNumber =checkingUndefined(bookRealTitle); 
            const booksAuthor=book.author_name?.[0];
            const authorAuthinfication=checkingUndefined(booksAuthor);
            const publisherOfTheBook =book.publisher?.[0];
            const checkingPublisher =checkingUndefined(publisherOfTheBook);
            const publishYear =book.publish_year?.[0];
            const puslisherName =checkingUndefined(publishYear);
            const coverId =book.cover_i;
            const div =document.createElement('div');
            div.classList.add('col-4');
            div.innerHTML=`
              <img width:"100%" class="img-fluid" src=" https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="">
              <p>Books-name: ${bookNumber}</p>
              <p>Authors-name :${authorAuthinfication}</p>
              <p>Publisher-name: ${checkingPublisher}</p>
              <p> First Publish date :${puslisherName} </p> `;
            divforBooks.appendChild(div);
            
            
        })
}
// function for checking whether it is undefined or not 
const checkingUndefined=info =>{
    if( info==undefined){
        info=" Right now it is not available ";
        return info;
    }
    else {
        return info;
    } 
}
// here is a optional code unrelated with the assignment only to add the enter btn connection with the btn so please ignore it 
document.getElementById("inputtext").addEventListener('keyup',function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById('Btn').click();
    }
});
// this is for checking validity whether it is exists or not 
const checkingValid= ()=>{
     const valueCheckign =document.getElementById("bookNumber").innerText;
     if(valueCheckign==="0"){
          const divforBooks=document.getElementById('divOnlyOne');
          divforBooks.textContent=`No results found. Your input is not valid please check it again and please write the name correctly `;
     }
}
