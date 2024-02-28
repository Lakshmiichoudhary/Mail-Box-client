import { useSelector } from "react-redux";

export const usePost = () => {
    const currentUserEmail = useSelector(state => state.user.email);
  
    const sendEmail = async (to, subject, value) => {
      const currentTime = new Date();
      const mailData = {
        from: currentUserEmail, 
        to: to,
        subject: subject,
        value: value,
        time: currentTime.getTime(),
      };
      //console.log(mailData)
  
      try {
        const response = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/emails.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mailData),
        });
  
        const sentResponse = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/sentEmails.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mailData),
        });
  
        if (!response.ok || !sentResponse.ok) {
          throw new Error('Failed to send email');
        }
  
        return true; 
      } catch (error) {
        console.error('Error sending email:', error);
        return false; 
      }
    };
  
    return sendEmail;
  };
  