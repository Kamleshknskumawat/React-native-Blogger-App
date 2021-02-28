import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import App from './src/App';

// import { Database } from "@nozbe/watermelondb";
// import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
// import { mySchema } from "./src/database/schema";
// import { dbModels } from "./src/database/index.js";

// // First, create the adapter to the underlying database:
// const adapter = new SQLiteAdapter({
//   dbName: "bloggerDB",
//   schema: mySchema
// });

// // Then, make a Watermelon database from it!
// const database = new Database({
//   adapter,
//   modelClasses: dbModels
// });

AppRegistry.registerComponent(appName, () => App);
