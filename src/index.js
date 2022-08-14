import _ from 'lodash';
import './style.css';

const vastman = document.querySelector('.vastman');

const dev1 = document.createElement('div');
dev1.className = 'vast';
dev1.innerHTML = 'Hello world breaking news';
vastman.appendChild(dev1);