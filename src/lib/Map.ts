// Invisible characters
export const invisible = {
    "0": "\u200b",   // zero-width-space
    "1": "\u200c",   // zero-width-non-joiner
    "2": "\ufeff",   // zero-width-no-break-space
    "3": "\u2062",   // invisible-times
    "4": "\u2063",   // invisible-separator
    "5": "\u2064",   // invisible-plus
    "6": "\u2061",   // function-application
    "7": "\u206e",   // national-digit-shapes
    "8": "\u206f",   // nominal-digit-shapes
    "9": "\u2060",   // word-joiner
    
    // "\u1784",   // khmer-vowel-inherent-aq       Removed for being joining characters
    // "\u3164",   // hangul-filler
    // "\u115f",   // hangul-choseong-filler
    // "\u1160",   // hangul-jungseong-filler
    // "\u1785",   // khmer-vowel-inherent-aa
    // "\u061c",   // arabic-letter-mark
    // "\u180e",   // mongolian-vowel-separator
};

export function decToInvisible(input : string) : string {
    return input.split("").map(digit => digit = invisible[digit]).join();
}

export function invisibleToDec(input : string) : string {
    return input.split("").map(char => char = Object.keys(invisible).find(key => invisible[key] === char)).join();
}

// Alphabet
export const alphabet = {
    "a": [
        "\u0430",   // а
        "\u1d86a"   // 𝚊
    ]
}