import { FETCH_TODOS } from '../ActionConstants';

export const fetchToDos = (payload: any) => {
    return {
        type: FETCH_TODOS,
        payload: payload
    }
}