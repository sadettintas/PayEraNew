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
    <div className="hover-card relative group overflow-hidden h-full flex flex-col">
      {isNew && (
        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold py-1 px-3 rounded-full z-10">
          YENİ
        </div>
      )}
      
      <div className="bg-bg-alt rounded-lg p-6 mb-6 flex items-center justify-center h-56 overflow-hidden group-hover:bg-primary/5 transition-colors duration-300">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="max-h-48 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110 shadow-md rounded-md" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x300/0097A7/FFFFFF?text=${encodeURIComponent(title)}`;
            }}
          />
        ) : (
          <div className="text-primary text-center p-10">
            <div className="text-2xl font-bold">{title}</div>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-text-heading mb-3">{title}</h3>
      
      <p className="text-text-body mb-5 line-clamp-2">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text-body">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-auto">
        <Link 
          to={linkTo} 
          className="btn btn-primary inline-block w-full text-center"
        >
          İncele
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
