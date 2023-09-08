
export class ExternalConverterResponseClass {
  success: boolean;
  query: QueryClass;
  info: InfoClass;
  result: number;
  constructor(success, query, info, result) {
    success = success;
    query = query;
    info = info;
    result = result;
  }
}

export class QueryClass {
  from: string;
  to: string;
  amount: number;
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}
export class InfoClass {
  timestamp: number;
  quote: number;
  constructor(timestamp, quote) {
    this.timestamp = timestamp;
    this.quote = quote;
  }
}
