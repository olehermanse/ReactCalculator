# Example Calculator App

An example project to get started using npm build scripts and inline-source with Material-UI.
Intended to be simple and easy to understand, the calculator itself is not impressive or even useful at all.

## Online Demo

Test the web app here: https://olehermanse.github.io/ReactCalculator/

## Download

Clone the repository using git:
```
$ git clone git@github.com:olehermanse/ReactCalculator.git
```

## Install dependencies

npm uses package.json to download the correct dependencies:
```
$ npm install
```

## Running the build system

```
$ npm run build
```

## Seeing the results

Open `build/index.html` in a browser to see resulting web app.
Use "View Page Source" functionality to see the inlined content in HTML.
If you open the networking console, you should see that only `index.html` is requested, no requests are being made for CSS or JavaScript files.
