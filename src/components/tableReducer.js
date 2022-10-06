import { timeTable } from "../data/data";
import { newsArr } from "../routes/News";

export const initState = {
  tableData: timeTable,
  isDay: false,
  filter: "",
  isLogin: false,
  newsCount: newsArr.length,
  isShow: false,
};
export const tableReducer = (state, action) => {
  switch (action.type) {
    case "SAVE": {
      const newCard = [...state.tableData];
      const idx = state.tableData.findIndex(
        table => table.id === action.editId
      );
      newCard[idx] = action.data;
      return {
        ...state,
        tableData: newCard,
      };
    }

    case "DAY_CLICK": {
      return {
        ...state,
        isDay: action.isDay,
      };
    }

    case "SEARCH": {
      return {
        ...state,
        filter: action.param,
      };
    }
    case "SET_LOGIN": {
      return {
        ...state,
        isLogin: action.isLogin,
      };
    }
    case "NEWS_COUNT": {
      return {
        ...state,
        newsCount: state.newsCount === 0 ? 0 : state.newsCount - 1,
      };
    }
    case "SHOW_ALBUM": {
      return {
        ...state,
        isShow: action.show,
        newsCount: state.newsCount === 0 ? 0 : state.newsCount - 1,
      };
    }
    default:
      alert(`No case for type ${state.type} found in tableReducer!`);
  }
};
