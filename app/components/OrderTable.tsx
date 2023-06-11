import styles from './OrderTable.module.css'
import { KanaType, UserData } from 'types/users';
import { MAX_COLUMNS, MAX_ROWS, initialCharacters } from '../lib/constants';

type UserRow = {
    kana: KanaType,
    name: string,
    order: string
}

export default function OrderTable({ users }: { users: UserData[] }) {
    const kanaUserMap: Map<KanaType, UserData[]> = new Map();
    initialCharacters.map(kana => kanaUserMap.set(kana, []));
    users.map((user) => {
        const kana = user.kana;
        const registeredUsers = kanaUserMap.get(kana);
        if (registeredUsers) {
            kanaUserMap.set(kana, [...registeredUsers, user])
            return;
        }
        kanaUserMap.set(kana, [user]);
    })

    const totalUser = users.length;
    const spaceSize = Math.floor((MAX_ROWS * MAX_COLUMNS - totalUser) / initialCharacters.length);
    const totalRow = totalUser + spaceSize * initialCharacters.length;
    const remainder = MAX_ROWS * MAX_COLUMNS - totalRow;

    const fullRows: UserRow[] = [];
    initialCharacters.map((kana) => {
        const users = kanaUserMap.get(kana);
        (users ? users : []).map(user => {
            const { id, kana, name, order } = user
            const userRow: UserRow = { kana: kana, name: name, order: order };
            fullRows.push(userRow);
        });
        const spaceRow: UserRow[] = (new Array(spaceSize)).fill({ kana: kana, name: "　　　　　　", order: "　　　　　" });
        fullRows.push(...spaceRow);
        if (kana === "わ") {
            const remainderRow: UserRow[] = (new Array(remainder)).fill({ kana: kana, name: "　　　　　", order: "　　　　　" });
            fullRows.push(...remainderRow);
        }
    })

    console.log(fullRows);

    const tables: JSX.Element[] = [];
    let currentKana: KanaType = "あ";
    for (let i = 0; i < MAX_COLUMNS; i++) {
        const rows: JSX.Element[] = [];
        const kanaRows: UserRow[] = [];
        const subRows = fullRows.slice(i * MAX_ROWS, (i + 1) * MAX_ROWS);
        console.log(subRows);


        for (let j = 0; j < MAX_ROWS; j++) {
            // rows.push(<tr>
            //     <td>{subRows[j].kana}</td>
            //     <td>{subRows[j].name}</td>
            //     <td>{subRows[j].order}</td>
            // </tr>);
            const row = subRows[j];

            if (j === MAX_ROWS - 1) {
                const rowSpan = kanaRows.length;
                rows.push(
                    <tbody>
                        {kanaRows.map((kanaRow, index) => {
                            return (
                                <tr>
                                    {(index === 0) ? <td rowSpan={rowSpan}>{kanaRow.kana}</td> : <></>}
                                    <td>{kanaRow.name}</td>
                                    <td>{kanaRow.order}</td>
                                </tr>);
                        })}
                    </tbody>);
                continue;
            }

            if (currentKana !== row.kana) {
                const rowSpan = kanaRows.length;
                rows.push(
                    <tbody>
                        {kanaRows.map((kanaRow, index) => {
                            return (
                                <tr>
                                    {(index === 0) ? <td rowSpan={rowSpan}>{kanaRow.kana}</td> : <></>}
                                    <td>{kanaRow.name}</td>
                                    <td>{kanaRow.order}</td>
                                </tr>);
                        })}
                    </tbody>);

                const newKana: KanaType = row.kana;
                currentKana = newKana;
                kanaRows.length = 0
                kanaRows.push(...[])
                // console.log("reset kanaRows", kanaRows);
                // kanaRows.push(row)
            }
            kanaRows.push(row);
        }

        tables.push(
            <table className={styles.column}>
                {rows}
            </table>);
    }

    return (
        < >
            <h1 className={styles.title}>飲み物提供表</h1>
            <div className={styles.container}>
                {tables.map(table => {
                    return table;
                })}

                {/* <table className={styles.column}>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>い</td>
                            <td>あしべ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>あべし</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>あべし</td>
                            <td>コーヒー</td>
                        </tr>
                    </tbody>


                    <tbody>
                        <tr>
                            <td rowSpan={3}>い</td>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td rowSpan={3}>い</td>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                    </tbody>

                </table>

                <table className={styles.column}>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>あ</td>
                            <td>あしべ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>あべし</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>あべし</td>
                            <td>コーヒー</td>
                        </tr>
                    </tbody>


                    <tbody>
                        <tr>
                            <td rowSpan={3}>い</td>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>コーヒー</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td rowSpan={3}>い</td>
                            <td>なまえ</td>
                            <td>紅茶</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>紅茶</td>
                        </tr>
                        <tr>
                            <td>なまえ</td>
                            <td>紅茶</td>
                        </tr>
                    </tbody>

                </table> */}
            </div>
        </>
    )
}