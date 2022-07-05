import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const keyStorage = 'videoplayer-current-time';
const videoVimeo = document.querySelector('#vimeo-player');
const player = new Player(videoVimeo);
console.log(player);
const localStrItem = localStorage.getItem(keyStorage);

if (localStrItem){
    player.setCurrentTime(localStorage.getItem(keyStorage));    
} player.on('timeupdate', throttle(getTime,1000));

function getTime() {
player.getCurrentTime() .then(prom => {
console.log(prom);
localStorage.setItem(keyStorage,prom);
});
}
