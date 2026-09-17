'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ vehicle, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset modal state when opened/closed
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', phone: '', pickupDate: '', returnDate: '' });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Valid 10-digit phone number required';
    }
    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Pickup date is required';
    }
    if (!formData.returnDate) {
      newErrors.returnDate = 'Return date is required';
    } else if (formData.pickupDate && formData.returnDate < formData.pickupDate) {
      newErrors.returnDate = 'Return date must be after pickup date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        // Automatically close after success preview
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Book Your Ride
            </h3>
            <p className="text-xs text-gray-500 font-medium mt-0.5">
              Complete your details to confirm booking
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Vehicle Preview Banner */}
        {vehicle && (
          <div className="px-6 py-4 bg-red-50/60 border-b border-red-100/60 flex items-center gap-4">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-16 h-12 rounded-lg object-cover shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-bold text-[#FF1E36] uppercase tracking-wider">
                {vehicle.category}
              </span>
              <h4 className="text-sm font-bold text-gray-900 truncate">
                {vehicle.name}
              </h4>
              <span className="text-xs font-semibold text-gray-700">
                ₹ {vehicle.price.toLocaleString('en-IN')} / day
              </span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-900">
                Booking Submitted!
              </h4>
              <p className="text-sm text-gray-600 max-w-xs font-medium">
                Booking request submitted successfully! Our team will contact you shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#FF1E36] text-white font-semibold text-sm shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-[#FF1E36]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-gray-200 focus:border-[#FF1E36]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup Date */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.pickupDate 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#FF1E36]'
                      }`}
                    />
                  </div>
                  {errors.pickupDate && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.pickupDate}</p>
                  )}
                </div>

                {/* Return Date */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.returnDate 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-200 focus:border-[#FF1E36]'
                      }`}
                    />
                  </div>
                  {errors.returnDate && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.returnDate}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-full bg-[#FF1E36] hover:bg-[#E01B32] text-white font-bold text-sm shadow-md shadow-red-500/20 transition-all active:scale-[0.98]"
              >
                Confirm Booking
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
