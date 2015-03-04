var theTime = new Date();
console.log(theTime.getHours() + ":" + ((theTime.getMinutes() > 10) ? theTime.getMinutes() : "0" + theTime.getMinutes()));