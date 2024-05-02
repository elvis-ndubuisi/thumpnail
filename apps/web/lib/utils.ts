import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskAPiKey(apiKey: string): string {
  if (apiKey.length <= 10) {
    return apiKey;
  }

  const visiblePart = apiKey.substring(0, 15);
  const maskedPart = "*".repeat(apiKey.length - 20);

  return `${visiblePart}${maskedPart}`;
}
