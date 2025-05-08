import { useState } from 'react';
import type { FormEvent } from 'react';

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

interface ContactFormProps {
  title: string;
  description: string;
  fields: FormField[];
  submitButtonText: string;
  successMessage: string;
}

const ContactForm = ({ 
  title, 
  description, 
  fields, 
  submitButtonText, 
  successMessage 
}: ContactFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear the error for this field when user types
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      if (field.required && (!formData[field.id] || formData[field.id].trim() === '')) {
        newErrors[field.id] = 'Bu alan zorunludur.';
      }
      
      if (field.type === 'email' && formData[field.id] && !formData[field.id].includes('@')) {
        newErrors[field.id] = 'Geçerli bir e-posta adresi giriniz.';
      }
      
      if (field.type === 'tel' && formData[field.id] && !/^\+?[0-9\s-()]+$/.test(formData[field.id])) {
        newErrors[field.id] = 'Geçerli bir telefon numarası giriniz.';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({});
    
    // Reset the form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-navy mb-2">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {isSubmitted ? (
        <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg mb-6">
          <p className="font-medium">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {fields.map(field => (
              <div key={field.id}>
                <label 
                  htmlFor={field.id}
                  className="block text-gray-700 font-medium mb-1"
                >
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows={4}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring focus:ring-turquoise-100 focus:border-turquoise transition ${
                      errors[field.id] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                  />
                ) : field.type === 'select' ? (
                  <select
                    id={field.id}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring focus:ring-turquoise-100 focus:border-turquoise transition ${
                      errors[field.id] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                  >
                    <option value="">Lütfen seçin</option>
                    {field.options?.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring focus:ring-turquoise-100 focus:border-turquoise transition ${
                      errors[field.id] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                  />
                )}
                
                {errors[field.id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-turquoise hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Gönderiliyor...' : submitButtonText}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
