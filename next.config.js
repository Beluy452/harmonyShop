module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      },
      images: {
        domains: ['assets.vercel.com'],
      },
    )
    return config
  },
}