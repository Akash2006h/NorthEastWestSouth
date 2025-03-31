/*
import {useSelector} from "react-redux";
import NewsList from "./NewsList.jsx";

import useApiKeys from "../Hooks/useApiKeys.jsx"
const Body = () =>{
  useApiKeys()
  const frame = useSelector(store => store.news.setNewsOne)
  console.log("frame",frame)

  return(
  <div>
      <NewsList title = {"newsToday"} news = {frame} />
      
  </div>
  )

}
export default Body;
*/
import { useSelector } from "react-redux";
import NewsList from "./NewsList.jsx";
import useApiKeys from "../Hooks/useApiKeys.jsx";

const Body = () => {
  useApiKeys();
  
  // Get news data from Redux store
  const newsData = useSelector(store => store.news.setNewsOne);
  console.log("News data:", newsData);

  return (
    <div className="bg-gray-50 min-h-screen">
      <NewsList 
        title={"Today's News"} 
        news={newsData || []}  // Fallback to empty array if null
      />
    </div>
  );
};

export default Body;
