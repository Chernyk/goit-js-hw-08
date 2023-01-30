import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGEYIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCALSTORAGEYIME_KEY, time.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(LOCALSTORAGEYIME_KEY || 0));
