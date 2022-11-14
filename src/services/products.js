import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://fubereats-backend-production.up.railway.app/products"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(
      `https://fubereats-backend-production.up.railway.app/products/${id}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBBQ = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/bbqs"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPizzas = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/pizzas"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSandwiches = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/sandwiches"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDrinks = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/drinks"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBurgers = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/burgers"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDesserts = async () => {
  try {
    const response = await axios.get(
      "https://ig-food-menus.herokuapp.com/desserts"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// export const getLimitedProducts = async () => {
//   try {
//     const response = await axios.get(
//       "https://fubereats-backend-production.up.railway.app/products"
//     );
//     // console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getLeague = async (id) => {
//   try {
//     const response = await axios.get(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createLeague = async (leagueData) => {
//   try {
//     const response = await axios.post(
//       "https://soccer-standings-api-production.up.railway.app/leagues",
//       leagueData
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateLeague = async (id, leagueData) => {
//   try {
//     const response = await axios.put(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`,
//       leagueData
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteLeague = async (id) => {
//   try {
//     const response = await axios.delete(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
