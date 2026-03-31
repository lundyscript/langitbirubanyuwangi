'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  tooltipText?: string;
}

export function WhatsAppButton({
  phoneNumber = '6281321116569', // Ganti dengan nomor WhatsApp Anda
  message = 'Halo, saya ingin bertanya tentang paket wisata di Langit Biru Banyuwangi.',
  tooltipText = 'Chat dengan WhatsApp',
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
      {isHovered && (
        <div className="animate-in fade-in slide-in-from-left-4 duration-200 bg-gray-800 text-white px-3 py-2 mb-2 ml-16 rounded-lg whitespace-nowrap text-sm shadow-lg absolute">
          {tooltipText}
        </div>
      )}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Chat dengan WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={28}/>
      </Link>
    </div>
  );
}
