import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useFetchEmails = () => {
  const currentUser = useSelector(state => state.user);
  const [mails, setMails] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const inboxResponse = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/emails.json');
        if (!inboxResponse.ok) {
          throw new Error('Failed to fetch emails');
        }
        const inboxData = await inboxResponse.json();
        const inboxMails = inboxData ? Object.entries(inboxData)
          .filter(([id, mail]) => mail.to === currentUser.email)
          .map(([id, mail]) => ({ id, ...mail, isRead: mail.isRead || false })) : [];

        setMails(inboxMails);

        const unread = inboxMails.filter(mail => !mail.isRead);
        setUnreadCount(unread.length);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    const intervalId = setInterval(fetchMails, 1000);

    return () => clearInterval(intervalId);
  }, [currentUser]);

  return { mails, unreadCount };
};


