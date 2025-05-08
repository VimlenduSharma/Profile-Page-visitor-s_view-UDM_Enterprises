interface BrandCardProps {
    name: string;
    logo: string;        
  }
  
  export function BrandCard({ name, logo }: BrandCardProps) {
    return (
      <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-50 p-10 shadow-sm">
        {/* brand logo */}
        <img
          src={logo}
          alt={name}
          className="w-24 h-24 object-contain rounded-lg ring-1 ring-gray-200"
          onError={(e) => {
            // fallback if the image fails to load
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
  
        {/* brand name */}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    );
  }
  