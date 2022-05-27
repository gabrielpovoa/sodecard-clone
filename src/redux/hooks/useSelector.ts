import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";


export const useApp:TypedUseSelectorHook<RootState> = useSelector