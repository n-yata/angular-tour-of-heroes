# AngularTourOfHeroes

Angular チュートリアルのメモ

https://angular.jp/tutorial

### アプリ生成コマンド

> $ ng new プロジェクト名

### アプリ実行

> $ ng serve --open

### コンポーネントの作成

> $ ng generate component コンポーネント名

### サービスの作成

> $ ng generate service サービス名

### モジュールの作成

> $ ng generate module app-routing --flat --module=app

### インメモリ Web API のインストール

> $ npm install angular-in-memory-web-api --save

selector: コンポーネントの CSS 要素セレクター  
templateUrl: テンプレートファイルの場所  
styleUrls: プライベート CSS スタイルの場所

◆ 要素(selector)をルート html に記載することで表示
<app-heroes></app-heroes>

ディレクティブの「*」忘れに注意  
*ngIf  
\*ngFor

TypeScript の宣言で初期化不要の場合、「?」を付与して回避  
例：selectedHero?: Hero;

コンポーネントはデータの受け渡しに集中、
その他の処理はサービスへ委譲

コンストラクターではプロパティ定義などの簡単な初期化のみ
関数呼び出しは行うべきでない  
→noOnInit()で呼び出すべき

Angular はコンポーネント内のパブリックなプロパティのみをバインド

Route の設定  
path: ブラウザのアドレスバーにある URL にマッチする文字列  
component: 遷移した際に作成すべきコンポーネント  
router-outlet: ルーティングされたビューをどこに表示するかをルーターに伝える

Observable をテンプレートで使用する場合

<li *ngFor="let hero of heroes$ | async" >

Subject は observable な値の元

アーキテクチャ  
https://angular.jp/guide/architecture

GitHub Pages へのデプロイ  
https://www.syncfusion.com/blogs/post/easy-steps-to-host-an-angular-app-in-github-pages.aspx

> ng add angular-cli-ghpages  
> ng deploy --base-href=/angular-tour-of-heroes/

これで「gh-pages」ブランチが生成され、そのブランチを公開する。

◆jQuery インストール参考記事  
https://pgmemo.tokyo/data/archives/1829.html  
上記のあと、angular.json の以下箇所に jquery のパス記載が必要  
architect > build > options > scripts  
"./node_modules/jquery/dist/jquery.min.js"
