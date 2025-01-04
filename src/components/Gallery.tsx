import { Card } from "./ui/card";
import PartnershipImage from "../img/building-partnerships-for-education.jpeg"
import ConnectingImage from "../img/connecting-with-teachers.jpeg"
import FightingImage from "../img/fight-for-rights.jpeg"
import leadingImage from "../img/leading-with-vision.jpeg"

export const Gallery = () => {
  const images = [
    {
      src: PartnershipImage,
      alt: "Godwin Mshila speaking at a teachers' conference",
      caption: "Leading with Vision: Addressing Teachers' Concerns"
    },
    {
      src: ConnectingImage,
      alt: "Godwin Mshila with community leaders",
      caption: "Building Partnerships for Education"
    },
    {
      src: FightingImage,
      alt: "Godwin Mshila at a school visit",
      caption: "Connecting with Teachers on the Ground"
    },
    {
      src: leadingImage,
      alt: "Godwin Mshila at a KUPPET event",
      caption: "Fighting for Teachers' Rights"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 text-center">{image.caption}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
