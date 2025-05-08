import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setIsError(true);
      return;
    }
    
    // Reset error state
    setIsError(false);
    
    // Here you would typically send the email to your backend
    // For now, we'll just simulate success
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Yeniliklerden Haberdar Olun</h2>
          <p className="text-lg mb-10 text-gray-300">
            Aylık bültenimize abone olun, ürün güncellemelerinden ve kampanyalardan ilk siz haberdar olun.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                className={`w-full px-6 py-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-turquoise ${
                  isError ? 'border-2 border-red-500' : 'border border-gray-700'
                }`}
              />
              {isError && (
                <p className="text-red-400 text-sm mt-2 text-left pl-2">
                  Lütfen geçerli bir e-posta adresi girin.
                </p>
              )}
            </div>
            
            <button
              type="submit"
              className="bg-turquoise hover:bg-turquoise-dark text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-md transform hover:translate-y-[-2px]"
            >
              Abone Ol
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-500 bg-opacity-20 rounded-lg border border-green-400 border-opacity-30">
              <p className="text-green-300">
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Teşekkürler! Bültenimize başarıyla abone oldunuz.
              </p>
            </div>
          )}
          
          <p className="text-sm text-gray-400 mt-8">
            Gizliliğinize önem veriyoruz. Bilgileriniz hiçbir şekilde 3. şahıslarla paylaşılmayacaktır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
