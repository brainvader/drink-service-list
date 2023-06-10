declare module 'types/users' {
    export type UserData = {
        id: number,
        name: string;
        order: string;
    };

    export type UserMap = { [key: string]: UserData[] };
}

