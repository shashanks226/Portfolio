import freqflowImage from "../assets/images/freqflow_image.png";
import auramorph from "../assets/images/aura_morph.png"
const projects = [
  {
    title: "Freq-Flow",
    desc: "FreqFlow is a real-time music visualizer that converts audio into stunning animated visuals using React and Three.js. Experience sound like never before.",
    image: freqflowImage,
    tech: ["Html","CSS", "Vanila Js", "React.js", "Three.js"],
    github: "https://github.com/shashanks226/FreqFlow",
    demo: "https://freq-flow.vercel.app/"
  },
  {
    title: "Aura-Morph",
    desc: "A real-time hybrid visual engine that integrates audio and video inputs to generate dynamic shader-based 3D visuals using modern web technologies.",
    image: auramorph,
    tech: ["React", "Three.js", "AI", "WebGL / GLSL", "Web Audio API", "MediaDevices API"],
    github: "https://github.com/shashanks226/AuraMorph",
    demo: "https://aura-morph.vercel.app/"
  },
  {
    title: "URL Shortener -  IN PROGRESS",
    desc: "Shorten links with analytics dashboard",
    image: "https://via.placeholder.com/300",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    demo: "#"
  }
];

export default projects;