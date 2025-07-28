import antfu from '@antfu/eslint-config'
import regexpConfig from '@antfu/eslint-config/regexp' // 使用 ES 模块导入

export default antfu(
  {
    lessOpinionated: true,
    formatters: true,
    vue: true,
    typescript: true,
    unocss: true,
    ignores: ['node_modules', 'dist', 'public', 'coverage'], // 忽略不必要的目录
  },
  {
    files: ['src/**/*.{js,ts,vue}'], // 限制规则应用范围
    rules: {
      'no-console': 'off',
      'jsdoc/convert-to-jsdoc-comments': ['warn'],
      'n/prefer-global/process': 'off',
      'vue/first-attribute-linebreak': 'off',
      'ts/no-unused-expressions': 'off',
      'unused-imports/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  }
)
// 修正正则表达式规则禁用方式（使用 ES 模块语法）
.override({
  files: ['**/*.{js,ts}'],
  rules: {
    ...Object.fromEntries(
      Object.keys(regexpConfig.rules).map(rule => [rule, 'off'])
    )
  }
})