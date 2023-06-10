'use client'

import styles from './page.module.css'
import { dummyCSV } from './lib/constants'
import { findKanaInitialChar } from './lib/utils'

import { Button, FormElement, Modal, Text, Textarea } from "@nextui-org/react";

import { useState } from 'react';
import OrderTable from './components/OrderTable';
import { UserData, UserMap } from 'types/users';

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [csv, setCSV] = useState(dummyCSV);
  const handler = () => setVisible(true);
  const inputHandler = () => {
    setVisible(false);
    const csvValues = csv.split("\n")
      .map((row) => {
        const values = row.split(",");
        return values.map(v => v.trim())
      })
      .map((row) => {
        const yomi = row[1];
        const initialCharacter = findKanaInitialChar(yomi);
        return [initialCharacter, ...row]
      });

    console.log(csvValues);
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
