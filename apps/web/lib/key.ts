import keyGenerator from "generate-api-key";

export function generateKeys() {
  const ID = keyGenerator({method: "string", max: 20, min: 14});
  const PK = keyGenerator({method: "uuidv4", dashes: false, prefix: "pk_"});
}

export function generateV4Key() {}

export function generateV5Key() {}
