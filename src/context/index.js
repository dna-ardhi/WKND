import axios from 'axios';
import moment from 'moment';
import React, { createContext, useEffect, useState } from 'react';

const WeekendContext = createContext();

export const WeekendProvider = ({ children }) => {
  const [data, setData] = useState({ testimony: null, helpAndTips: null });
  const [loading, setLoading] = useState({
    testimony: false,
    helpAndTips: false,
  });
  const [error, setError] = useState({ status: false, message: null });
  const [greeting, setGreeting] = useState('Hello');

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

  const getTime = () => {
    setInterval(() => {
      const hours = moment().hours();

      if (hours >= 5 && hours <= 11) {
        setGreeting('Good Morning');
      } else if (hours >= 12 && hours <= 17) {
        setGreeting('Good Afternoon');
      } else if (hours >= 18 && hours <= 21) {
        setGreeting('Good Evening');
      } else if ((hours >= 22 && hours <= 23) || (hours >= 0 && hours <= 4)) {
        setGreeting('Good Night');
      } else {
        setGreeting('Hello');
      }
    }, 1000);
  };

  useEffect(() => {
    getTestimony();
    getHelpAndTips();
    getTime();
  }, []);

  useEffect(() => {});
  const contextValue = {
    closeNotify,
    greeting,
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
