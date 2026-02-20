# Melo ꫂ᭪
A simple desktop music player built with Electron and the Jamendo API.

## Setup

1. **Install dependencies**
```bash
npm install
```

2. **Create a `config.js` file** in the project root:
```js
module.exports = {
  JAMENDO_CLIENT_ID: 'your_key_here'
};
```
Get a free API key at [developer.jamendo.com](https://developer.jamendo.com)

3. **Run the app**
```bash
npm start
```

## Build
```bash
npm run build
```

## Notes
- `config.js` is gitignored — never commit your API key
- Requires Node.js and npm