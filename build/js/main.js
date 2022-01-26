'use strict';

import { onJsLoad, navHandler } from './header.js';
import { checkFormValidity } from './form.js';
import { smoothScroll } from './smooth-scroll.js';

onJsLoad();
navHandler();
checkFormValidity();
smoothScroll();
