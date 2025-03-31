/*
import NewsCard from "./NewsCard.jsx"
const NewsList = (title, news) =>{
  if(!news || news.length === 0){
    return<div> no news are loading</div>
  }
  return(
  <div className = "px-6">
      <h1 className = "text-3xl py-4">{title}</h1>
      
    </div>
  )
}
export default NewsList;
*/
import NewsCard from "./NewsCard.jsx";

const NewsList = ({ title, news }) => {
  if (!news || news.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No news available at the moment</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 py-6">
      <h1 className="text-2xl md:text-3xl font-bold pb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {news.map((newsItem, index) => (
          <NewsCard 
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            imageUrl={newsItem.urlToImage}
            publishedAt={newsItem.publishedAt}
            source={newsItem.source?.name}
            url={newsItem.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
