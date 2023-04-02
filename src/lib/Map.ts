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
    ",": "\u2060",   // word-joiner
};

export function stringToInvisible(input : string) : string {
    return input.split("").map(letter => letter.codePointAt(0).toString(9)).join(",").split("").map(digit => digit = invisible[digit]).join("");
    // return input.split("").map(digit => digit = invisible[digit]).join();
}

export function invisibleToString(input : string) : string {
    return input.split("").map(digit => digit = Object.keys(invisible).find(key => invisible[key] === digit)).join("").split(",").map(letter => String.fromCharCode(parseInt(letter, 9))).join("");
}

// Alphabet
export const alphabet = {
    // #region Uppercase
    "A": "ΑАꓮ𝖠",
    "B": "ВꓐΒ𝖡",
    "C": "Сꓚ𝖢",
    "D": "ꓓᗞ𝖣",
    "E": "ΕЕꓰ𝖤",
    "F": "ꓝ𝖥",
    "G": "ꓖ𝖦",
    "H": "ΗНᕼꓧ𝖧",
    "I": "Ӏ𝖨",
    "J": "ᒍꓙ",
    "K": "ΚКꓗ𝖪",
    "L": "ᒪꓡ𝖫",
    "M": "ΜМꓟ𝖬",
    "N": "Νꓠ𝖭",
    "O": "ΟОՕⵔꓳ𝖮",
    "P": "ΡРꓑ𝖯",
    "Q": "ⵕ𝖰",
    "R": "ꓣ𝖱",
    "S": "ЅՏꓢ𝖲",
    "T": "ΤТꓔ𝖳",
    "U": "Սꓴ𝖴",
    "V": "ⴸꓦ𝖵",
    "W": "Ԝꓪ𝖶",
    "X": "ΧХⵝꓫ𝖷",
    "Y": "ΥҮꓬ𝖸",
    "Z": "Ζꓜ𝖹",
    // #endregion 
    // #region Lowercase
    "a": "а𝖺",
    "b": "𝖻",
    "c": "ϲсᴄⅽ𝖼",
    "d": "ⅾ𝖽",
    "e": "е𝖾",
    "f": "ꬵ𝖿",
    "g": "ɡց𝗀",
    "h": "հ𝗁",
    "i": "Ꭵⅰ𝗂",
    "j": "ϳј𝗃",
    "k": "𝗄",
    "l": "Ⅰⅼⵏꓲ𐌉𐌠𝗅",
    "m": "ⅿ𝗆",
    "n": "ո𝗇",
    "o": "οоօ໐ᴏ𝗈",
    "p": "р⍴𝗉",
    "q": "ԛզ𝗊",
    "r": "𝗋",
    "s": "ѕꜱ𝗌",
    "t": "𝗍",
    "u": "ս𝗎",
    "v": "νᴠⅴ𝗏",
    "w": "ԝᴡ𝗐",
    "x": "хⅹ𝗑",
    "y": "у𝗒",
    "z": "ᴢ𝗓",
    // #endregion
}

export const digits = {

}