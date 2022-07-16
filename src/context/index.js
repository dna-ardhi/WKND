import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const WeekendContext = createContext();

export const WeekendProvider = ({ children }) => {
  const [data, setData] = useState({ testimony: null, helpAndTips: null });
  const [loading, setLoading] = useState({
    testimony: false,
    helpAndTips: false,
  });
  const [error, setError] = useState({ status: false, message: null });

  const weekend = axios.create({
    baseURL: 'https://wknd-take-home-challenge-api.herokuapp.com',
  });

  const closeNotify = () => {
    setError({ status: false, message: null });
  };

  const getTestimony = async () => {
    setLoading((prev) => {
      return {
        ...prev,
        testimony: true,
      };
    });
    try {
      const response = await weekend.get('/testimonial');
      if (response.status >= 200 && response.status < 300) {
        setData((prev) => {
          return {
            ...prev,
            testimony: response.data,
          };
        });

        setLoading((prev) => {
          return {
            ...prev,
            testimony: false,
          };
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        setError({ status: true, message: error.response.data.message });
      } else {
        setError({ status: true, message: error.message });
      }

      setLoading((prev) => {
        return {
          ...prev,
          testimony: false,
        };
      });
    }
  };

  const getHelpAndTips = async () => {
    setLoading((prev) => {
      return {
        ...prev,
        helpAndTips: true,
      };
    });
    try {
      const response = await weekend.get('/help-tips');
      if (response.status >= 200 && response.status < 300) {
        setData((prev) => {
          return {
            ...prev,
            helpAndTips: response.data,
          };
        });

        setLoading((prev) => {
          return {
            ...prev,
            helpAndTips: false,
          };
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        setError({ status: true, message: error.response.data.message });
      } else {
        setError({ status: true, message: error.message });
      }

      setLoading((prev) => {
        return {
          ...prev,
          helpAndTips: false,
        };
      });
    }
  };

  useEffect(() => {
    getTestimony();
    getHelpAndTips();
  }, []);

  useEffect(() => {});
  const contextValue = {
    closeNotify,
    error,
    data,
    loading,
  };
  return (
    <WeekendContext.Provider value={contextValue}>
      {children}
    </WeekendContext.Provider>
  );
};

export default WeekendContext;
