// data.service.ts
import { Injectable } from '@nestjs/common';
import { Database } from 'sqlite3';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class DataService {
  private db: Database;

  constructor(private readonly databaseService: DatabaseService) {
    this.db = this.databaseService.getDbInstance();
  }
}
