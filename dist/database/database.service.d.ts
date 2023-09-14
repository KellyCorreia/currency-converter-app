import { Database } from 'sqlite3';
export declare class DatabaseService {
    private db;
    constructor();
    getDbInstance(): Database;
}
