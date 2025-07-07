import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Sample project data - you would replace this with your actual projects
const projects = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    category: "Branding",
    client: "Local Coffee Shop",
    year: "2023",
    tools: "Adobe Illustrator, Adobe Photoshop, Adobe InDesign",
    thumbnail: "/branding/cover.png?height=600&width=800",
    images: [
      "/branding/cover.png?height=800&width=1200",
      "/branding/mojo.jpeg?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
    ],
    // Define how many columns each image should span in the gallery
    imageSpans: [2, 4, 6, 6, 4, 2],
    description:
      "Katya comprehensive brand identity design for a local coffee shop, including logo, color palette, and brand guidelines.",
    header: "Coping with the pandemic",
    subheader: "A brand identity design for a local coffee shop",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
    ]
  },
  {
    id: "packaging-design",
    title: "Product Packaging",
    category: "Packaging",
    client: "Eco Beauty",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    imageSpans: [2, 3, 1],
    description:
      "Innovative packaging design for an eco-friendly cosmetics line, focusing on sustainability and visual appeal.",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
    ]
  },
  {
    id: "editorial-design",
    title: "Magazine Layout",
    category: "Editorial",
    client: "Fashion Forward Magazine",
    year: "2022",
    thumbnail: "/branding/cover.png?height=600&width=800",
    images: [
      "/branding/cover.png?height=800&width=1200",
      "/branding/mojo.jpeg?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
      "/branding/cover.png?height=800&width=1200",
    ],
    imageSpans: [3, 2, 1],
    description: "Editorial design for a fashion magazine, featuring custom typography and dynamic layouts.",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
    ]
  },
  {
    id: "web-design",
    title: "E-commerce Website",
    category: "UI/UX",
    client: "Modern Apparel",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    imageSpans: [4, 1, 1],
    description:
      "User interface and experience design for an online clothing store, optimized for conversion and usability.",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
        "Paragraph Three",
    ]
  },
  {
    id: "poster-series",
    title: "Event Poster Series",
    category: "Print",
    client: "Summer Music Festival",
    year: "2022",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    imageSpans: [2, 1, 3],
    description:
      "A series of posters designed for a music festival, featuring vibrant colors and experimental typography.",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
        "Paragraph Three",
    ]
  },
  {
    id: "mobile-app",
    title: "Fitness App Design",
    category: "UI/UX",
    client: "FitTrack",
    year: "2023",
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    imageSpans: [3, 2, 1],
    description:
      "Mobile application design for a fitness tracking app, focusing on clean interfaces and intuitive navigation.",
    paragraphs: [
        "Paragraph One",
        "Paragraph Two",
        "Paragraph Three, here's fitness!",
    ]
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="inline-flex items-center mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-600 dark:text-gray-300">
          <div>
            <span className="font-medium">Category:</span> {project.category}
          </div>
          <div>
            <span className="font-medium">Client:</span> {project.client}
          </div>
          <div>
            <span className="font-medium">Year:</span> {project.year}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 px-6 md:px-[46px]">
            <h1 className="text-xl font-semibold mt-6">DATE</h1>
            <p className="text-gray-600 dark:text-gray-300">{project.year}</p>
            
            <h1 className="text-xl font-semibold mt-6">TOOLS</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {project.tools}
            </p>

            <h1 className="text-xl font-semibold mt-6">DESCRIPTION</h1>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-xl font-semibold mb-3">{project.header}</h1>
            
            <p className="mb-3 italic">{project.subheader}</p>
            
            {project.paragraphs.map((challengeText, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 mt-8">
                {challengeText}
              </p>
            ))}

          </div>
        </div>
{/* 
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Solution</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{project.solution}</p>

          <h2 className="text-xl font-semibold mb-3">Process</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.process}</p>
        </div> */}

        <div>
          {/* <h2 className="text-xl font-semibold mb-6">Project Gallery</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {project.images.map((image, index) => {
              // Get the column span for this image (default to 2 if not specified)
              const colSpan = project.imageSpans?.[index] || 2;

              return (
                <div 
                  key={index} 
                  className={`col-span-1 md:col-span-${colSpan} aspect-[4/3] relative overflow-hidden rounded-lg`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 768px) 100vw, (max-width: 1200px) ${colSpan * 16.67}vw, ${colSpan * 16.67}vw`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
