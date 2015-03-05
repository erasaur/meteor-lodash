Package.describe({
  name: "erasaur:meteor-lodash",
  summary: "Wrapper for Lo-Dash v3.4.0",
  version: "3.4.0",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lodash/lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
  api.export('_');
});

