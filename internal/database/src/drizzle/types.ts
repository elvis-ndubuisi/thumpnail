import type {InferSelectModel} from "drizzle-orm";

import * as schemas from "./schema";

export type Token = InferSelectModel<typeof schemas.users>;
