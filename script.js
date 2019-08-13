/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//store reference to unordered list of students by its class name
const ul = document.querySelector('.student-list');
//store reference to studentList list items
const studentList = ul.children;
//number of items we want displayed per page
const itemsPerPage = 10;
//first page will be displayed when page loads
const firstPage = 1;


//create function to hide all students except the 10 you want to display
//using arrow syntax
//list parameter represents complete list of Students
//page parameter represents the page number that will be passed as an argument
const showPage = ( list, page ) => {
  //start and end index of pages that will be shown
  const endIndex = page * itemsPerPage;
  const startIndex = endIndex - itemsPerPage ;

  for (let i = 0; i < studentList.length; i++) {    //loop over studentList, display if more or equal to the startIndex and less than the endIndex
    if (i >= startIndex &&  i < endIndex) {
      studentList[i].style.display = '';  //empty string allows to pick up previous style //student will be displayed
    } else {
        studentList[i].style.display = 'none';  //set CSS property to 'none' to hide student
    }
  }
};


//list parameter entire list of students passed as argument
const appendPageLinks = ( list ) => {
  const pageDiv = document.querySelector('.page');    //grab reference to div with the class 'page'
  //create div with a class name 'pagination' and append to 'page' div
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  pageDiv.appendChild(paginationDiv);

  //divide list length by max number of items to find out how many pages are needed
  //convert 'studentList' to integer with 'parseInt()' and use 'Math.ceil()' to round up
  const pagesNeeded = Math.ceil(parseInt(studentList.length) / itemsPerPage);

  const nestedUL = document.createElement('ul');    //create one 'ul' element which will contain one li element for each students

  //create for loop to create the correct number of pagination links
  for ( let i = 0; i < pagesNeeded; i++) {
    const liTag = document.createElement('li');     //create 'li' which will contain the student
    const aTag = document.createElement('a');     //create 'a' element
    aTag.className = 'active';      //give 'aTag' a class name of 'active'
    liTag.appendChild(aTag);
    nestedUL.appendChild(liTag);
    paginationDiv.appendChild(nestedUL);

    //add page numbers to the 'aTag' with innerText
    aTag.innerText = i + 1;
    //mouse over 'aTag' elements and pointer displays 'clicking' option/action
    aTag.href = '#'

    //add click addEventListener to each aTag
    aTag.addEventListener('click', (e) => {
      aTag.className = '';        //when click occurs the class name of the 'aTag'
      e.target.className = 'active';        //'aTag' of button click will have className 'active'

      //call function showPage using the global variable of the list items 'studentList' and the page that should be shown
      //get text content of button clicked to pass as page numbers
      const pageNum = e.target.textContent;
      showPage(studentList, pageNum);

    })
  }
};

//call functions to load page
showPage(studentList, firstPage);
appendPageLinks(studentList);
