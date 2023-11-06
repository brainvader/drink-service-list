import styles from './OrderTable.module.css'
import { KanaType, UserData } from 'types/users';
import { MAX_COLUMNS, MAX_ROWS, initialCharacters } from '../lib/constants';

type UserRow = {
    id: number,
    kana: KanaType,
    name: string,
    order: string
}

const createTbody = (kanaRows: UserRow[], rowSpan: number, columnNum: number) => {
    return (<tbody className={styles.kana_rows}>
        {kanaRows.map((kanaRow, index) => {
            const id = kanaRow.id;
            return (
                <tr key={kanaRow.id.toString()} className={styles.user_row}>
                    {(index === 0) ? <td className={styles.kana_cell} rowSpan={rowSpan}>{kanaRow.kana}</td> : <></>}
                    <td className={styles.name_cell}>{kanaRow.name}</td>
                    <td className={styles.order_cell}>{kanaRow.order}</td>
                </tr>);
        })}
    </tbody>)
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
    const emptyRows: UserRow[] = []

    let rowCount = 0;
    initialCharacters.map((kana) => {
        const users = kanaUserMap.get(kana);
        if (users === undefined) return;
        (users).map(user => {
            const { id, kana, name, order } = user;
            const userRow: UserRow = { id: rowCount, kana: kana, name: name, order: order };
            fullRows.push(userRow);
            rowCount++;
        });

        for (let i = 0; i < spaceSize; i++) {

            // there're no elements in corresponding kana
            if (users.length === 0) {
                emptyRows.push({ id: rowCount, kana: " ", name: "　　　　　　", order: "　　　　　" });
                rowCount++;
                continue;
            }

            // Add empty rows to make space after kana rows
            fullRows.push({ id: rowCount, kana: kana, name: "　　　　　　", order: "　　　　　" });
            rowCount++;
        }
    })

    // Add empty rows
    for (let i = 0; i < remainder; i++) {
        fullRows.push({ id: rowCount, kana: " ", name: "　　　　　　", order: "　　　　　" });
        rowCount++;
    }
    fullRows.push(...emptyRows);

    const tables: JSX.Element[] = [];
    let currentKana: KanaType = "あ";
    for (let i = 0; i < MAX_COLUMNS; i++) {
        const rows: JSX.Element[] = [];
        const kanaRows: UserRow[] = [];
        const subRows = fullRows.slice(i * MAX_ROWS, (i + 1) * MAX_ROWS);

        for (let j = 0; j < MAX_ROWS; j++) {
            const row = subRows[j];

            // next column
            if (j === MAX_ROWS - 1) {
                const rowSpan = kanaRows.length;
                rows.push(createTbody(kanaRows, rowSpan, i));
                break;
            }

            // next kana
            if (row.kana !== currentKana) {
                const rowSpan = kanaRows.length;
                rows.push(createTbody(kanaRows, rowSpan, i));
                const newKana: KanaType = row.kana;
                currentKana = newKana;
                kanaRows.length = 0
                kanaRows.push(...[])
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
            </div>
        </>
    )
}