declare module 'types/users' {
    export type KanaType = "あ" | "か" | "さ" | "た" | "な" | "は" | "ま" | "や" | "ら" | "わ" | "ん";

    export type UserData = {
        id: number,
        kana: KanaType,
        name: string;
        order: string;
    };
}

