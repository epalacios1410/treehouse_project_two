/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//Select unordered list by ID
const studentList = document.querySelector('.student-list');
//Select the children elemets of the unordered List w/children property
const list = studentList.children;
//Select div with class 'page'
const mainDiv = document.querySelector('.page');
//student items
const studentItems = document.querySelectorAll('.student-item');
//show first page when LOADED
const firstPage = 1

//Function hides all items except for 10 dictated by the page number
const showPage = (list, page) => {
  const maxNum = page * 10;
  const minNum = maxNum - 10;
  for(let i = 0; i < list.length; i++)
    if (i >= minNum && i < maxNum){
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
}

const appendPageLinks = (list) => {
  //Determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
  const pages = Math.ceil(list.length / 10)
  //Create a div //give it the “pagination” class //append it to the .page div
  const paginationDiv = document.createElement('div');
  paginationDiv.className = ('pagination');
  mainDiv.appendChild(paginationDiv);


  //Add a ul to the “pagination” div for every page
  //also an 'li' and 'a' tag
  for (i = 0; i < pages; i++) {

    const ul = document.createElement('ul');
    const liTag = document.createElement('li');
    const aTag = document.createElement('a');


    paginationDiv.appendChild(ul);
    ul.appendChild(liTag);
    liTag.appendChild(aTag);
    //give aTag poge number //+1 so it wont start and include the last 4 individuals
    aTag.innerText = i + 1;
    aTag.href = '#'

    //add the even listener to the 'a' tags
    aTag.addEventListener('click', (e) => {
        const eventTarget = e.target.innerText;
        showPage(studentItems, eventTarget)

        for(i = 0; i <= aTag; i++){
          aTag[i].className.remove = 'active';
        }
        e.target.ClassName = 'active'
    })
  }
}



showPage(studentItems,firstPage);
appendPageLinks(studentItems);
