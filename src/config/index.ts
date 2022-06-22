export default function config() {
    const timeout = 30000;
    let platform = "";
    let baseURL = "";
    let host = "";
  
    /* #ifdef H5 */
    platform = "h5";
    baseURL = import.meta.env.VITE_BASE_URL
    host = import.meta.env.VITE_HOST
    /* #endif */
  
    return {
       
    };
  }
  export const baseURL = 'http://192.168.2.102:3006/'
  export const TIME_OUT = 10000