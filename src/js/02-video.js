import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const keyStorage = 'videoplayer-current-time';
const videoVimeo = document.querySelector('#vimeo-player');
const video = new Video(videoVimeo);
console.log(video);
const localStrItem = localStorage.getItem(keyStorage);
if (localStrItem){
    video.setCurrentTime(localStorage.getItem(keyStorage));    
} video.on('timeupdate', throttle(getTime,1000));

function getTime() {
video.getCurrentTime() .then(prom => {
console.log(prom);
localStorage.setItem(keyStorage,prom);
});
}
