import { AdminInterface } from 'interfaces/admin';
import { CarInterface } from 'interfaces/car';
import { FleetManagerInterface } from 'interfaces/fleet-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin?: AdminInterface[];
  car?: CarInterface[];
  fleet_manager?: FleetManagerInterface[];
  user?: UserInterface;
  _count?: {
    admin?: number;
    car?: number;
    fleet_manager?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
