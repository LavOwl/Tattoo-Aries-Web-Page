import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { IProfile } from '../types/IProfile';

const fetchProfile = async (): Promise<IProfile> => {
  const { data } = await axios.get(`http://localhost:8080/api/images/profile`);
  return data;
};

export const useProfile = () => {
  return useQuery<IProfile>({
    queryKey: ['profile'],
    queryFn: () => fetchProfile(),
    staleTime: 10000,
  });
};