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
