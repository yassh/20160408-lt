# npmで作るコマンドラインツール



---



## 最低限の記述でHello world



---



tree

```
test-package/ …… 作業ディレクトリ
├── hello.js …… コマンドの実体
└── package.json …… パッケージ設定ファイル
```

hello.js

```
#!/usr/bin/env node

console.log('hello!');
```

package.json

```
{
  "name": "test-package",
  "bin": {
    "test-hello": "hello.js"
  }
}
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



tree

```
test-package/
├── goodbye.js …… 追加したファイル
├── hello.js
├── node_modules/ …… npm linkで作られたディレクトリ
└── package.json
```

goodbye.js

```
#!/usr/bin/env node

console.log('goodbye!');
```

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

コマンドでインストール

- `npm install yargs --save`
- `npm install colors --save`

<small>※`--save`オプションをつけると、package.jsonに依存パッケージとして登録される。</small>



---



tree

```
test-package/
├── goodbye.js
├── hello.js
├── node_modules/ …… この中に外部パッケージがインストールされる
├── package.json
└── w.js …… 追加したファイル
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



---



コマンドを追加したら、

`npm link`



---



`test-w`コマンドのデモ



---



## もうすこし面白いやつ



---



追加する外部パッケージ

- [opener](https://www.npmjs.com/package/opener) - URLとかを開く
- [jquery-param](https://www.npmjs.com/package/jquery-param) - URLのクエリー文字列を生成する

コマンドでインストール

- `npm install opener --save`
- `npm install jquery-param --save`



---



tree

```
test-package/
├── goodbye.js
├── hello.js
├── node_modules/
├── package.json
├── q.js …… 追加したファイル
└── w.js
```



---



q.js

```
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
```



---



package.json

```
{
  "name": "test-package",
  "bin": {
    "test-hello": "hello.js",
    "test-goodbye": "goodbye.js",
    "test-w": "w.js",
    "test-q": "q.js"
  },
  "dependencies": {
    "colors": "^1.1.2",
    "jquery-param": "^0.2.0",
    "opener": "^1.4.1",
    "yargs": "^4.3.2"
  }
}
```



---



コマンドを追加したら、

`npm link`



---



`test-q`コマンドのデモ
