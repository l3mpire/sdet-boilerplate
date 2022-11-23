# SDET boilerplate

abstract: Provides a simple repository containing basic end-to-end test boiler plate for lempire SDET exercices.

Intent:

- challenge end-to-end testing understanding
- challenge basic Javascript understanding

Environment:

- Requires a npm/node working environment
- Requires a useable internet connection
- Lempire uses macos hardware for Tech environment, hence this npm project tailored for this, but you might use any platform/OS at your disposable for the purpose of this test. You only really need a running Cypress app.

## Content of this repository

This git repository provides:

- an NPM project which installs Cypress,
- some basic .js test files.

We use Cypress (https://www.cypress.io/) as our main e2e test tool. This works fine and is very customizable.

## Install procedure

First install npm dependencies

`npm install`

then run cypress using

`npm test`

This will launches Cypress e2e windowed app.

## Running your test suite

1. You might want to select "E2E Testing", as cypress doesn't provide component testing for Blaze.
2. You might want to select "Chrome" as a browser, which is our primary target, and works fine with cypress.
3. You might want to select e2e-create-account.cy.js file

Cypress should now run this very simple test suite against staging.lemlist.com.
This is our staging playground, so what happens there doesn't matter too much ;)

For this test, we'd like you to challenge the login screen, the first few account creation screens, what you deem appropriate. You can now work your magic, you should probably be in known territory by now.
