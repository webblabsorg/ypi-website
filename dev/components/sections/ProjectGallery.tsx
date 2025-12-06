import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
  title?: string;
}

export function ProjectGallery({ images, title = "Project Gallery" }: ProjectGalleryProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">{title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {images.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>Project images coming soon</p>
          </div>
        )}
      </div>
    </section>
  );
}
