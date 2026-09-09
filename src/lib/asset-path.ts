const basePath = process.env.NODE_ENV === "production" ? "/lp-nexicode" : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}
