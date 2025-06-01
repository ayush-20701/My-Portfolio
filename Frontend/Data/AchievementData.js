import img1 from '../src/assets/achvmtImages/1.jpg'
import img2 from '../src/assets/achvmtImages/2.jpeg'
import img3 from '../src/assets/achvmtImages/3.jpg'
import img4 from '../src/assets/achvmtImages/4.jpg'

export const achvmtData = [
  {
    id: 1,
    title: "4th Rank - Hackathon 'InnovateX 4.0'",
    issuer: "GIET, Bhuvneshwar",
    type: "Achievement",
    description: "Grabbed the 4th Rank among 120+ teams at 'InnovateX 4.0', a 30-hour hackathon by GIET, Bhubaneshwar.",
    image: img1,
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:7319335052184621057/",
    date: "April 2025",
    skills: ["React", "ML", "Express", "OpenAI"]
  },
  {
    id: 2,
    title: "Top 20 - Hackathon 'Hack Horizon 2025'",
    issuer: "Arka Jain University",
    type: "Achievement",
    description: "Secured the Top 20 position in the hackathon 'Hack Horizon', among 150 teams, organized by Arka Jain University in collaboration with Google Developers group.",
    image: img2,
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:7316890005052837890/",
    date: "April 2025",
    skills: ["React", "Flask", "Tensorflow", "Express"]
  },
  {
    id: 3,
    title: "Basic Robotics to Underwater Exploration using AUV's and ROV's",
    issuer: "NIT Jamshedpur",
    type: "Certification",
    description: "Completed 5 day workshop on underwater robotics by NIT Jamshedpur",
    image: img3,
    certificateLink: "https://drive.google.com/file/d/1fYF4-Gap_N_EXgWtPimNRbnVpS-GdKBn/view?usp=sharing",
    date: "Sep 2024",
    skills: []
  },
  {
    id: 4,
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    type: "Certification",
    description: "Completed basic level problem solving in C++ language.",
    image: img4,
    certificateLink: "https://www.hackerrank.com/certificates/f51b4cba12b1",
    date: "Mar 2024",
    skills: ["C++", "DSA"]
  }
];

// Optional: Export individual achievement by ID
export const getAchievementById = (id) => {
  return achvmtData.find(achievement => achievement.id === id);
};

// Optional: Filter achievements by type
export const getAchievementsByType = (type) => {
  return achvmtData.filter(achievement => achievement.type.toLowerCase() === type.toLowerCase());
};

// Optional: Get recent achievements (last 6 months)
export const getRecentAchievements = () => {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  return achvmtData.filter(achievement => {
    return new Date(achievement.date) >= sixMonthsAgo;
  });
};