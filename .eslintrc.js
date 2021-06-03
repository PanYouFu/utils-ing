module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'markdown',
    'jest',
    '@typescript-eslint',
  ],
  // parserOptions: {
  //   project: './tsconfig.eslint.json',
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true,
  //   },
  // },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
      },
    },
  ],
  // 自定义规则
  rules: {
    // eslint base
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'interface',
    ],
    'comma-dangle': [2, 'always-multiline'], // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    'no-unused-expressions': 2, // 禁止无用的表达式
    'operator-linebreak': [2, 'after'], // 换行时运算符在行尾还是行首
    'no-extra-semi': 0,
    semi: [2, 'never'], // http://eslint.cn/docs/rules/semi
    // 'space-after-keywords': [2, 'always'], // 关键字后面是否要空一格
    indent: [2, 2], // 缩进风格
    'no-multi-spaces': 2, // 不能用多余的空格
    'no-trailing-spaces': 2, // 一行结束后不要有空格
    'space-infix-ops': 2, // 确保中缀操作员周围有空间
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // 对象冒号前后空格
    'object-curly-spacing': [2, 'always'], // 对象大括号前后空格
    'comma-spacing': 2, // 逗号后有空格
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // 不能有声明后未被使用的变量或参数
    eqeqeq: 2, // 必须使用全等
    'no-spaced-func': 2, // 函数调用时函数名与()之间不能有空格
    'space-before-function-paren': [2, 'always'], // 函数定义时括号前面有空格
    'spaced-comment': 2, // 注释风格要不要有空格
    'eol-last': 2, // 非空文件的末尾至少执行一个换行符
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过2行
    'no-var': 2, // 禁用var（用let和const代替）
    'no-extra-parens': 2, // 禁止非必要的括号
    'no-mixed-spaces-and-tabs': [2, true], // 禁止混用tab和空格
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套（let isYes = answer === 1 ? true : false）
    'semi-spacing': [2, { before: false, after: true }], // 分号前后空格
    // 'comma-dangle': [2, 'never'], // 尾随逗号
    'max-len': [0, { code: 120 }], // 代码长度
    'id-length': [0, { min: 1, max: 20 }], // 变量名长度
  },
}
