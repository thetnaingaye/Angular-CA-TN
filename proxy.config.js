const CONFIG = [
    {
      context: [ '/giphy_server/**' ],
      target: 'http://localhost:8080',
      secure: false,
      logLevel: "debug"
    },
  ];
  
  module.exports = CONFIG;