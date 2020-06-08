import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Icon from '../Icon';
import { Container } from './styles';

function NotificationCenter({ notifications, onDismiss }) {
  return (
    <Container>
      <AnimatePresence>
        {
          notifications.map((notif, idx) => (
            <motion.div 
              className="notification" 
              key={`notif-${notif.id}`}

              initial={{ opacity: 0, height: 0, padding: 0 }}
              animate={{ opacity: 1, height: "auto", padding: 16 }}
              exit={{ opacity: 0, height: 0, padding: 0 }}
            >
              <p className="content">{notif.content}</p>
              <button 
                type="button" 
                className="dismiss-btn" 
                title="Dismiss notification" 
                onClick={() => onDismiss(notif.id)}
              >
                <Icon name="close" aria-label="Close" />
              </button>
            </motion.div>   
          ))
        }
      </AnimatePresence>
    </Container>
  );
}

export default NotificationCenter;