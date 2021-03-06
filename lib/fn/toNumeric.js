"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var remove_1 = require("./remove");
var replace_1 = require("./replace");
var toNarrow_1 = require("./toNarrow");
/**
 * 数字に変換する
 *
 * @version 0.5.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の値を許可してマイナスをつけるかどうか
 * @param floatingPoint 小数を許可してドットをつけるかどうか
 */
function default_1(str) {
    var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var floatingPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    // 半角化
    str = toNarrow_1.default(str);
    // 数字・ハイフン（マイナス）・ドット意外を削除
    str = remove_1.default(str, /[^0-9\.\-]/gm);
    if (negative) {
        // 最初のにくるハイフンをnに一時的に変換
        str = replace_1.default(str, /^-/, 'n');
    }
    // ハイフンを全て削除
    str = remove_1.default(str, /-/g);
    if (negative) {
        // ハイフンを元に戻す
        str = replace_1.default(str, 'n', '-');
    }
    if (floatingPoint) {
        // 文字列中で一番最初にくるドットを_に一時的に変換
        str = replace_1.default(str, /\.([0-9])/, '_$1');
    }
    // ドットを全て削除
    str = remove_1.default(str, /\./g);
    if (floatingPoint) {
        // ドットを元に戻す
        str = replace_1.default(str, '_', '.');
    }
    return str;
}
exports.default = default_1;