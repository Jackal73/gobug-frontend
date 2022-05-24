import axios from 'axios';

export const getAllTickets = async () => {
  return new Promise (async (resolve, reject) => {
    try {
      const result = await axios.get(
        'http://localhost:3001/v1/ticket',{
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbW15dEBrYmxkZXNpZ25lcnMuY29tIiwiaWF0IjoxNjUzMzY2ODIyLCJleHAiOjE2NTMzNzA0MjJ9.fezyryZYAQifyyzWmR3l8-oIXKz8KgdlSei_cV0fNy4'
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};