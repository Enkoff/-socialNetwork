
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Oleh" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Viktor" },
    { id: 4, name: "Sania" },
    { id: 5, name: "Loos" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hows is you it-kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Hows is you it-kamasutra" },
  ],
};

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 7,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogReducer;
