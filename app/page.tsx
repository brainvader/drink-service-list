'use client'

import styles from './page.module.css'

import { Button, FormElement, Modal, Text, Textarea } from "@nextui-org/react";

import { useState } from 'react';
import OrderTable from './components/OrderTable';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [csv, setCSV] = useState("名前, よみがな, コーヒー(Hミサ)")

  const handler = () => setVisible(true);
  const inputHandler = () => {
    setVisible(false);
    console.log(csv)
  };

  const inputDataHandler = (e: React.ChangeEvent<HTMLTextAreaElement | FormElement>) => {
    setCSV(e.target.value)
  }

  return (
    <main className={styles.main}>
      <div className={styles.inputCSV}>
        <Button auto bordered onPress={handler}>Input CSV</Button>
        <Modal
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
      <OrderTable></OrderTable>
    </main >
  )
}
