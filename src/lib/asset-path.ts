export function assetPath(path: string) {
  return `${process.env.NODE_ENV === "production" ? "/lp-nexicode" : ""}${path}`;
}
