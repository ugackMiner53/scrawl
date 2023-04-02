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
    "a": "aа𝚊",
    "b": "bᖯ𝖻",
    "c": "cϲсᴄⲥꮯ𝖼𝚌",
    "d": "dԁⅾꓒ𝖽",
    "e": "eе𝖾𝚎",
    "f": "f𝖿",
    "g": "gɡց𝗀",
    "h": "hհ𝗁",
    "i": "iіᎥ𝗂",
    "j": "jϳј𝗃",
    "k": "k𝗄",
    "l": "lƖ",
    "m": "mⅿ𝗆",
    "n": "nո𝗇",
    "o": "oοоօ൦ჿᴏᴑⲟ𐐬𝗈",
    "p": "pρрⲣ𝗉",
    "q": "qԛ𝗊",
    "r": "r𝗋",
    "s": "sѕꜱ𐑈𝗌",
    "t": "t𝗍",
    "u": "uսᴜ𐓶𝗎",
    "v": "vνᴠ𝗏",
    "w": "wѡԝᴡ𝗐",
    "x": "xх𝗑",
    "y": "yу𝗒",
    "z": "zᴢ𝗓",
    // #endregion
}

export const digits = {

}