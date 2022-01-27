const lightbox = GLightbox({
    'href': 'https://www.youtube.com/watch?v=a3ICNMQW7Ok',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoPlayVideos': 'true'
});

AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'center-bottom'
});