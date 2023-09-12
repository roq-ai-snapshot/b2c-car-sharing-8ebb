import axios from 'axios';
import queryString from 'query-string';
import { AdminInterface, AdminGetQueryInterface } from 'interfaces/admin';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdmins = async (query?: AdminGetQueryInterface): Promise<PaginatedInterface<AdminInterface>> => {
  const response = await axios.get('/api/admins', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdmin = async (admin: AdminInterface) => {
  const response = await axios.post('/api/admins', admin);
  return response.data;
};

export const updateAdminById = async (id: string, admin: AdminInterface) => {
  const response = await axios.put(`/api/admins/${id}`, admin);
  return response.data;
};

export const getAdminById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/admins/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdminById = async (id: string) => {
  const response = await axios.delete(`/api/admins/${id}`);
  return response.data;
};
