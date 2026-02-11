'use client'

import { MapPin, Heart, DollarSign, Users } from 'lucide-react'

const reasons = [
  {
    icon: DollarSign,
    title: 'Pilihan Paket Fleksibel',
    description: 'Mau jalan 1 hari atau liburan 4 hari? Semua ada. Tinggal pilih yang sesuai waktu dan gayamu.',
  },
  {
    icon: MapPin,
    title: 'Rute Seru, Tanpa Ribet',
    description: 'Dari savana sampai pantai, semua destinasi dirancang agar kamu tinggal nikmati tanpa pusing logistik.',
  },
  {
    icon: Users,
    title: 'Tim Lokal, Sentuhan Personal',
    description: 'Didampingi pemandu lokal yang ramah dan berpengalaman—karena yang paling tahu Banyuwangi ya orang sini.',
  },
  {
    icon: Heart,
    title: 'Trip Nyaman, Hati Tenang',
    description: 'Semua sudah disiapkan. Kamu tinggal datang, eksplor, dan pulang bawa cerita.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mengapa Memilih Kami sebagai Agen Perjalanan Anda?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Temukan apa yang membedakan kami dan mengapa ribuan wisatawan mempercayakan petualangan mereka kepada kami.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 md:p-8 text-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white bg-opacity-20 rounded-full">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
