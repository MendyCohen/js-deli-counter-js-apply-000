var katzDeli = [];
var count = 0;
function takeANumber(katzDeliLine){
   
   count++;
   return `You are number ${count} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
     return `Currently serving ${katzDeliLine.shift()}.`;
  } 
}


  function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var count = 1;
    var text = "The line is currently:";
    for(var i = 0; i < katzDeliLine.length-1; i++){
        text += ` ${count}. ${katzDeliLine[i]},`;
      count++;
    }
    text += ` ${count}. ${katzDeliLine.slice(-1)[0]}`;
    return text;
  }
}
