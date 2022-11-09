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

export const getPizza = async () => {
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
