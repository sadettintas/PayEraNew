import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string;
  features?: string[];
  imageSrc?: string;
  linkTo: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  features = [],
  imageSrc,
  linkTo,
  isNew = false
}) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 relative group overflow-hidden h-full flex flex-col">
      {isNew && (
        <div className="absolute top-4 right-4 bg-turquoise text-white text-xs font-bold py-1 px-3 rounded-full z-10">
          YENİ
        </div>
      )}
      
      <div className="bg-light-gray rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 flex items-center justify-center h-48 sm:h-56 overflow-hidden group-hover:bg-navy group-hover:bg-opacity-5 transition-colors duration-300">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-h-40 sm:max-h-48 w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 shadow-md rounded-md" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/001F3F/FFFFFF?text=${encodeURIComponent(title)}`;
            }}
          />
        ) : (
          <div className="text-navy text-center p-6 sm:p-10">
            <div className="text-xl sm:text-2xl font-bold">{title}</div>
          </div>
        )}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-2 sm:mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-4 sm:mb-5 line-clamp-2 text-sm sm:text-base">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-turquoise mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto">
        <Link 
          to={linkTo} 
          className="inline-block bg-navy hover:bg-opacity-90 text-white font-medium py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-colors duration-300 hover:bg-turquoise text-sm sm:text-base w-full sm:w-auto text-center"
        >
          İncele
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
