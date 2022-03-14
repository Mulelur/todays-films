export function addAlpha(color: string, opacity: number): string {
    // coerce values so ti is between 0 and 1.
    const o = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + o.toString(16).toUpperCase();
  }