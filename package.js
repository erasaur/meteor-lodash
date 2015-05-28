Package.describe({
  name: "erasaur:meteor-lodash",
  summary: "Wrapper for Lo-Dash v3.9.3",
  version: "3.9.3",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lodash/lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
  api.export('_');
});

