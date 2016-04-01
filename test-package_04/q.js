#!/usr/bin/env node

const argv = require('yargs')
  .alias('l', 'lang')
  .boolean('w').alias('w', 'week')
  .boolean('m').alias('m', 'month')
  .boolean('y').alias('y', 'year')
  .argv;
const param = require('jquery-param');
const opener = require('opener');

const baseUrl = 'https://www.google.co.jp/search?';

data = { q: argv._.join(' ') };

if (argv.lang) data.lr = `lang_${argv.lang}`;

if (argv.week) data.tbs = 'qdr:w';
if (argv.month) data.tbs = 'qdr:m';
if (argv.year) data.tbs = 'qdr:y';

const url = baseUrl + param(data);
console.log(url);
opener(url);
