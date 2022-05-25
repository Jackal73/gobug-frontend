import axios from 'axios';

export const getAllTickets = async () => {
  return new Promise (async (resolve, reject) => {
    try {
      const result = await axios.get(
        'http://localhost:3001/v1/ticket',{
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbW15dEBrYmxkZXNpZ25lcnMuY29tIiwiaWF0IjoxNjUzNDg2MzA0LCJleHAiOjE2NTM1NzI3MDR9.FDTxDepo-xG0d0St30g7co5rxEQRqN_L4rl_pOJ2b44'
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};