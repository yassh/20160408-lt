#!/usr/bin/env node

var argv = require('yargs').argv;
var colors = require('colors');

if (argv._.length === 0) return; // 引数がなかったら、終了

var n = argv._[0]; // 最初の引数を取得
n = parseInt(n, 10); // 整数に変換

console.log(colors.green('W'.repeat(n)));
