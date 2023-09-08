"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoClass = exports.QueryClass = exports.ExternalConverterResponseClass = void 0;
class ExternalConverterResponseClass {
    constructor(success, query, info, result) {
        success = success;
        query = query;
        info = info;
        result = result;
    }
}
exports.ExternalConverterResponseClass = ExternalConverterResponseClass;
class QueryClass {
    constructor(from, to, amount) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}
exports.QueryClass = QueryClass;
class InfoClass {
    constructor(timestamp, quote) {
        this.timestamp = timestamp;
        this.quote = quote;
    }
}
exports.InfoClass = InfoClass;
//# sourceMappingURL=external-converter-response.class.js.map