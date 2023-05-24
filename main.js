
/* -------- Start Featured Speakers Section -------- */
function speakerData (
    img,
    name,
    ocupation,
    moreInfo
) {
    this.img = img;
    this.name = name, 
    this.ocupation = ocupation;
    this.moreInfo = moreInfo;
}

function createNewSpeakerFrom(obj) {
    console.log('runing Create NewSpeakerFrom')
    const newSpeaker = speakerTemplate.cloneNode(true);
    newSpeaker.classList.remove('hidden');

    //now we modfy the content for the new speaker;
    newSpeaker.querySelector('img').src = `${obj.img}`;
    newSpeaker.querySelector('h3').innerText = `${obj.name}`
    newSpeaker.querySelector('.ocupation').innerText = `${obj.ocupation}`
    newSpeaker.querySelector('.more-info').innerText = `${obj.moreInfo}`
    return newSpeaker;
}

function appendSpeakers(arrOfdata,container){
    console.log('running appendSpeakers')
    for(let i = 0; i < arrOfdata.length; i += 1 ) {
        const tempSpeaker = createNewSpeakerFrom(arrOfdata[i]);
        if(i > 1 ) { tempSpeaker.classList.add('hide-or-show')};
        container.appendChild(tempSpeaker);
    }
}

const featuredSpeakers = [
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
    new speakerData (
        './img/featured-speakers/speaker_01.png',
        'Yochai Benkler',
        'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    ),
]

    // get the template for each speaker
    const speakerTemplate = document.getElementById('speaker-template');
    const speakersContainer = document.querySelector('.speakers-ul');
    appendSpeakers(featuredSpeakers, speakersContainer);
    //mobile drop menu;



