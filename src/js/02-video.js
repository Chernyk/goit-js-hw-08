import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGETIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCALSTORAGETIME_KEY, time.seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(LOCALSTORAGETIME_KEY) || 0);
