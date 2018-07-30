import './index.css';

import numeral from 'numeral';

const aLotOfMoney = numeral(1000).format('£0,0.00');
//debugger;
console.log(`${aLotOfMoney} is a lot of money!`); // eslint-disable-line no-console
