/**
 * 数字だけで構成されているかどうか
 *
 * @version 2.0.0
 * @since 0.5.0
 * @param str 対象の文字列
 * @param negative 負の数値も含めてチェックするかどうか
 * @param floatingPoint 小数としてチェックするかどうか
 */
export default function (str: string, negative: boolean = true, floatingPoint: boolean = true): boolean {
	let pattern = '^';
	if (negative) {
		pattern += '-?';
	}
	if (floatingPoint) {
		pattern += '(?:[0-9]*\\.)?';
	}
	pattern += '[0-9]+$';
	return new RegExp(pattern).test(str);
}
