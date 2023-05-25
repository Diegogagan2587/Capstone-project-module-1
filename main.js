/* -------- Start Featured Speakers Section -------- */
function SpeakerData(
  img,
  altAttribute,
  name,
  ocupation,
  moreInfo,
) {
  this.img = img;
  this.altAttribute=altAttribute;
  this.name = name;
  this.ocupation = ocupation;
  this.moreInfo = moreInfo;
}

function createNewSpeakerFrom(obj) {
  const speakerTemplate = document.getElementById('speaker-template');
  const newSpeaker = speakerTemplate.cloneNode(true);
  newSpeaker.classList.remove('hidden');

  // now we modfy the content for the new speaker;
  newSpeaker.querySelector('img').src = `${obj.img}`;
  newSpeaker.querySelector('img').alt = `${ob.altAttribute}`
  newSpeaker.querySelector('h3').innerText = `${obj.name}`;
  newSpeaker.querySelector('.ocupation').innerText = `${obj.ocupation}`;
  newSpeaker.querySelector('.more-info').innerText = `${obj.moreInfo}`;
  return newSpeaker;
}

function appendSpeakers(arrOfdata, container) {
  for (let i = 0; i < arrOfdata.length; i += 1) {
    const tempSpeaker = createNewSpeakerFrom(arrOfdata[i]);
    if (i > 1) { tempSpeaker.classList.add('hide-or-show'); }
    container.appendChild(tempSpeaker);
  }
}

const featuredSpeakers = [
  new SpeakerData(
    './img/featured-speakers/speaker_01.jpg',
    'Diego Vidal\'s picture',
    'Diego Vidal',
    'Software Developer trained from Microverse',
    'From delivery guy on to Sofware Developer, he will have more than 4 years of experience in 2027',
  ),
  new SpeakerData(
    './img/featured-speakers/speaker_02.png',
    'Bill Gates\'s picture',
    'Bill Gates',
    'One of the richest man of the world, he started as a developer',
    'Bill Gates co-founded Microsoft, led the tech revolution, became a billionaire, and dedicated his wealth to philanthropy and global health.',
  ),
  new SpeakerData(
    './img/featured-speakers/speaker_03.png',
    'Linux Torvald\'s picture',
    'Linux Torvalds',
    'Works full-time on the Linux kernel as part of the Linux Foundation.',
    'Linux Torvalds created the Linux kernel, revolutionizing open-source software and becoming an influential figure in the tech industry.',
  ),
  new SpeakerData(
    './img/featured-speakers/speaker_04.jpg',
    'Freddy Vega\'s picture',
    'Freddy Vega',
    'Founder of the largest tech school in Spanish: Platzi',
    'Freddie Vega founded Platzi, an online education platform, empowering thousands to learn new skills and pursue career opportunities.',
  ),
  new SpeakerData(
    './img/featured-speakers/speaker_05.jpg',
    'Richard Stallman\'s picture',
    'Richard Stallman',
    ' head of the GNU Project, and in 2021 returned to the FSF board of directors',
    'Richard Stallman is a renowned computer programmer and software activist who founded the Free Software Movement and initiated GNU project.',
  ),
  new SpeakerData(
    './img/featured-speakers/speaker_06.jpg',
    'James Gosling\'s picture',
    'James Gosling',
    'father of the Java programming language,',
    'James Gosling is a computer scientist known as the father of the Java programming language, contributing significantly to software development.',
  ),
];

// get the template for each speaker
const speakersContainer = document.querySelector('.speakers-ul');
appendSpeakers(featuredSpeakers, speakersContainer);

// show more button
const moreButton = document.querySelector('#showButton');
const lessButton = document.querySelector('#lessButton');

function showMoreSpeakers() {
  const containner = document.querySelectorAll('.speaker');
  moreButton.classList.toggle('hidden');
  lessButton.classList.toggle('hidden');
  for (let i = 0; i < containner.length; i += 1) {
    containner[i].classList.toggle('hide-or-show');
  }
}

moreButton.addEventListener('click', showMoreSpeakers);
lessButton.addEventListener('click', showMoreSpeakers);
