import shortid from 'shortid';

import { ADD_USER, CHOOSE_USER } from '../actions/constants';

const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    name: action.data.username,
                    surname: action.data.usersurname,
                    description: action.data.description
                }
            ];
        case CHOOSE_USER:
            const index = state.findIndex(user => user.id === action.id);
            action.userData.name = state[index].name;
            action.userData.surname = state[index].surname;
            action.userData.description = state[index].description;
            action.userData.id = state[index].id;
            return state; 
        default:
            return state;   
    }
}

export default users;