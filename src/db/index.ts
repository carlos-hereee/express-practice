import mongoose from "mongoose";
import type { MongoError } from "mongodb";
import type { Express } from "express";
import { port, uri, isDev } from "@utils/app/config";

// mongoose no longer requires these options
// const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const connect = async (app: Express) => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => {
      if (isDev) console.log(`\n\n*** Server listening on port: ${port} ***\n\n`);
    });
  } catch (error) {
    const err = error as MongoError;
    if (isDev) console.log("\n\n*** An error was found***\n\n", err.stack, "\n\n");
  }
};
export default connect;
