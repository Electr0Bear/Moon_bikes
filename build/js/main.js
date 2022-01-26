'use strict';

import { onJsLoad, navHandler } from './header.js';
import { onFormSubmit, checkNameInput, checkPhoneInput } from './form.js';
import { smoothScroll } from './smooth-scroll.js';

onJsLoad();
navHandler();
checkNameInput();
checkPhoneInput();
onFormSubmit();
smoothScroll();
