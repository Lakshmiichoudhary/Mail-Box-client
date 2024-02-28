export const useDeleteMail = (mail) => {
    const deleteMail = async (handleClose) => {
      try {
        // Delete from the "sentEmails" endpoint first
        const sentResponse = await fetch(`https://mailbox-a2e2c-default-rtdb.firebaseio.com/sentEmails/${mail.id}.json`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!sentResponse.ok) {
          throw new Error('Failed to delete mail from sentEmails');
        }
  
        // delete from the main "emails" endpoint
        const response = await fetch(`https://mailbox-a2e2c-default-rtdb.firebaseio.com/emails/${mail.id}.json`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete mail');
        }
        //console.log("email deleted")
        handleClose(); 
      } catch (error) {
        console.error('Error deleting mail:', error);
      }
    };
  
    return deleteMail;
  };
  