import { useQuery } from '@tanstack/react-query';
import { type ITattoo } from '../types/ITattoo';
import axios from 'axios';

const fetchTattoo = async (id: string | undefined): Promise<ITattoo> => {
  const { data } = await axios.get(`http://localhost:8080/api/images/tattoo/data/${id}`);
  return data;
};


export const useTattoo = (id: string | undefined) => {
  return useQuery<ITattoo>({
    queryKey: ['tattoo', id],
    queryFn: () => fetchTattoo(id),
    staleTime: 10000,
  });
};