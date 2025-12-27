import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MoviesCard from './MoviesCard'
import TrailersSection from './TrailersSection'

const FeaturedSection = () => {
  const navigate = useNavigate()

  return (
    <section className="relative mt-10">
      {/* Glow on the right */}
      <BlurCircle top="-40px" right="300px" />

      {/* Centered content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header row: Now Showing (left) + View All (right) */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-medium text-gray-200">Now Showing</p>

          <button
            onClick={() => navigate('/Movies')}
            className="group flex items-center gap-1 text-sm text-gray-300 cursor-pointer"
          >
            View All
            <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
          </button>
        </div>

        {/* Cards row – aligned under "Now Showing" */}
        <div className="flex gap-6">
          {dummyShowsData.slice(0, 4).map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </div>

        {/* Show more button centered below */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => {
              navigate('/Movies')
              scrollTo(0, 0)
            }}
            className="p-3 text-sm bg-amber-700 rounded-sm w-50 hover:bg-amber-600 transition cursor-pointer"
          >
            Show More
          </button>
        </div>
      </div>
      <div>
        <TrailersSection />
      </div>
    </section>
  )
}

export default FeaturedSection
