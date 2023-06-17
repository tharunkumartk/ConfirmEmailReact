import * as Realm from "realm-web";

export const confirmUser = async (token: string, tokenId: string) => {
  try {
    const app = Realm.App.getApp("data-jrnnm");
    console.log("confirming user...");
    await app.emailPasswordAuth.confirmUser({
      token:
        "660df619b93605e1cfb3cbb47fab49413bc9085c556e72002ca768a0c6e402cd3e8ce10d61e81da033ba1c035d2f2bd74e1152cbbc29f19176d9da83144f8df4",
      tokenId: "648dc46ae63f0f06bce83cfd",
    });
    console.log("confirmed user!");
    return true;
  } catch (err) {
    console.error("Failed to confirm user: ", err);
    return false;
  }
};
