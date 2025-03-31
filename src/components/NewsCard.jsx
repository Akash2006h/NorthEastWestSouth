/*
const NewsCard = () =>{
  return(
  <div className = "w-36 md:w-48 pr-4">
      <img alt = "news card" src = "" />
    </div>
  )

}
export default NewsCard;
*/
const NewsCard = ({ 
  title, 
  description, 
  imageUrl, 
  publishedAt, 
  source, 
  url 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {imageUrl && (
        <img 
          alt={title || "News image"} 
          src={imageUrl} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
      )}
      <div className="p-4 flex-grow">
        {source && (
          <span className="text-xs font-semibold text-blue-600 mb-1 block">
            {source}
          </span>
        )}
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{description}</p>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Read more →
        </a>
        {publishedAt && (
          <p className="text-gray-400 text-xs mt-2">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
