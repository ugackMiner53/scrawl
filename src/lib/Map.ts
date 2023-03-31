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
    "A": "AΑАꓮ",
    "B": "BВꓐΒ",
    "C": "CСꓚ",
    "D": "D",
    "E": "EΕЕꓰ",
    "F": "Fꓝ",
    "G": "Gꓖ",
    "H": "HΗНᕼꓧ",
    "I": "IӀ",
    "J": "Jᒍꓙ",
    "K": "KΚКꓗ",
    "L": "Lᒪꓡ",
    "M": "MΜМꓟ",
    "N": "NΝꓠ",
    "O": "OΟОՕⵔꓳ",
    "P": "PΡРꓑ",
    "Q": "Qⵕ",
    "R": "Rꓣ",
    "S": "SЅՏꓢ",
    "T": "TΤТꓔ",
    "U": "UՍꓴ",
    "V": "Vⴸꓦ",
    "W": "WԜꓪ",
    "X": "XΧХⵝꓫ",
    "Y": "YΥҮꓬ",
    "Z": "ZΖꓜ",
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