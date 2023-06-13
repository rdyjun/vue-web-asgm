module.exports = {
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'  // 'my-project'를 실제 GitHub 리포지토리 이름으로 변경하세요.
    : '/'
}
