export function getContrastTextColor(bgColor: string): "black" | "white" {
  // Remove hash symbol if present
  const color = bgColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for bright backgrounds, white for dark backgrounds
  return luminance > 0.5 ? "black" : "white";
}

export function darkenColor(hex: string, percent: number): string {
  // Remove "#" if present
  hex = hex.replace(/^#/, "");

  // Expand shorthand hex (e.g., "fff") to full form (e.g., "ffffff")
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Convert hex to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Darken each channel
  const factor = (100 - percent) / 100;

  const darken = (channel: number) =>
    Math.max(0, Math.min(255, Math.floor(channel * factor)));

  const rD = darken(r);
  const gD = darken(g);
  const bD = darken(b);

  // Convert back to hex and return
  const toHex = (c: number) => c.toString(16).padStart(2, "0");
  return `#${toHex(rD)}${toHex(gD)}${toHex(bD)}`;
}
