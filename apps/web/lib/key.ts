import keyGenerator, {type ApiKeyResults} from "generate-api-key";

export function generateKeys(): {ID: ApiKeyResults; PK: ApiKeyResults} {
  const ID = keyGenerator({method: "string", max: 20, min: 14});
  const PK = keyGenerator({method: "uuidv4", dashes: false, prefix: "pk_"});
  return {ID, PK};
}

export function generateV4Key() {}

export function generateV5Key() {}
