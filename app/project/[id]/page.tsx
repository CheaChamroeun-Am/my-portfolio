"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { projectType, projects } from "@/data/project";
import {
  FaRegCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const ProjectDetail = () => {
  const pathname = usePathname();
  const projectId = pathname.split("/")[2];

  const [project, setProject] = useState<projectType | undefined>();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === projectId);
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const navigate = (direction: "prev" | "next") => {
    setSelectedIndex((prevIndex) => {
      const index = prevIndex ?? 0; // Use 0 if prevIndex is null
      let newIndex = index;
      if (direction === "prev" && index > 0) {
        newIndex = index - 1;
      } else if (
        direction === "next" &&
        index < project!.screenshots.length - 1 // Use non-null assertion for project
      ) {
        newIndex = index + 1;
      }
      setSelectedImg(project!.screenshots[newIndex]); // Use non-null assertion for project
      return newIndex;
    });
  };

  return (
    <div className="section1">
      <div className="mt-10 flex flex-col flex-wrap space-x-10 lg:flex-row">
        <div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-h-[300px] max-w-[500px] object-cover "
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold ">{project.title}</h2>

          <p className="mt-5 whitespace-pre-line">
            {project.description.trim()}
          </p>

          <div className="mt-5 flex items-center gap-2">
            <FaRegCalendarAlt />
            <span>{project.date}</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <h3 className="text-lg font-bold">Technologies : </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className={`
                      flex items-center justify-start space-x-2
                      p-1 px-4
                    `}
                  >
                    {tech.logo && (
                      <img src={tech.logo} alt="" className="h-5" />
                    )}
                    {tech.name && <span>{tech.name}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-lg font-bold">Project Screenshots : </h3>
      <span className="text-xs font-medium text-black text-opacity-50">
        (click to view bigger image)
      </span>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {project.screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden"
          >
            <button onClick={() => setSelectedImg(screenshot)}>
              {" "}
              <img
                src={screenshot}
                alt={`${project.title}`}
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>

      {selectedImg && selectedIndex !== null && (
        <button
          className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImg(null)}
        >
          <FaArrowLeft
            className={`absolute left-10 text-2xl ${
              selectedIndex === 0
                ? "cursor-default text-gray-500"
                : "cursor-pointer text-white"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedIndex > 0) {
                navigate("prev");
              }
            }}
          />
          <FaTimes
            className="absolute right-10 top-10 cursor-pointer text-2xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
              setSelectedIndex(null);
            }}
          />
          <img
            src={selectedImg}
            alt="Selected"
            className="max-h-full max-w-[80%] p-4"
            onClick={(e) => e.stopPropagation()} // Prevent click inside the image from closing the modal
          />
          <FaArrowRight
            className={`absolute right-10 text-2xl ${
              selectedIndex === project.screenshots.length - 1
                ? "cursor-default text-gray-500"
                : "cursor-pointer text-white"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (selectedIndex < project.screenshots.length - 1) {
                navigate("next");
              }
            }}
          />
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
