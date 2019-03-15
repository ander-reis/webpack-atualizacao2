import liquidos from './es6';

/**
 * importação jquery es6
 */
// import $ from 'jquery';
// window.jQuery = $;

/**
 * importação jquery commonjs
 */
window.$ = window.jQuery = require('jquery');

console.log(liquidos);
console.log($);

$.each(liquidos, (index, value) => {
    console.log(index, value);
});
