// JSON with url with all opts and shit.
const config = {
  url: 'http://localhost:3000/',
  phoneNumber: '123-456-7890',
  email: 'test@example.com',
  password: 'test1234',
  browserOptions: {
    devtools: true,
    headless: false,
    viewport: {
      width: 1920,
      height: 1080
    },
    args: [
      // '--disable-extensions-except=/path/to/extension/',
      // '--load-extension=/path/to/extension/'
    ]
  }
};

module.exports.config = config;
