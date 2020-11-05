const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX=['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY=['the soup kitchen','Disneyland','the White House'];
var insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

var newStory;

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



randomize.addEventListener('click', result);

function result() {
    newStory = storyText;
  if(customName.value !== '') {
    let name = customName.value;
    newStory=newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.071428571428571) +' stones';
    let temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory=newStory.replace('94 fahrenheit',temperature);
    newStory=newStory.replace('300 pounds',weight);


  }
  
  var xItems,yItems,zItems;

  xItems=randomValueFromArray(insertX);
  yItems=randomValueFromArray(insertY);
  zItems=randomValueFromArray(insertZ);
  newStory=newStory.replace(':insertx:',xItems);
  newStory=newStory.replace(':inserty:',yItems);
  newStory=newStory.replace(':insertz:',zItems);
  newStory=newStory.replace(':insertx:',xItems);


  story.textContent = newStory;
  story.style.visibility = 'visible';
}