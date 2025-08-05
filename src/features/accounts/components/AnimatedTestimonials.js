"use client";

import { IMAGES } from "@/components/ui/Image/ImageData";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: "S4X57",
    name: "Sherrie Whitaker",
    avatar: IMAGES.comment_people_1,
    text: "I am always trying to find such a solution to making marketing videos more efficient. Creating consuming. We found some AI copywriting tools. This is the first time I see a product that can generate video content. Good job team!",
    rating: 5,
  },
  {
    id: "M8K23",
    name: "Marcus Johnson",
    avatar: IMAGES.comment_people_1,
    text: "Absolutely game-changing! The quality of content generated is beyond my expectations. Our marketing team has saved countless hours while improving our output quality significantly.",
    rating: 5,
  },
  {
    id: "L9P45",
    name: "Lisa Chen",
    avatar: IMAGES.comment_people_1,
    text: "The AI-powered video creation has revolutionized our content strategy. What used to take days now takes minutes. Highly recommend to any marketing professional.",
    rating: 5,
  },
  {
    id: "R7N89",
    name: "Robert Davis",
    avatar: IMAGES.comment_people_1,
    text: "Incredible tool for content creators. The automation features are intuitive and the results are consistently high-quality. This has become essential for our workflow.",
    rating: 5,
  },
  {
    id: "S2T67",
    name: "Sarah Wilson",
    avatar: IMAGES.comment_people_1,
    text: "Finally, a solution that understands what marketers need. The video generation capabilities are impressive and the user interface is clean and easy to navigate.",
    rating: 5,
  },
  {
    id: "J4H12",
    name: "James Miller",
    avatar: IMAGES.comment_people_1,
    text: "Outstanding performance and reliability. Our team productivity has increased dramatically since implementing this tool. The AI understands context remarkably well.",
    rating: 5,
  },
];
console.log(reviews);

function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6 mx-2">
      <p className="text-gray-600 leading-relaxed">{review.text}</p>
      <div className="flex items-center gap-3 mb-4 ">
        <div className="relative flex items-center gap-2 mt-3">
          <Image
            src={review.avatar || "/placeholder.svg"}
            alt={review.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          {/* <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs px-1.5 py-0.5 rounded-full font-mono">
            {review.id}
          </div> */}
        </div>
        {/* <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-lg">T</span>
        </div> */}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnimatedTestimonials() {
  // Duplicate reviews for seamless loop
  const leftColumnReviews = [...reviews, ...reviews];
  const rightColumnReviews = [
    ...reviews.slice().reverse(),
    ...reviews.slice().reverse(),
  ];

  return (
    <div className="" style={{ height: "100vh" }}>
      <div className="absolute -bottom-40 -left-20 size-[550px] rounded-full bg-eb100/20 max-lg:hidden"></div>

      <div className="absolute -top-60 left-62 h-[600px] w-[550px] rounded-full bg-r50/30 max-lg:hidden"></div>

      <div className="absolute -bottom-60 -right-100 -z-10 size-[500px] rounded-full bg-eb50/20 max-lg:hidden"></div>
      <div className="max-w-6xl px-4" style={{ height: "100vh" }}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 overflow-hidden">
          <div className="relative overflow-hidden animated-test-column-1">
            <div className="animate-scroll-down">
              {leftColumnReviews.map((review, index) => (
                <ReviewCard
                  key={`left-${review.id}-${index}`}
                  review={review}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden hidden xl:block animated-test-column-2">
            <div className="animate-scroll-up">
              {rightColumnReviews.map((review, index) => (
                <ReviewCard
                  key={`right-${review.id}-${index}`}
                  review={review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
