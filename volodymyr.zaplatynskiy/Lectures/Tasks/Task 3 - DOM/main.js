/* call main function when page is loaded */

window.addEventListener('load', function generateCells() {
    var i;
    for(i = 0; i < daysArray.length; i++) {
        days.innerHTML += "<div class='day-cell'></div>";
    }
    dayCell = days.childNodes;
    for(i = 0; i < dayCell.length; i++) {
        dayCell[i].innerHTML = daysArray[i];
    }
    for(i = 0; i < cells; i++) {
        calendar.innerHTML += "<div class='cell'></div>";
    }
    cellsArray = calendar.children;
    for(i = 0; i < cells; i += week) {
        cellsArray[i].classList.add('cell-weekend');
    }
    checkDate(current);
});

var daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'],
    months = document.getElementById('months'),
    previous = document.getElementById('previous'),
    next = document.getElementById('next'),
    days = document.getElementById('days'),
    calendar = document.getElementById('calendar'),
    now = new Date(),
    current = now,
    currentDate = now.getDate(),
    currentMonth = now.getMonth(),
    currentYear = now.getFullYear(),
    cellsArray = [],
    dayCell,
    clicked,
    week = 7,  // 7 days in week
    cells = 42; // 42 is not a 'magic number', but only 7 days multiply on 6 weeks, 42 is number of cells

function checkDate(date) {
    var i,
        thisMonth,
        thisYear;
    thisMonth = date.getMonth();
    thisYear = date.getFullYear();
    months.innerHTML = monthsArray[thisMonth] + ' ' + thisYear;
    date.setDate(1);
    date.setDate(date.getDate() - date.getDay());
    removeClass();
    for(i = 0; i < cells; i++) {
        cellsArray[i].textContent = date.getDate();
        if(date.getMonth() !== thisMonth)
            cellsArray[i].classList.add('cell-month');
        date.setDate(date.getDate() + 1);
    }
    if(thisMonth === currentMonth && thisYear === currentYear){
        i = currentDate + (currentDate - week);
        cellsArray[i].classList.add('current-day');
    }
    date.setMonth(thisMonth);
    date.setYear(thisYear);
}

function removeClass(){
    var i;
    for(i = 0; i < cells; i++) {
        cellsArray[i].classList.remove('cell-month');
        cellsArray[i].classList.remove('current-day');
    }
    if(clicked !== undefined)
        clicked.classList.remove('clicked');
}

previous.addEventListener('click', function(){
    current.setMonth(current.getMonth() - 1);
    checkDate(current);
});

next.addEventListener('click', function(){
    current.setMonth(current.getMonth() + 1);
    checkDate(current);
});

calendar.addEventListener('click', function(event){
    if(clicked !== undefined){
        if(event.target === clicked){
            clicked.classList.toggle('clicked');
            return null;
        }
        clicked.classList.remove('clicked');
    }
    clicked = event.target;
    clicked.classList.add('clicked');
});
