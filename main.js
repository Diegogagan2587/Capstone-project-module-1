
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
    function displayMobileMenu() {
        console.log('runing displayMobileMenu')
        const topNavBar = document.querySelector('#nav-bar-1');
        const mainNavBar = document.querySelector('#nav-bar-2');
        const exitContainer = document.querySelector('#li-exit')
        exitContainer.classList.remove('hidden')
        topNavBar.classList.add('show-mobile-menu-top');
        mainNavBar.classList.add('show-mobile-menu-main');
    }

    function closeMobileMenu() {
        console.log('runing close mobile menu')
        const topNavBar = document.querySelector('#nav-bar-1');
        const mainNavBar = document.querySelector('#nav-bar-2');
        const exitContainer = document.querySelector('#li-exit')
        topNavBar.classList.remove('show-mobile-menu-top');
        mainNavBar.classList.remove('show-mobile-menu-main');
        exitContainer.classList.add('hidden')
    }


    const hamburgerButton = document.querySelector('#hamburger-button');
    const closeMobileButton = document.querySelector('#exitMobile');
    hamburgerButton.addEventListener('click', displayMobileMenu )
    closeMobileButton.addEventListener('click', closeMobileMenu)


