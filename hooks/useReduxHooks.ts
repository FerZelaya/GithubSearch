import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../redux/store';

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, {}, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
