import { AxiosResponse } from 'axios';
import api from '../../../libs/auth/api';

interface AppLoginProps {
  email: string;
  password: string;
}

interface ShipmentFilterProps {
  search?: string;
}

class AppService {
  // LOGIN
  async loginRequest({
    email,
    password,
  }: AppLoginProps): Promise<AxiosResponse> {
    const formData = new FormData();
    formData.append('usr', email);
    formData.append('pwd', password);

    try {
      const response = await api.post('/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error: any) {
      console.log('Login failed:', error.message);
      throw error;
    }
  }

  //  SHIPMENT STATUS LIST
  async getShipmentStatusList() {
    const response = await api.get('/frappe.client.get_list', {
      params: {
        doctype: 'AWB Status',
        fields: JSON.stringify(['*']),
      },
    });

    return response.data;
  }

  //  SHIPMENT LIST
  async getShipmentList({ search }: ShipmentFilterProps) {
    const response = await api.get('/frappe.client.get_list', {
      params: {
        doctype: 'AWB',
        fields: JSON.stringify(['*']),
        filters: JSON.stringify({
          name: ['like', `%${search || ''}%`],
        }),
      },
    });

    return response.data;
  }
}

export const appService = new AppService();
