'use strict';

import { onJsLoad, navHandler } from './header.js';
import { onFormSubmit, checkNameInput, checkPhoneInput } from './form.js';

onJsLoad();
navHandler();
checkNameInput();
checkPhoneInput();
onFormSubmit();
