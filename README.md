# github-users-search
Search github users (React,Redux,TypeScript,Jest,Enzyme).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).I developed this repo for reference to me and other developers.

[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

[![Build Status](https://travis-ci.com/devayarhlaine/github-users-search.svg?branch=master)](https://travis-ci.com/devayarhlaine/github-users-search)
[![Coverage Status](https://coveralls.io/repos/github/devayarhlaine/github-users-search/badge.svg?branch=master&service=github)](https://coveralls.io/github/devayarhlaine/github-users-search)

## Demo Link
https://devayarhlaine.github.io/github-users-search/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Dependancies
State Management :
- react-redux
- redux
- redux-thunk
- @types/react-redux
- typesafe-actions

Testing :
- enzyme 
- enzyme-adapter-react-16
- @types/enzyme
- @types/enzyme-adapter-react-16

Getting API Data :
- axios

## CI/CD
[Travis CI](https://travis-ci.com/)

I use Travis CI (Continuous Integration/Continuous Deployment) to deploy our site automatically to github pages.

![CI/CD Report](/docs/images/ci-cd.jpg)

[Checking travis ci config file (.yml)?](http://www.yamllint.com/)

## Debounce Time Reference Questions
- [How to use rxjs debounce time on react input](https://stackoverflow.com/questions/44299632/rxjs-debounce-on-react-text-input-component)
- [How to use subject with react hooks](https://stackoverflow.com/questions/57631094/using-react-useeffect-hook-with-rxjs-mergemap-operator)

## Current To Do List
- [ ] Complete unit test coverage up to 90 %
- [x] Call github search api only when user complete typing ( Prefer to use rxjs debouncetime )
- [x] Enhancement on UI/UX

## Contribution
I will make safe master brand.
### Pull Request
- Fork the repo and create your branch from master. A guide on how to fork a repository: https://help.github.com/articles/fork-a-repo/

- Open terminal (e.g. Terminal, iTerm, Git Bash or Git Shell) and type:

- `$ git clone https://github.com/<your_username>/github-users-search` \
`$ cd github-users-search` \
`$ git checkout -b my_branch`
- Then create PR

Note : I generally don't accept pull requests that are untested, or break the build.

### Issues
https://github.com/devayarhlaine/github-users-search/issues


Happy Coding!