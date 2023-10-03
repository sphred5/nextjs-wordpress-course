import Link from "next/link"
import Image from "next/image"
export const PropertyCard = ({
    title,
    destination,
    image,
    alt,
    bedrooms,
    bathrooms,
    price,
    hasParking,
    petFriendly,
}) => {
    return (
        <Link href={destination} className="border-2 border-slate-300 p-5 block bg-slate-100 hover:bg-slate-200">
            <div className="flex w-full">
                <Image 
                    src={image} 
                    height={200}
                    width={300} 
                    alt={alt}
                    style={{objectFit: "cover", height: "200px", width: "300px"}}
                />
            </div>
        </Link>
    )
}
