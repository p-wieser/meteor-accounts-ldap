Accounts LDAP - Changelog
=========================

### v1.0 (Does not exist yet -- maybe in the distant future)

- Automated test suite
- Configurable enough to support most LDAP authentication scenarios

### vNext

- Make UI part a separate package

### v0.12.0-rc

- Define new LDAP.searchBase() to let the caller override the base of the LDAP search
- Define new LDAP.createUserIfNotExists() to let the caller decide whether to create or not the new user account
- Define new LDAP.createUser() when the caller wants more control about the account creation

### v0.11.0-rc

- Bump version requirements to be compatible with Meteor 3.0

### v0.10.1

- A fix so that `thumbnailPhoto` field produces the expected base64 string

### v0.10.0

- Updated `ldapjs` dependency to 2.3.3
- Added a `LDAP.tlsOptions` (type: function) to allow dynamic generation of `tlsOptions`

### v0.9.10

- Added an option `formTemplate` to allow an arbitrary template at the end of the login form (e.g. for Google/Microsoft login buttons). Usage: `{{> ldapLoginButtons formTemplate="microsoft_login_button"}}`

### v0.9.7

- You can now use `{{> ldapLoginButtons signInButtonText="Sign me up!"}}` to customize the text on the sign in button

### v0.9.6

- You can now use `{{> ldapLoginButtons forgotPasswordLink=true}}` to give a basic UI to send password reset emails; but you still need to create the UI that handles the reset password uri yourself

### v0.9.5

- Removed the error throw that kills the server

### v0.9.4

- Updated version of `less` dependency to `3.0.1`

### v0.9.2 & v0.9.3

- Version bump as per 1.8.2 instructions in [Meteor changelog](https://github.com/meteor/meteor/blob/devel/History.md)

### v0.9.1

- Fixed accidental regression

### v0.9.0

- Updated `ldapjs` to `1.0.2`

### v0.8.2

- Retry failed queries made using a multi-tenant identifier with regular login details instead

### v0.8.1

- Fixed bad security regression in which plaintext passwords were getting printed to the server console. My apologies to everone using this package.

### v0.8.0

- Added an `LDAP.alwaysCreateAccountIf` optional setting, which means package will accept any email address and password combination and make an account out of it if 1) the combination doesn't already exist and 2) this function (`LDAP.alwaysCreateAccountIf`) returns true

### v0.7.9

- Tenant specific search configurations

### v0.7.8

- Add logging to search filter and ensure search field type

### v0.7.7

- Version bump because something went wrong in the publishing process

### v0.7.6

- Adds support for thumbnail images

### v0.7.5

- Added `onSuccessfulLogin` hook

### v0.7.4

- Added a missing check to avoid a mongo error in certain cases

### v0.7.3

- Addition of `LDAP.attributes` option to change the default set of attributes returned

### v0.7.2

- Handles error if client cannot be created successfully
- Updated the version constraint on `less` package to @2.7.8 (I would like to remove version constraint completely, but this causes the constraint solver to melt down)

### v0.7.1

- Added `LDAP.error` and `LDAP.warn` methods on the server instead of just `LDAP.log`

### v0.7.0

- Updated ldapjs version to 1.0.0
- __[BREAKING CHANGE]__ Package published without platform-specific builds, so a [build toolchain](https://guide.meteor.com/1.4-migration.html#binary-packages-require-build-toolchain) will need to be installed on each target deployment machine

### v0.6.1

- Gave a `uniqueIdentifier` option in the LDAP.settings for more reliable lookups of users in the app database

### v0.6.0

- Added overwriteable `LDAP.appUsername` function to make some multi-tenancy scenarios easier
- Removed some accidental unnecessary globals
- Renamed some variables for easier code readability
- LDAPS support (copied approach from `typ:accounts-ldap`) -- untested

### v0.5.0

- Makes the search filter more flexible without having to overwrite the `LDAP.filter` function

### v0.4.3

- Changed the way that binds are done (using `userPrincipalName` format instead of the email address passed from the client) -- this may mess things up for some people -- I'll accept a PR that makes this part of the process more configurable (I admit that this package caters to the particular ldap setup that I work with.)

### v0.4.2

- Was working fine for quite a while