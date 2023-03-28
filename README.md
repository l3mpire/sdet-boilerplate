# SDET boilerplate

abstract: Provides a simple repository containing basic end-to-end test boiler plate for lempire SDET exercises.

Intent:

- challenge end-to-end testing understanding
- challenge basic Javascript understanding

Environment:

- Requires a npm/node working environment
- Requires a useable internet connection
- Lempire uses macos as Tech environment, hence this npm project tailored for this, but you might use any platform/OS at your disposable for the purpose of this test.

## Content of this repository

This git repository provides:

- an NPM project which installs playwright,
- some basic .js test files.

We use Playwright (https://playwright.dev/) as our main e2e test tool. This works fine and is very customizable.
Playwright intro is here: https://playwright.dev/docs/intro

## Install procedure of this little project

First install npm dependencies (install playwright)

`npm install`

Install playwright (which install some browsers)

`npx playwright install`

Then run the test framework using

`npm run test`

This will launches playwright in command line mode.

## Running your test suite

playwright should now run this very simple test suite against https://app.lemlist.com (en compte trial)

For this test, we'd like you to challenge the login screen, the first few account creation screens, what you deem appropriate. You can now work your magic, you should probably be in known territory by now.
