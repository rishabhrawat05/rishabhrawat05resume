import { RiArrowRightLine, RiGithubLine, RiGlobalLine, RiGlobeLine } from '@remixicon/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BadgeComp from './BadgeComp'

function ProjectComp({video, image, title, desc, tech, github, live, status, isDarkMode, projectId}) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className={`rounded-2xl md:rounded-3xl ${isDarkMode ? 'bg-[#171616] border-gray-800' : 'bg-white border-gray-300'} border overflow-hidden flex flex-col p-0 w-full md:w-88 transition-colors duration-300 hover:scale-[1.02] hover:shadow-lg`}>
      {/* Project Image/Video */}
      <div className='w-full h-40 md:h-48 bg-linear-to-br from-pink-300 via-purple-400 to-blue-500 flex items-center justify-center overflow-hidden'>
        {image ? (
          <img src={image} alt={title} className='w-full h-full object-cover' />
        ) : (
          <div className='text-white text-xl md:text-2xl font-bold'>Project Preview</div>
        )}
      </div>
      
      {/* Content Section */}
      <div className='p-4 md:p-8 flex flex-col gap-4 md:gap-6'>
        {/* Title and Links */}
        <div className='flex items-center justify-between'>
          <h2 className={`${isDarkMode ? 'text-white' : 'text-black'} text-base md:text-lg font-bold`}>{title}</h2>
          <div className='flex items-center gap-2 md:gap-3'>
            {live && (
              <a href={live} target='_blank' rel='noopener noreferrer' className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <RiGlobalLine size={20} className='md:w-6 md:h-6' />
              </a>
            )}
            {github && (
              <a href={github} target='_blank' rel='noopener noreferrer' className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <RiGithubLine size={20} className='md:w-6 md:h-6' />
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className='text-[#8e8e90] text-xs md:text-sm line-clamp-3 leading-relaxed'>{desc}</p>
        
        {/* Technologies Section */}
        <div className='flex flex-col gap-2 md:gap-3'>
          <h3 className='text-[#919093] text-xs md:text-sm font-semibold'>Technologies</h3>
          <div className='flex flex-wrap gap-2 md:gap-3'>
            {tech.map((t, key) => (
              <img key={key} src={t.icon} alt={t.name} className='h-6 w-6 md:h-7 md:w-7 object-contain' title={t.name} />
            ))}
          </div>
        </div>
        
        {/* Status and View Details */}
        <div className='flex items-center justify-between'>
          <div className={`flex items-center gap-2 py-1 px-2 md:px-3 rounded ${status == "Completed"? (isDarkMode ? "bg-[#1b281f]" : "bg-green-100") : (isDarkMode ? "bg-[#2e1a1a]" : "bg-red-100")}`}>
            <div className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${status === "Building" ? "bg-[#94272b]" : "bg-green-500"}`}></div>
            <p className={`text-xs ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {status}
            </p>
          </div>
          <button 
            onClick={handleViewDetails}
            className={`flex items-center gap-1 md:gap-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors group`}
          >
            <span className='text-xs md:text-sm font-medium'>View Details</span>
            <RiArrowRightLine size={16} className='md:w-5 md:h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectComp
