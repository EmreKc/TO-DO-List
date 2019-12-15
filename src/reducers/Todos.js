import uuid from 'uuid/v1';

import { ADD_ITEM, FILTER_ITEM } from '../actions/AddItem';
import { DELETE_ITEM } from '../actions/DeleteItem';
import { ITEM_COMPLETION } from '../actions/ItemCompletion';
import { REORDER_ITEM } from '../actions/ReorderItem';

const TodosReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const id = uuid();
      const todoItem = {
        value: action.payload.value,
        id,
        completed: false,
      };

      return { ...state, items: [...state.items, todoItem] };
    }

    case FILTER_ITEM: {
      window.console.log(action.payload , "   asdasdasdasd")
      const filter = action.payload.valueFilter
      return {...state,filter}
    }

    case DELETE_ITEM: {
      const items = state.items.filter(({ id }) => id !== action.payload.id);
      return { ...state, items };
    }

    case ITEM_COMPLETION: {
      const items = state.items.map(item => {
        if (item.id === action.payload.modifiedItem.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }

        return item;
      });

      return { ...state, items };
    }

    case REORDER_ITEM: {
      const clone = [...state.items];
      const [removed] = clone.splice(action.payload.initialPosition, 1);
      clone.splice(action.payload.newPosition, 0, removed);

      return { ...state, items: clone };
    }
    default: {
      return state;
    }
  }
};

export default TodosReducer;
