var ghpages = require('gh-pages');

const callback = (err) => {
  if (err) {
    process.exit(1)
  }
}

ghpages.publish('build', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/pathephone/pathephone-web.git',
  silent: true
}, callback);