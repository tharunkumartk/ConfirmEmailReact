import * as Realm from "realm-web";

export const confirmUser = async (token: string, tokenId: string) => {
  try {
    const app = Realm.App.getApp("data-jrnnm");
    console.log("confirming user...");
    await app.emailPasswordAuth.confirmUser({
      token,
      tokenId,
    });
    console.log("confirmed user!");
    return true;
  } catch (err) {
    console.error("Failed to confirm user: ", err);
    return false;
  }
};
