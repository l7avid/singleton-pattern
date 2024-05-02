// In this example we are gonna explain how the singleton pattern works.
// We have a class Database, and we want to create only one instance of it, if this instance already exists the program should return to me that existing instance
// If not, the program creates only one instance of it

export class Database {
  private static instance: Database
  private _name = "PostgreSQL"
  private _version = "1.0.2"
  private counter = 0
  private constructor() {
      this.counter++
  }

  public static getInstance(): Database {
      if (!Database.instance) {
          Database.instance = new Database();
      }
      return Database.instance
  }

}

const dataBase1 = Database.getInstance();
const dataBase2 = Database.getInstance();
const dataBase3 = Database.getInstance();

console.log(dataBase1);
console.log(dataBase2);
console.log(dataBase3);

