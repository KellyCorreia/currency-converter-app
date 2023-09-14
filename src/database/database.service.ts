// database.service.ts
import { Injectable } from '@nestjs/common';
import { Database } from 'sqlite3';

@Injectable()
export class DatabaseService {
  private db: Database;

  constructor() {
    // Initialize the SQLite database
    this.db = new Database('app-database.db');
  }

  getDbInstance(): Database {
    return this.db;
  }
}
