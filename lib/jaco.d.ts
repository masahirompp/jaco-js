/**
 * ## Jacoクラス
 *
 * 日本語やマルチバイト文字・ASCII文字を扱いやすくするためのラッパークラス
 *
 * 文字列クラスを継承してはいないがメソッドは同等のものが実装されている。
 * ただし基本的にほとんどのメソッドが破壊的メソッドかつチェインナブルである。
 *
 * @version 0.5.0
 * @since 0.1.0
 */
export default class Jaco {
    /**
     * 文字列長
     *
     * - サロゲートペアを考慮する
     *
     * @version 2.0.0
     * @since 2.0.0
     * @readonly
     */
    readonly length: number;
    /**
     * 保持する文字列
     *
     * @version 2.0.0
     * @since 0.1.0
     */
    private $;
    /**
     * コンストラクタ
     *
     * ```javascript
     * var a = new Jaco("あああ");
     * ```
     *
     * @version 2.0.0
     * @since 0.1.0
     * @param str 対象の文字列
     */
    constructor(str: any);
    /**
     * 半濁点を追加する
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    addSemivoicedMarks(): Jaco;
    /**
     * 濁点を追加する
     *
     * @version 1.1.0
     * @since 1.1.0
     */
    addVoicedMarks(): Jaco;
    /**
     * 後方結合
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param element 結合する文字列
     */
    append(element: string | Jaco): Jaco;
    /**
     * 文字列のバイトサイズを返す
     *
     * @version 0.2.0
     * @since 0.2.0
     */
    byteSize(): number;
    /**
     * 文字列から指定位置の文字を返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.charAt とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param index 指定位置
     */
    charAt(index?: number): Jaco;
    /**
     * 指定位置のUnicodeコードポイントを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.charCodeAt とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param charCodeAt 指定位置
     * @return Unicodeコードポイント値
     */
    charCodeAt(index?: number): number;
    /**
     * コピーを生成する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return コピー
     */
    clone(): Jaco;
    /**
     * 濁点・半濁点とひらがな・かたかなを結合させる
     *
     * @version 2.0.0
     * @since 1.2.0
     * @param convertOnly ひらがな・かたかなと結合させずに、文字だけ結合文字に変換
     * @return インスタンス自身
     */
    combinateSoundMarks(convertOnly?: boolean): Jaco;
    /**
     * 文字列連結をおこなう
     *
     * - String.prototype.concat とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param ...args 文字列もしくはJacoインスタンス
     * @return インスタンス自身
     */
    concat(...args: (Jaco | string | Jaco[] | string[])[]): Jaco;
    /**
     * 繰り返し記号をかなに置き換える
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return インスタンス自信
     */
    convertIterationMarks(): Jaco;
    /**
     * 長音符をかなに置き換える
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return インスタンス自信
     */
    convertProlongedSoundMarks(): Jaco;
    /**
     * 引数に指定された文字列が末尾と合致するか
     *
     * - サロゲートペアを考慮する
     * - String.prototype.endWith とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 末尾の位置
     * @return 合致したかどうか
     */
    endWith(search: Jaco | string, position?: number): boolean;
    /**
     * 該当の文字のいずれかを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    has(characters: string | Jaco): boolean;
    /**
     * サロゲートペア文字列を含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    hasSurrogatePair(): boolean;
    /**
     * 小書き文字を含むかどうか
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return 小書き文字を含むかどうか
     */
    hasSmallLetter(): boolean;
    /**
     * ペアになっていないサロゲートコードポイントを含んでいるかどうか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return 結果の真偽
     */
    hasUnpairedSurrogate(): boolean;
    /**
     * 引数に指定された文字列が部分合致するか
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 開始位置
     * @return 合致したかどうか
     */
    includes(search: Jaco | string, position?: number): boolean;
    /**
     * 指定された文字列が最初に現れるインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.indexOf とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param str 検索文字列
     * @param fromIndex 検索位置
     * @return インデックス
     *
     */
    indexOf(str: Jaco | string, fromIndex?: number): number;
    /**
     * 完全マッチ
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param target 比較する文字列
     * @return 結果の真偽
     */
    is(target: string | Jaco): boolean;
    /**
     * 文字が空かどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    isEmpty(): boolean;
    /**
     * 数字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.5.0
     * @param negative 負の数値も含めてチェックするかどうか
     * @param floatingPoint 小数としてチェックするかどうか
     * @return 結果の真偽
     */
    isNumeric(negative?: boolean, floatingPoint?: boolean): boolean;
    /**
     * 該当の文字だけで構成されているかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param characters 文字セット
     * @return 結果の真偽
     */
    isOnly(characters: string | Jaco): boolean;
    /**
     * ひらがなだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    isOnlyHiragana(): boolean;
    /**
     * カタカナだけで構成されているかどうか
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 結果の真偽
     */
    isOnlyKatakana(): boolean;
    /**
     * 指定された文字列が最後に現れるインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.lastIndexOf とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param str 検索文字列
     * @param [fromIndex] 検索位置
     * @return インデックス
     *
     */
    lastIndexOf(str: Jaco | string, fromIndex?: number): number;
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を得る
     *
     * - String.prototype.match とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return マッチ結果
     */
    match(regexp: RegExp): RegExpMatchArray | null;
    /**
     * 正規表現に対する文字列 のマッチングの際に、そのマッチ結果を純粋な配列で得る
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return マッチした文字列の配列
     */
    matches(regexp: RegExp): string[];
    /**
     * 【未実装】Unicode 正規化形式を返す
     *
     * TODO: 日本語に関係する文字になるべく対応する
     *
     * - String.prototype.normalize とは非互換
     *
     * @version x.x.x
     * @since x.x.x
     * @param form 正規化形式の種類
     * @return インスタンス自身
     */
    normalize(form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): Jaco;
    /**
     * 最終的な文字列が指定された長さに到達するように文字列で延長する
     *
     * - サロゲートペアを考慮する
     * - String.prototype.padEnd とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param targetLength 最終的な長さ
     * @param padString 延長する文字列
     * @return インスタンス自身が保持する文字列
     */
    padEnd(targetLength: number, padString?: string | Jaco): Jaco;
    /**
     * 最終的な文字列が指定された長さに到達するように文字列を先頭に追加する
     *
     * - サロゲートペアを考慮する
     * - String.prototype.padStart とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param targetLength 最終的な長さ
     * @param padString 延長する文字列
     * @return インスタンス自身が保持する文字列
     */
    padStart(targetLength: number, padString?: string | Jaco): Jaco;
    /**
     * 前方結合
     *
     * ```javascript
     * new Jaco("あああ").prepend("いいい").toString() // => "いいいあああ"
     * ```
     *
     * @version 0.2.0
     * @since 0.2.0
     * @param element 結合する文字列
     * @return インスタンス自身
     */
    prepend(element: string | Jaco): Jaco;
    /**
     * 文字列を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern 取り除く文字列
     * @return インスタンス自身
     */
    remove(pattern: RegExp | {
        toString(): string;
    }): Jaco;
    /**
     * ペアになっていないサロゲートコードポイントの削除
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return インスタンス自身
     */
    removeUnpairedSurrogate(): Jaco;
    /**
     * 濁点・半濁点を取り除く
     *
     * @version 1.1.0
     * @since 1.1.0
     * @param ignoreSingleMark 単体の濁点・半濁点を除去するかどうか
     * @return インスタンス自信
     */
    removeVoicedMarks(ignoreSingleMark?: boolean): Jaco;
    /**
     * 文字列を繰り返す
     *
     * - String.prototype.repeat とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param times 繰り返しの回数
     * @return インスタンス自身が保持する文字列
     */
    repeat(times?: number): Jaco;
    /**
     * 文字列をパターンで置換する
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern  対象のパターン
     * @param replacement 置換する文字列
     * @return インスタンス自身
     */
    replace(pattern: RegExp | {
        toString(): string;
    }, replacement: {
        toString(): string;
    }): Jaco;
    /**
     * キーがパターン・値が置換文字列のハッシュマップによって置換する
     *
     * @version 2.0.0
     * @since 0.1.0
     * @param  convMap キーがパターン・値が置換文字列のハッシュマップ
     * @return インスタンス自身
     */
    replaceFromMap(convMap: {
        [pattern: string]: string;
    }): Jaco;
    /**
     * 正規表現にマッチしたインデックスを返す
     *
     * - サロゲートペアを考慮する
     * - String.prototype.search とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param searcher パターン
     * @return インデックス
     */
    search(searcher: RegExp | string | Jaco): number;
    /**
     * 文字位置による抽出
     * (非破壊的メソッド)
     *
     * - サロゲートペアを考慮する
     * - String.prototype.slice とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param start 開始インデックス
     * @param end 終了インデックス 省略すると最後まで
     * @return 抽出した文字列からなるJacoインスタンス
     */
    slice(start: number, end?: number): Jaco;
    /**
     * 文字列の配列に分割する
     *
     * - String.prototype.split とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param separator 区切り文字
     * @param limit 配列の数を指定
     * @return 分割された配列
     */
    split(separator: string | RegExp | Jaco, limit?: number): string[];
    /**
     * 引数に指定された文字列が先頭と合致するか
     *
     * - サロゲートペアを考慮する
     * - String.prototype.startsWith とは非互換
     *
     * @version 2.0.0
     * @since 2.0.0
     * @param search 合致対象文字列
     * @param position 先頭の位置
     * @return 合致したかどうか
     */
    startsWith(search: Jaco | string, position?: number): boolean;
    /**
     * 指定した位置から指定した数だけ文字列を抽出
     * (非破壊的メソッド)
     *
     * - サロゲートペアを考慮する
     * - String.prototype.substr とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param start 開始インデックス
     * @param length 指定数
     * @return 抽出した文字列からなるJacoインスタンス
     */
    substr(start: number, length?: number): Jaco;
    /**
     * 指定した位置の間の文字列を抽出
     * (非破壊的メソッド)
     *
     * - サロゲートペアを考慮する
     * - String.prototype.substring とは非互換
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param indexA インデックス
     * @param indexB インデックス
     * @return 抽出した文字列からなるJacoインスタンス
     */
    substring(indexA: number, indexB: number): Jaco;
    /**
     * パターンとマッチするかどうか
     *
     * @version 2.0.0
     * @since 0.2.0
     * @param pattern パターン
     * @return 結果の真偽
     */
    test(pattern: string | RegExp | Jaco): boolean;
    /**
     * 小書き文字を基底文字に変換する
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return インスタンス自身
     */
    toBasicLetter(): Jaco;
    /**
     * ひらがなに変換する
     *
     * 第一引数に true を渡した場合、濁点・半濁点は基本的に結合される
     * ヷヸヹヺは文字が存在しないため ひらがな + 結合文字でない濁点・半濁点 となる
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param isCombinate 濁点・半濁点を結合文字にするかどうか
     * @return インスタンス自身
     */
    toHiragana(isCombinate?: boolean): Jaco;
    /**
     * カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     * @param toWide 半角カタカナを全角カタカナへ変換するかどうか
     * @return インスタンス自身
     */
    toKatakana(toWide?: boolean): Jaco;
    /**
     * 英字の大文字を小文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    toLowerCase(): Jaco;
    /**
     * 半角に変換
     *
     * 改行は変換しない
     *
     * @version 2.0.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toNarrow(convertJapaneseChars?: boolean): Jaco;
    /**
     * カタカナと日本語で使われる記号を半角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toNarrowJapnese(): Jaco;
    /**
     * 半角カタカナに変換する
     *
     * @version 0.6.0
     * @since 0.1.0
     * @param fromHiragana ひらがなも変換する
     * @return インスタンス自身
     */
    toNarrowKatakana(fromHiragana?: boolean): Jaco;
    /**
     * 日本語で使われる記号を半角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toNarrowSymbolForJapanese(): Jaco;
    /**
     * 数値に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return 数値
     */
    toNumber(): number;
    /**
     * 数字に変換する
     *
     * @version 0.5.0
     * @since 0.5.0
     * @param negative 負の値を許可してマイナスをつけるかどうか
     * @param floatingPoint 小数を許可してドットをつけるかどうか
     * @return インスタンス自身
     */
    toNumeric(negative?: boolean, floatingPoint?: boolean): Jaco;
    /**
     * よみの文字に変換する
     * JIS X 4061 [日本語文字列照合順番](http://goo.gl/Mw8ja) に準ずる
     *
     * TODO: test
     *
     * @version 1.1.0
     * @since 1.1.0
     * @return インスタンス自身
     */
    toPhoeticKana(): Jaco;
    /**
     * 明示もしくは暗黙の文字列変換メソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    toString(): string;
    /**
     * 英字の小文字を大文字に変換する
     *
     * @version 0.2.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    toUpperCase(): Jaco;
    /**
     * 全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toWide(): Jaco;
    /**
     * カタカナと日本語で使われる記号を全角に変換
     *
     * @version 0.4.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toWideJapnese(): Jaco;
    /**
     * 全角カタカナに変換する
     *
     * @version 0.2.0
     * @since 0.1.0
     * @return インスタンス自身
     */
    toWideKatakana(): Jaco;
    /**
     * 日本語で使われる記号を全角に変換
     *
     * @version 2.0.0
     * @since 0.4.0
     * @return インスタンス自身
     */
    toWideSymbolJapanese(): Jaco;
    /**
     * 先頭と末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 0.2.0
     * @return インスタンス自身
     */
    trim(): Jaco;
    /**
     * 先頭の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return インスタンス自身
     */
    trimLeft(): Jaco;
    /**
     * 末尾の空白を取り除く
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return インスタンス自身
     */
    trimRight(): Jaco;
    /**
     * 暗黙の値変換に呼び出されるメソッド
     *
     * @version 0.1.0
     * @since 0.1.0
     * @return インスタンス自身が保持する文字列
     */
    valueOf(): string;
    /**
     * イテレータ
     *
     * 要素の型は `string` ではなく `Jaco`
     *
     * @version 2.0.0
     * @since 2.0.0
     * @return イテレータブル `<Jaco>`
     */
    [Symbol.iterator](): Iterator<Jaco>;
}
