import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { RiArrowLeftLine, RiGithubLine, RiGlobalLine } from '@remixicon/react';
import BadgeComp from '../components/BadgeComp';

function ProjectDetail({ isDarkMode }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(projectId));
  
  if (!project) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className={`px-4 py-2 rounded-xl ${isDarkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Import GIF dynamically based on project id
  let projectImage = project.image;
  try {
    if (project.id === 1) projectImage = new URL('../assets/Untitleddesign.gif', import.meta.url).href;
    if (project.id === 2) projectImage = new URL('../assets/Untitleddesign2.gif', import.meta.url).href;
    if (project.id === 3) projectImage = new URL('../assets/Untitleddesign3.gif', import.meta.url).href;
    if (project.id === 4) projectImage = new URL('../assets/Untitleddesign4.gif', import.meta.url).href;
  } catch (e) {
    console.error('Error loading image:', e);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-6 ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
          } transition-colors`}
        >
          <RiArrowLeftLine className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className={`text-3xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {project.title}
            </h1>
            <div className={`flex items-center gap-2 py-1 px-3 rounded w-fit ${
              project.status === "Completed"
                ? (isDarkMode ? "bg-[#1b281f]" : "bg-green-100")
                : (isDarkMode ? "bg-[#2e1a1a]" : "bg-red-100")
            }`}>
              <div className={`h-2 w-2 rounded-full ${
                project.status === "Building" ? "bg-[#94272b]" : "bg-green-500"
              }`}></div>
              <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {project.status}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 mb-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all hover:scale-105 ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    : 'bg-black/5 hover:bg-black/10 text-black border border-black/10'
                }`}
              >
                <RiGlobalLine className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all hover:scale-105 ${
                  isDarkMode
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    : 'bg-black/5 hover:bg-black/10 text-black border border-black/10'
                }`}
              >
                <RiGithubLine className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className={`rounded-2xl overflow-hidden mb-8 ${
          isDarkMode ? 'border border-gray-800' : 'border border-gray-300'
        }`}>
          <img 
            src={projectImage} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            About the Project
          </h2>
          <p className={`text-base md:text-lg leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {project.desc}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                  isDarkMode
                    ? 'bg-white/10 border border-white/20'
                    : 'bg-black/5 border border-black/10'
                }`}
              >
                <img src={t.icon} alt={t.name} className="h-6 w-6 object-contain" />
                <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features (if available) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Key Features
            </h2>
            <ul className={`list-disc list-inside space-y-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
