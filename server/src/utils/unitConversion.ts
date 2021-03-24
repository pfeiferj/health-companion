/**
 * Converts kilograms to pounds with the conversion rate 1 kg = 2.20462262185 lbs.
 */
export function kilogramsToPounds(kilograms: number): number {
  return kilograms * 2.20462262185;
}

/**
 * Converts pounds to kilograms with the conversion rate 1 kg = 2.20462262185 lbs.
 */
export function poundsToKilograms(pounds: number): number {
  return pounds / 2.20462262185;
}
