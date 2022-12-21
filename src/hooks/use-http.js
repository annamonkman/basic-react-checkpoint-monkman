// import { useState, useEffect } from "react";

const useHttp = (url) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // // ! --------  GET DATA

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(url);
  //       setData(response.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [url]);

  // const useFetch = (url) => {
  // 	const [isLoading, setIsLoading] = useState(false);
  // 	const [apiData, setApiData] = useState(null);
  // 	const [serverError, setServerError] = useState(null);

  // 	useEffect(() => {
  // 		setIsLoading(true);
  // 		const fetchData = async () => {
  // 			try {
  // 				const resp = await axios.get(url);
  // 				const data = await resp?.data;

  // 				setApiData(data);
  // 				setIsLoading(false);
  // 			} catch (error) {
  // 				setServerError(error);
  // 				setIsLoading(false);
  // 			}
  // 		};

  // 		fetchData();
  // 	}, [url]);

  // 	return { isLoading, apiData, serverError };
  // };

  // 	export default function useFetch(url){

  //     const [data,setData] = useState(null)
  //     const [error,setError] = useState(null)
  //     const [loading,setLoading] = useState(false)

  //     useEffect(() => {
  //         (
  //             async function(){
  //                 try{
  //                     setLoading(true)
  //                     const response = await axios.get(url)
  //                     setData(response.data)
  //                 }catch(err){
  //                     setError(err)
  //                 }finally{
  //                     setLoading(false)
  //                 }
  //             }
  //         )()
  //     }, [url])

  //     return { data, error, loading }

  // }

  // ! --------  MODALS STATE

  return {};
};

export default useHttp;
