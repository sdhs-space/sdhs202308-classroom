const $calendarTitle = document.querySelector('.calendar-title');
const $calendarList = document.querySelector('.calendar-list');
const $prevYear = document.querySelector('.prev-year');
const $nextYear = document.querySelector('.next-year');
const weeks = ['일','월','화','수','목','금','토'];

let currentYear = new Date();
$prevYear.addEventListener('click',function(){
    const year = currentYear.getFullYear();
    currentYear = new Date(year-1,0,1);
    renderCalendar();
})
$nextYear.addEventListener('click',function(){
    const year = currentYear.getFullYear();
    currentYear = new Date(year+1,0,1);
    renderCalendar();
})

function createCalendarItem(className,text=""){
    const $div = document.createElement('div');
    $div.className = className;
    $div.textContent = text;
    return $div;
}
function createCalendar(createMonthDate){
    const year = createMonthDate.getFullYear(); // 년
    const month = createMonthDate.getMonth(); // 월
    
    const currentMonthFirstDay = new Date(year,month,1).getDay();
    const currentMonthLastDate = new Date(year,month+1,0).getDate();
    const prevMonthLastDate = new Date(year,month,0).getDate();
    
    let count = currentMonthFirstDay+currentMonthLastDate;
    const $calendarGroup = createCalendarItem('calendar-group');
    const $calendarMonth = createCalendarItem('calendar-month',`${month+1}월`)
    const $calendarView = createCalendarItem('calendar-view');
    
    for(let index=0; index<weeks.length; index++){
        const week = weeks[index];
        const $week =  createCalendarItem('week',`${week}요일`);
        $calendarView.appendChild($week);
    }
    for(let index=0; index<currentMonthFirstDay; index++){
        // 31 - 2 = 29 + 0 = 29 + 1 => 30  
        // 31 - 2 = 29 + 1 = 30 + 1 => 31 
        const prevMonthDate = prevMonthLastDate-currentMonthFirstDay+index+1;
        const $prevMonth = createCalendarItem('prev-month day',prevMonthDate);
        $calendarView.appendChild($prevMonth);
    }
    for(let index=0; index<currentMonthLastDate; index++){
        const $currentMonth = createCalendarItem('current-month day',index+1);
        $calendarView.appendChild($currentMonth);
    }
    for(let index=0; count<42; index++,count++){
        const $nextMonth = createCalendarItem('next-month day',index+1);
        $calendarView.appendChild($nextMonth);
    }
    
    $calendarGroup.appendChild($calendarMonth);
    $calendarGroup.appendChild($calendarView);
    
    
    $calendarList.appendChild($calendarGroup);
}

function renderCalendar(){
    $calendarList.innerHTML = '';
    const year = currentYear.getFullYear();
    $calendarTitle.textContent = year;
    for(let index=0; index<12; index++){
        const monthDate = new Date(year,index,1); // 2023 1월 ~ 12월
        createCalendar(monthDate)
    }
}
renderCalendar();