import { KanaType } from "types/users";

const findKanaInitialChar = (yomi: String): KanaType => {
    const yomiCode = yomi.charCodeAt(0);
    if ("あ".charCodeAt(0) <= yomiCode && yomiCode < "か".charCodeAt(0)) {
        return "あ";
    } else if ("か".charCodeAt(0) <= yomiCode && yomiCode < "さ".charCodeAt(0)) {
        return "か";
    } else if ("さ".charCodeAt(0) <= yomiCode && yomiCode < "た".charCodeAt(0)) {
        return "さ";
    } else if ("た".charCodeAt(0) <= yomiCode && yomiCode < "な".charCodeAt(0)) {
        return "た";
    } else if ("な".charCodeAt(0) <= yomiCode && yomiCode < "は".charCodeAt(0)) {
        return "な";
    } else if ("は".charCodeAt(0) <= yomiCode && yomiCode < "ま".charCodeAt(0)) {
        return "は";
    } else if ("ま".charCodeAt(0) <= yomiCode && yomiCode < "や".charCodeAt(0)) {
        return "ま";
    } else if ("や".charCodeAt(0) <= yomiCode && yomiCode < "ら".charCodeAt(0)) {
        return "や";
    } else if ("ら".charCodeAt(0) <= yomiCode && yomiCode < "わ".charCodeAt(0)) {
        return "ら";
    } else if ("わ".charCodeAt(0) === yomiCode) {
        return "わ";
    } else {
        return "ん";
    }
};

export { findKanaInitialChar };