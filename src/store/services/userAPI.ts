import { createAsyncThunk } from '@reduxjs/toolkit';
import { PropsEditProfileUser, PropsLogUser, PropsRegUser, responseUser } from '../../types/User';
import axios from 'axios';
import { IRejectValue } from '../../types/IRejectValue';

const apiUrl = 'https://api.realworld.io/api';

export const getUser = createAsyncThunk<responseUser, string, { rejectValue: IRejectValue }>(
  'user/getUser',
  async function (token: string, { rejectWithValue }) {
    try {
      const res = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 422) {
            const keys = Object.keys(error.response.data.errors).join(' and ');
            const obj = {
              message: `${keys} is already in use.`,
              fields: Object.keys(error.response.data.errors),
            };
            return rejectWithValue(obj);
          }
        }
        if (error.message) {
          const obj = {
            message: error.message,
          };
          return rejectWithValue(obj);
        }
      }
    }
  }
);

export const logUser = createAsyncThunk<responseUser, PropsLogUser, { rejectValue: IRejectValue }>(
  'user/logUser',
  async function (user: PropsLogUser, { rejectWithValue }) {
    try {
      const { email, password } = user;
      const res = await axios.post(`${apiUrl}/users/login`, {
        user: {
          email,
          password,
        },
      });
      if (res.data) {
        localStorage.setItem('token', res.data.user.token);
        return res.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 403) {
            const keys = Object.keys(error.response.data.errors).join(' and ');
            const obj = {
              message: `${keys} is already in use.`,
              fields: Object.keys(error.response.data.errors),
            };
            return rejectWithValue(obj);
          }
        }
        if (error.message) {
          const obj = {
            message: error.message,
          };
          return rejectWithValue(obj);
        }
      }
    }
  }
);

export const regUser = createAsyncThunk<responseUser, PropsRegUser, { rejectValue: IRejectValue }>(
  'user/regUser',
  async function (user: PropsRegUser, { rejectWithValue }) {
    try {
      const { username, email, password } = user;
      const res = await axios.post(`${apiUrl}/users`, {
        user: {
          username,
          email,
          password,
        },
      });
      if (res.data) {
        return res.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 422) {
            const keys = Object.keys(error.response.data.errors).join(' and ');
            const obj = {
              message: `${keys} is already in use.`,
              fields: Object.keys(error.response.data.errors),
            };
            return rejectWithValue(obj);
          }
        }
        if (error.message) {
          const obj = {
            message: error.message,
          };
          return rejectWithValue(obj);
        }
      }
    }
  }
);

export const editProfileUser = createAsyncThunk<
  responseUser,
  PropsEditProfileUser,
  { rejectValue: IRejectValue }
>('user/editProfileUser', async function (user: PropsEditProfileUser, { rejectWithValue }) {
  try {
    const { token, username, email, password, image } = user;
    const res = await axios.put(
      `${apiUrl}/user`,
      {
        user: {
          username,
          email,
          password,
          image,
        },
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 422) {
          const keys = Object.keys(error.response.data.errors).join(' and ');
          const obj = {
            message: `${keys} is already in use.`,
            fields: Object.keys(error.response.data.errors),
          };
          return rejectWithValue(obj);
        }
      }
      if (error.message) {
        const obj = {
          message: error.message,
        };
        return rejectWithValue(obj);
      }
    }
  }
});
