import axios from 'axios';

const rootUrl = "http://localhost:3001/v1/"
const getSingleTicketUrl = rootUrl + "ticket/";

export const getAllTickets = async () => {
  return new Promise (async (resolve, reject) => {
    try {
      const result = await axios.get(
        'http://localhost:3001/v1/ticket',{
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
  return new Promise (async (resolve, reject) => {
    try {
      const result = await axios.get(getSingleTicketUrl + _id,{
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};