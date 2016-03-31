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
