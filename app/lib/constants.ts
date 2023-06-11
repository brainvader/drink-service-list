const dummyCSV = [
    "日本　太郎, にっぽん　たろう, 緑茶(H)",
    "英国　太郎, いぎりす　たろう, 紅茶(Hミ砂)",
    "似国　太郎, いすらえる　たろう, コーヒー(Cミ)",
    "芬国　太郎, ふぃんらんど　たろう, コーヒー(Hミ砂)",
    "大和 太郎, やまと　たろう, 緑茶(H)",
    "洋風　太郎, ようふう　たろう, コーヒー(Cミ)"
].join('\n');

const initialCharacters: KanaType[] = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];

export { dummyCSV, initialCharacters };