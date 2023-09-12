import axios from 'axios';
import queryString from 'query-string';
import { FleetManagerInterface, FleetManagerGetQueryInterface } from 'interfaces/fleet-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFleetManagers = async (
  query?: FleetManagerGetQueryInterface,
): Promise<PaginatedInterface<FleetManagerInterface>> => {
  const response = await axios.get('/api/fleet-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFleetManager = async (fleetManager: FleetManagerInterface) => {
  const response = await axios.post('/api/fleet-managers', fleetManager);
  return response.data;
};

export const updateFleetManagerById = async (id: string, fleetManager: FleetManagerInterface) => {
  const response = await axios.put(`/api/fleet-managers/${id}`, fleetManager);
  return response.data;
};

export const getFleetManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fleet-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFleetManagerById = async (id: string) => {
  const response = await axios.delete(`/api/fleet-managers/${id}`);
  return response.data;
};
