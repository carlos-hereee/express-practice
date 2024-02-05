export const port = process.env.PORT || 3200;
export const clientUrl = process.env.CLIENT_URL || "";
export const clientUrlAlt = process.env.CLIENT_URL_ALT || "";
export const allowedMethods = process.env.ALLOWED_METHODS || ["GET"];
export const uri = process.env.MONGO_URI || "";
export const isDev = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev";
