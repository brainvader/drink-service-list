'use client'

import styles from './page.module.css'
import { dummyCSV, initialCharacters } from './lib/constants'
import { findKanaInitialChar } from './lib/utils'

import { Button, FormElement, Modal, NextUIProvider, Text, Textarea } from "@nextui-org/react";

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

    const newMap: Map<string, Set<string>> = new Map();
    initialCharacters.map((kana) => newMap.set(kana, new Set()));

    // parse csv
    csv.split("\n")
      .map((row) => row.split(",").map(v => v.trim()))
      .map((row, index) => {
        const [name, yomi, order] = row;
        const initialCharacter = findKanaInitialChar(yomi);
        const userSet = newMap.get(initialCharacter);
        if (userSet) {
          const user: UserData = { id: index, name: name, order: order };
          // To avoid duplication, stringify UserData objects
          userSet.add(JSON.stringify(user));
        }
      });

    const newValues: UserMap = {};
    initialCharacters.map(keyCharacter => {
      const userSet = newMap.get(keyCharacter);
      const users: UserData[] = Array.from(userSet!).map(userStr => JSON.parse(userStr));
      users.sort((a, b) => a.id - b.id);
      newValues[keyCharacter] = users;
    })
    setUserMap(newValues);
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
      <OrderTable />
    </main >
  )
}
