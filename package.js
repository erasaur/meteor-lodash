Package.describe({
  name: "erasaur:meteor-lodash",
  summary: "Wrapper for Lo-Dash v3.2.0",
  version: "3.2.0",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Npm.depends({ 'lodash': '3.2.0' });

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles(['lodash.js', 'client.js'], 'client');
  api.addFiles('server.js', 'server');

  api.export('lodash');
  api.export('_');
});
