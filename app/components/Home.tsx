import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import hexToAscii from "../helpers/hexToAscii"
import styles from './Home.css';
import ThreadList from "./ThreadList"
import {fetchThreads} from "../helpers/zcash-helpers";



export default function Home() {

  const [threads, setThreads] = useState([])
  const [sum, setSum] = useState(0)

  useEffect(() => {
    fetchThreads().then(r => setThreads(r))
  }, [])

  useEffect(() =>   console.log(threads), [threads])

  return (
    
    <div className={styles.container} data-tid="container">
      <h1>zuh</h1>
      {threads.length ? 
      <ThreadList threads={threads} />
      : null}
    </div>
  );
}
