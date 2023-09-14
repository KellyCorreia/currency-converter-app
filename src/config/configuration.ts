const fs = require('fs');

// Define the path to the property file
const filePath = 'config.properties'; // Adjust the path as necessary

export class Configuration {
  apikey: string
  apiURL: string

  constructor() {
    // Read the property file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
      }

      // Parse the content into an object
      const properties = {};
      data.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        properties[key.trim()] = value.trim();
      });

      // Access the property
      this.apikey = properties['converter.apikey'];
      this.apiURL = properties['converter.apiurl']
      console.log(`Apikey: ${this.apikey} | ApiURL: ${this.apiURL}`);
    });
  }
}
