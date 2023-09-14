"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const fs = require('fs');
const filePath = 'config.properties';
class Configuration {
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
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map