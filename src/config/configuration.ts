const fs = require('fs');

const filePath = 'config.properties';

export class Configuration {
  apikey: string
  apiURL: string

  constructor() {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
      }

      const properties = {};
      data.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        properties[key.trim()] = value.trim();
      });

      this.apikey = properties['converter.apikey'];
      this.apiURL = properties['converter.apiurl'];
    });
  }
}
