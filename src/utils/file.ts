import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    // verify if file exists
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // remove file
  await fs.promises.unlink(filename);
};
