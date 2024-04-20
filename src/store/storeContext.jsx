// import { createContext, useContext } from "react";

// export const StoreContext = createContext();

// export const ApiProvider = ({ children }) => {
//   const storeTokenInLS = (res_data) => {
//     return localStorage.setItem("user", JSON.stringify(res_data));
//   };

//   return (
//     <StoreContext.Provider value={{ storeTokenInLS }}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// const useAuth = () => {
//   return useContext(StoreContext);
// };
// export default useAuth;
