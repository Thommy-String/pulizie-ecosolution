import React from 'react';

export default function TrustedBy() {
  const clients = [
    { name: 'Case Private', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=40&h=40&fit=crop' },
    { name: 'Uffici', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=40&h=40&fit=crop' },
    { name: 'Negozi', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=40&h=40&fit=crop' },
    { name: 'Ospedali', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=40&h=40&fit=crop' },
  ];

  return (
    <div className="flex flex-row items-center gap-3">
      {/* Cerchietti sovrapposti */}
      <div className="flex -space-x-2 flex-shrink-0">
        {clients.map((client, index) => (
          <img
            key={client.name}
            src={client.image}
            alt={client.name}
            className="w-7 h-7 rounded-full border-2 border-white shadow-md object-cover"
            title={client.name}
            style={{ zIndex: clients.length - index }}
          />
        ))}
      </div>

      {/* Stelle + testo sullo stesso rigo */}
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm leading-none">★</span>
          ))}
        </div>
        <p className="text-xs text-gray-300 leading-tight whitespace-nowrap">
          <span className="text-white font-semibold">826+</span> clienti soddisfatti
        </p>
      </div>
    </div>
  );
}
