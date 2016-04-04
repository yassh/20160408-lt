#!/usr/bin/env node

var argv = require('yargs')
  .options({
    'l': { type: 'string', describe: '対象言語を指定する' },
    'w': { type: 'boolean', describe: '期間指定: 1週間以内' },
    'm': { type: 'boolean', describe: '期間指定: 1か月以内' },
    'y': { type: 'boolean', describe: '期間指定: 1年以内' }
  })
  .help('h') // ヘルプを表示するオプションを指定
  .argv;
var opener = require('opener');
var param = require('jquery-param');

var data = { q: argv._.join(' ') }; // 引数の処理（複数来たらスペースで結合）
if (argv.l) data.lr = 'lang_' + argv.l; // lオプションの処理
if (argv.w) data.tbs = 'qdr:w'; // wオプションの処理
if (argv.m) data.tbs = 'qdr:m'; // mオプションの処理
if (argv.y) data.tbs = 'qdr:y'; // yオプションの処理
opener('https://www.google.co.jp/search?' + param(data)); // 開く
