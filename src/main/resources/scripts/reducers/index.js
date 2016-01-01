'use strict';

import {combineReducers} from 'redux';
import activeIndex from './navHeader';
import {compNews} from './companyNews';
import {getNews} from './comNews';
import {reg} from './reg';
import {subReducer} from './submit';
import {user} from './user';

const rootReducer = combineReducers({
	activeIndex,
	compNews,
	getNews,
	reg,
	subReducer,
	user
});

export default rootReducer;

