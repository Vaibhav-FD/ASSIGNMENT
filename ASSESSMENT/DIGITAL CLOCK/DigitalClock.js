const DATE = new Date();      //CREATING new Date() OBJECT

const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY'];           //CREATING ARRAY FOR DAYS WHICH HAS NAME OF DAYS


const MONTHS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOMBER', 'NOVEMBER', 'DECEMBER'];    //CREATING ARRAY FOR MONTHS WHICH HAS NAME OF MONTHS


document.getElementById("dmdy").innerHTML = DAYS[DATE.getDay()] + "&nbsp , &nbsp" + MONTHS[DATE.getMonth()] + " &nbsp" + DATE.getDate() + "&nbsp , &nbsp" + DATE.getFullYear();                // PRINTING WITH innerHTML DAY NAME , MONTH NAME DATE , YEAR NAME  


setInterval(function () {    //USING INTERVAL TO CHANGE LIVE TIME

  let CLOCK = new Date();

  document.getElementById("digitalclock").innerHTML = " --- " + CLOCK.getHours() + " : " + CLOCK.getMinutes() + " : " + CLOCK.getSeconds() + " --- ";    //  PRINTING WITH innerHTML HOUR : MINUTE : SECOND

}, 1000);