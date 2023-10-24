import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/1app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
