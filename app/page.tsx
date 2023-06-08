'use client'

import styles from './page.module.css'

import { Button } from "@nextui-org/react";
import React from 'react';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inputCSV}>
        <Button>Input CSV</Button>
      </div>
      <h1 className={styles.title}>飲み物提供表</h1>
      <div className={styles.container}>
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

        </table>


      </div>
    </main >
  )
}
