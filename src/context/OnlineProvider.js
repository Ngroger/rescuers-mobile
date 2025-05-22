import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import UserStorage from "../store/UserStorage";

// Create Context
const OnlineContext = createContext();

// URL connection
const SOCKET_URL = 'https://spasateli.kz';

export const OnlineProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [socket, setSocket] = useState(null);
  const [userId, setIsUserId] = useState(null);

  useEffect(() => {
    fetchUserId();
  }, []);

  const fetchUserId = async () => {
    try {
      const userId = await UserStorage.getUserId();

      if (userId) {
        setIsUserId(userId);
      }
    } catch (error) {
      console.log('fetch user id: ', error);
    }
  }

  useEffect(() => {
    if (userId) {
      connection();
    }
  }, [userId]);

  const connection = () => {
    const socketConnection = io(SOCKET_URL, {
      query: { userId },
      transports: ['websocket'], // Просто WebSocket
      secure: true, // Если используется HTTPS
    });

    socketConnection.on('connect', () => {
      console.log('Connected to Socket.IO server');
      setIsOnline(true);
    });

    socketConnection.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
      setIsOnline(false);
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
      console.log('Socket disconnected');
    };
  };

  return (
    <OnlineContext.Provider value={{ isOnline, socket }}>
      {children}
    </OnlineContext.Provider>
  );
};
