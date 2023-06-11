'use client'

import styles from './page.module.css'
import { dummyCSV, initialCharacters } from './lib/constants'
import { findKanaInitialChar } from './lib/utils'

import { Button, FormElement, Modal, Text, Textarea } from "@nextui-org/react";

import { useState } from 'react';
import OrderTable from './components/OrderTable';
import { UserData } from 'types/users';

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [csv, setCSV] = useState(dummyCSV);
  const [users, setUsers] = useState<UserData[]>([]);

  const handler = () => setVisible(true);
  const inputHandler = () => {
    setVisible(false);

    // parse csv
    const newData: UserData[] = csv.split("\n")
      .filter(row => row.includes(","))
      .map((row) => row.split(",").map(v => v.trim()))
      .map((row, index) => {
        const [name, yomi, order] = row;
        const kana = findKanaInitialChar(yomi);
        return {
          id: index,
          kana: kana,
          name: name,
          order: order
        }
      });

    setUsers(newData);
  };

  const inputDataHandler = (e: React.ChangeEvent<HTMLTextAreaElement | FormElement>) => {
    setCSV(e.target.value)
  }

  return (
    <main className={styles.main}>
      <div className={styles.inputCSV}>
        <Button auto bordered onPress={handler}>Input CSV</Button>
        <Modal
          blur
          closeButton
          aria-labelledby="csv input modal"
          open={visible}
          onClose={inputHandler}>
          <Modal.Header>
            <Text id="cvs-input" >
              CSVデータを入力してください
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Textarea
              onChange={inputDataHandler}
              initialValue={csv} />
          </Modal.Body>
          <Modal.Footer>
            <Button auto color='primary' onPress={inputHandler}>
              Input
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <OrderTable users={users} />
    </main >
  )
}
