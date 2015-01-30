Package.describe({
  summary: "Wrapper for Lo-Dash v3.0",
  version: "0.1.0",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Npm.depends({ 'lodash': '3.0.0' });

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.addFiles(['lodash.js', 'client.js'], 'client');
  api.addFiles('server.js', 'server');

  if (api.export) {
    api.export('lodash');
    api.export('_');
  }
});
