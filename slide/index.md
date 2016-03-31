# npmで作るコマンドラインツール



---



## 最低限の記述でHello world



---



package.json

```
{
  "name": "test-package",
  "bin": {
    "test-hello": "hello.js"
  }
}
```

hello.js

```
#!/usr/bin/env node

console.log('hello!');
```



---



ローカルパッケージをインストールするコマンド

`npm link`



---



これで`test-hello`コマンドの完成。



---



`test-hello`コマンドのデモ



---



## コマンドの追加



---



package.json

```
{
  "name": "test-package",
  "bin": {
    "test-hello": "hello.js",
    "test-goodbye": "goodbye.js"
  }
}
```

goodbye.js

```
#!/usr/bin/env node

console.log('goodbye!');
```



---



コマンドを追加したら、

`npm link`



---



`test-goodbye`コマンドのデモ



---



## 外部パッケージを使って、すこし複雑なコマンドを作る



---



使う外部パッケージ

- [yargs](https://www.npmjs.com/package/yargs) - 引数を扱う
- [colors](https://www.npmjs.com/package/colors) - 出力に色を付ける



---



コマンドで外部パッケージをインストール

```
npm install yargs --save
npm install colors --save
```

<small>※`--save`オプションをつけると、package.jsonに依存パッケージとして登録される。</small>



---



package.json

```
{
  "name": "test-package",
  "bin": {
    "test-hello": "hello.js",
    "test-goodbye": "goodbye.js",
    "test-w": "w.js"
  },
  "dependencies": {
    "colors": "^1.1.2",
    "yargs": "^4.3.2"
  }
}
```

w.js

```
#!/usr/bin/env node

var argv = require('yargs').argv;
var colors = require('colors');

if (argv._.length === 0) return; // 引数がなかったら、終了

var n = argv._[0]; // 最初の引数を取得
n = parseInt(n, 10); // 整数に変換

console.log(colors.green('W'.repeat(n)));
```

---



コマンドを追加したら、

`npm link`



---



`test-w`コマンドのデモ
