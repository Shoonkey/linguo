import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import Looker from '../../orbs/Looker';
import NotificationCenter from '../../orbs/NotificationCenter';
import { Container } from './styles';

// const NOTIF_TIMEOUT = 6000;

function removeFromArrayAt(array, idx){
  const leftChunk = array.slice(0, idx);
  const rightChunk = array.slice(idx + 1);

  return leftChunk.concat(rightChunk);
}

function Home() {

  const [searching, setSearchingState] = useState(false);
  const [notifs, setNotifs] = useState([]);

  const notify = content => {
    const key = uuid();

    setNotifs([
      ...notifs, 
      { 
        id: key, 
        content, 
        // timeout: setTimeout(() => dismissNotif(key), NOTIF_TIMEOUT) 
      }
    ]);
  }

  const dismissNotif = id => {

    const notifIdx = notifs.findIndex(notif => notif.id === id);
    
    if (notifIdx === -1){
      console.warn(`Notification #${id} not found`);
      return;
    }
    
    // clearTimeout(notifs[notifIdx].timeout);
    const updatedList = removeFromArrayAt(notifs, notifIdx);
    setNotifs(updatedList);

  }

  return (
    <Container id="homepage">
      <motion.h1
        variants={{
          initial: { opacity: 1, height: "auto" },
          hidden: { opacity: 0, height: 0 }
        }} 
        transition={{ duration: .3, ease: "easeOut" }}
        animate={searching ? "hidden" : "initial"}
        className="title"
      >
        Linguo
      </motion.h1>
      <Looker 
        placeholder="So... what'r'ya' lookin for?"
        variants={{
          initial: { y: 0 },
          top: { y: "-40vh" }
        }}
        animate={searching ? "top" : "initial"}
        transition={{ duration: .5, ease: "easeOut" }}
        onFocus={() => setSearchingState(true)} 
        onBlur={str => str.length === 0 && setSearchingState(false)}
        onClear={() => { 
          setSearchingState(false); 
          notify("Cleared.");
        }}
      />
      <NotificationCenter 
        notifications={notifs}
        onDismiss={id => dismissNotif(id)}
      />
    </Container>
  );
}

export default Home;
