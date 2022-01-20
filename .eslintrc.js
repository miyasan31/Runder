module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "standard",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "import-access",
    "jsx-a11y",
    "node",
    "promise",
    "react", // これパッケージ名（"eslint-plugin-react"でも可）
    "react-hooks",
    "simple-import-sort",
    "react-native",
  ],
  rules: {
    "linebreak-style": ["error", "unix"],

    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-native/no-inline-styles": "warn",
    // "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "warn",

    // オブジェクトの最後の要素にカンマをつけるか
    "comma-dangle": "off",
    // 宣言されていない変数をどうするか
    "no-undef": "warn",
    // 出しても良いコンソールタイプ（log以外はOK）
    "no-console": ["warn", { allow: ["warn", "info", "error"] }],
    // 禁止構文を設定
    "no-restricted-syntax": [
      "error",
      // Enum型を禁止
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ],
    // アロー関数でコールバックを記述
    "prefer-arrow-callback": "error",
    // 変数が再割り当てされない場合constを使用する
    "prefer-const": "error",
    //  関数の宣言方法について制限
    "func-style": [
      "error",
      // 関数宣言より関数式を推奨
      "expression",
    ],
    // アロー関数内に{}を矯正する（省略させない）
    // "arrow-body-style": ["error", "always"], 省略したい！！！

    "no-use-before-define": ["off", { paths: [{ name: "react", importNames: ["default"] }] }],
    // "no-restricted-imports": ["error", { "paths": [{ "name": "react", "importNames": ["default"] }] }],

    // reactのドキュメント
    // https://github.com/yannickcr/eslint-plugin-react
    "react/prop-types": "off", //
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off", // コンポーネントのdisplaynameをoff
    // JSX内のイベントハンドラについて
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "on", // イベントハンドラの接頭辞
        eventHandlerPropPrefix: "on", //
        checkLocalVariables: true, // イベントハンドラ内で変数を定義するか
        checkInlineFunction: true, // イベントハンドラ内で関数を定義するか
      },
    ],
    // propsをコンポーネントの引数で展開するか？(しない→never)
    "react/destructuring-assignment": ["error", "never"],

    // react-hooksのドキュメント
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "import/newline-after-import": "error",
    // export defaultを禁止
    "import/no-default-export": "error",

    "import-access/jsdoc": "error",
    // import順を矯正

    "simple-import-sort/imports": "error",
    // export順を矯正
    "simple-import-sort/exports": "error",

    // @typescript-eslintのドキュメント
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    // anyの使用許可
    "@typescript-eslint/no-explicit-any": "off",
    // require()の使用許可
    "@typescript-eslint/no-var-requires": "off",
    // exportされた関数の戻り値が不明な場合の制限
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // typeを宣言してimportするか
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    // 未使用の変数の使用許可
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_", // 変数の文字が_から始まる変数は許可する
        argsIgnorePattern: "^_", // 関数の引数の文字が_から始まる変数は許可する
      },
    ],
    // 型定義の名前の付け方
    // "@typescript-eslint/naming-convention": [
    // 	"error"
    // 型定義の時にパスカルケースで命名する
    // { "selector": ["typeAlias", "typeParameter"], "format": ["PascalCase"] },
    // // 型定義のpropsはキャメルケースで命名する
    // { "selector": ["property", "method"], "format": ["camelCase"] }
    // 変数(variable)の命名規則
    // ****************今回はuseQuery()の戻り値の変数が固定なのかもしれないから{data, error, loading}の型に従う****************
    // {
    // 	selector: "variable", // 変数のみ
    // 	types: ["boolean"], // 真偽型
    // 	format: ["PascalCase"], // パスカルケース
    // 	prefix: ["no", "is", "has", "should"], // 接頭辞に付ける文字
    // 	filter: { regex: "^_", match: false }, // ^と_は禁止
    // },
    // ],

    // jsx-a11yのドキュメント
    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    // jsx内でのautofocusの使用許可
    "jsx-a11y/no-autofocus": "off",
    // <a>のなんか
    "jsx-a11y/anchor-is-valid": [
      "error",
      // NextjsのLinkにhref属性をオーバーライドしてる？
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
};
