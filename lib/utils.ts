import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMarketingUrl(path: string): string {
  const marketingBaseUrl = process.env.NEXT_PUBLIC_MARKETING_URL !== undefined 
    ? process.env.NEXT_PUBLIC_MARKETING_URL 
    : "https://thefmcgfestival.com";
    
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // App-specific dynamic paths
  const dynamicPaths = ["/dashboard", "/register", "/sign-in", "/sign-up", "/api"];
  if (dynamicPaths.some(p => cleanPath.startsWith(p))) {
    return cleanPath;
  }
  
  // For other links, prepend the marketing domain if defined
  return marketingBaseUrl ? `${marketingBaseUrl}${cleanPath === '/' ? '' : cleanPath}` : cleanPath;
}

