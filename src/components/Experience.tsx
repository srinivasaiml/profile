import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Artificial Intelligence (AI) Workshop',
      company: 'proTreX Technology re-Xplained',
      period: '2024',
      location: 'Tech Conference',
      description: 'Participated in an immersive AI workshop covering latest advancements, trends, and real-world applications. Gained deep insights into machine learning algorithms, neural networks, and AI implementation strategies.',
      skills: ['Machine Learning', 'Neural Networks', 'AI Applications', 'Data Science'],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Technical Treasure Hunt Winner',
      company: 'Veda 2023 Technical Symposium',
      period: '2023',
      location: 'National Level Competition',
      description: 'Successfully completed challenging technical treasure hunt involving complex problem-solving, coding challenges, and collaborative teamwork. Demonstrated strong analytical and strategic thinking abilities.',
      skills: ['Problem Solving', 'Algorithms', 'Team Collaboration', 'Strategic Thinking'],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'IoT & Machine Learning Workshop',
      company: 'Appleton Innovations',
      period: '2023',
      location: 'Technology Seminar',
      description: 'Engaged with cutting-edge IoT and ML technologies, learning about sensor networks, data processing, and intelligent system design. Worked on practical projects combining hardware and software solutions.',
      skills: ['IoT Development', 'Sensor Networks', 'Data Processing', 'Embedded Systems'],
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Web Development with Django',
      company: 'Technical Workshop',
      period: '2023',
      location: 'Development Bootcamp',
      description: 'Intensive hands-on training in Django web framework, covering MVC architecture, database integration, user authentication, and deployment strategies for scalable web applications.',
      skills: ['Django', 'Python', 'Web Development', 'Database Design'],
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-green-200 to-teal-200 rounded-lg opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 40, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 border-4 border-teal-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            My journey through various workshops, competitions, and learning experiences
          </p>
        </motion.div>

        {/* Mobile-First Timeline */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line - Hidden on mobile, visible on larger screens */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-teal-500 rounded-full"></div>
              
              {/* Content Card */}
              <div className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Card Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-white/30 transform-gpu"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg text-white mr-3 flex-shrink-0">
                          {exp.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-green-600 font-medium text-sm sm:text-base">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 text-xs sm:text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Marker - Only visible on large screens */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-4 border-white shadow-lg z-10"
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;