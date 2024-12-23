Package.describe({
  name : 'babrahams:accounts-ldap',
  summary: 'Meteor account login via LDAP',
  version: '0.12.0-rc',
  git : 'https://github.com/JackAdams/meteor-accounts-ldap',
  documentation: 'README.md'
});

Npm.depends({'ldapjs' : '2.3.3', 'connect' : '2.19.3'});

Package.onUse(function (api) {
  api.versionsFrom(['1.8.2', '2.3', '3.0']);
  api.use(['webapp'], 'server');
  api.use(['accounts-base', 'underscore', 'less@3.0.1 || 4.0.0'], ['client', 'server']);
  api.use('accounts-password', 'server');
  api.imply('accounts-base', ['client', 'server']);
  api.use(['templating@1.3.2','blaze@2.3.4 || 3.0.0','spacebars@1.0.15 || 2.0.0','jquery@1.11.11 || 2.0.0 || 3.0.0', 'reactive-var'], 'client');
  api.addFiles([
    'ldap_client.html',
    'ldap_client.js',
    'ldap_client.less'], 'client');
  api.addFiles('ldap_server.js', 'server');
  api.export('LDAP');
});