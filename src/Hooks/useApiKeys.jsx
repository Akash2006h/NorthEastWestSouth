import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import {addNewsOne} from "../utils/newsSlice.jsx";
const useNewsApi = () =>{
   const addTeslaNews = useSelector((store) => store.news)
   const dispatch = useDispatch();
   const getTeslaNews = async() =>{
    try{
      const data = await fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=7b830d2ee2334a11bc761a78b91876c5")
      const json = await data.json()
      console.log(json)
      dispatch(addNewsOne(json?.articles))

    }
    catch (error){
      console.error("something went wrong", error);
    }
  }
   
    
  useEffect(() => {
  getTeslaNews();
  },[])
}
export default useNewsApi;
