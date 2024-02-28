import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useSentMail = () => {
    const currentUser = useSelector(state => state.user);
    const [sentMails, setSentMails] = useState([]);

    useEffect(() => {
        const fetchSentMails = async () => {
          try {
            const response = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/sentEmails.json');
            if (!response.ok) {
              throw new Error('Failed to fetch sent emails');
            }
            const data = await response.json();
            const sentMails = data ? Object.entries(data)
              .filter(([id, mail]) => mail.from === currentUser.email)
              .map(([id, mail]) => ({ id, ...mail})) : [];
      
            setSentMails(sentMails);
          } catch (error) {
            console.error('Error fetching sent emails:', error);
          }
        };
      
        fetchSentMails();
      }, [currentUser]);

      return { sentMails };
} 