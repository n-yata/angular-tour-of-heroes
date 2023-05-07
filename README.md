# AngularTourOfHeroes
Angularチュートリアルのメモ

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

### インメモリWeb APIのインストール
> $ npm install angular-in-memory-web-api --save

selector: コンポーネントのCSS要素セレクター  
templateUrl: テンプレートファイルの場所  
styleUrls: プライベートCSSスタイルの場所

◆要素(selector)をルートhtmlに記載することで表示
<app-heroes></app-heroes>

ディレクティブの「*」忘れに注意  
*ngIf  
*ngFor

TypeScriptの宣言で初期化不要の場合、「?」を付与して回避  
例：selectedHero?: Hero;

コンポーネントはデータの受け渡しに集中、
その他の処理はサービスへ委譲

コンストラクターではプロパティ定義などの簡単な初期化のみ
関数呼び出しは行うべきでない  
→noOnInit()で呼び出すべき

Angularはコンポーネント内のパブリックなプロパティのみをバインド

Routeの設定  
path: ブラウザのアドレスバーにあるURLにマッチする文字列  
component: 遷移した際に作成すべきコンポーネント  
router-outlet: ルーティングされたビューをどこに表示するかをルーターに伝える  

Observableをテンプレートで使用する場合
<li *ngFor="let hero of heroes$ | async" >

Subjectはobservableな値の元

アーキテクチャ  
https://angular.jp/guide/architecture

GitHub Pagesへのデプロイ  
https://www.syncfusion.com/blogs/post/easy-steps-to-host-an-angular-app-in-github-pages.aspx
> ng add angular-cli-ghpages  
> ng deploy --base-href=/angular-tour-of-heroes/

これで「gh-pages」ブランチが生成され、そのブランチを公開する。