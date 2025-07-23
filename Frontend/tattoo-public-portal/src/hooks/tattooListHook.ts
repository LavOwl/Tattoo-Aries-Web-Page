import { useQuery } from '@tanstack/react-query';
import { type ITattoo } from '../types/ITattoo';
import axios from 'axios';

const fetchTattoos = async (type: string | undefined, page = 0): Promise<ITattoo[]> => {
  const { data } = await axios.get('http://localhost:8080/api/images', {
    params: { type, page },
  });
  return data;
};


export const useTattoos = (type: string | undefined) => {
  return useQuery<ITattoo[]>({
    queryKey: ['tattoos', type],
    queryFn: () => fetchTattoos(type),
    staleTime: 10000,
  });
};