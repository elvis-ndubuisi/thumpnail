import {Ratelimit} from "@upstash/ratelimit";
import {kv} from "@vercel/kv";

export const rateLimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(3, "10 s"), // 5 requests from the same IP in 10 seconds
});
