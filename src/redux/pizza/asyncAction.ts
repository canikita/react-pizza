import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 202);
    const { data } = await axios.get<Pizza[]>(
      `https://64b9027979b7c9def6c06cda.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 4,
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );

    return data;
  }
);
