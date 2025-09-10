import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.E in Computer Science',
      institution: 'Aditya Engineering College',
      period: '2022-2026',
      grade: 'CGPA: 8.0',
      status: 'Current',
      description: 'Pursuing Bachelor of Engineering in Computer Science with focus on software development, algorithms, and modern programming paradigms.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      degree: 'Class 12th',
      institution: 'State Board',
      period: '2021-2022',
      grade: 'Score: 899/1000',
      status: 'Completed',
      description: 'Completed higher secondary education with excellent performance in Mathematics, Physics, and Chemistry.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      degree: 'Class 10th',
      institution: 'State Board',
      period: '2019-2020',
      grade: 'CGPA: 9.7',
      status: 'Completed',
      description: 'Successfully completed secondary education with distinction in all subjects and academic excellence.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and educational milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-blue-500"></div>
            
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center text-white shadow-lg z-10`}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 3,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                    }}
                    className="ml-8 flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 transform-gpu"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                        <p className="text-lg text-indigo-600 font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4 space-x-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-semibold text-green-600">{edu.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-12 shadow-lg border border-white/30">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                "
              </div>
            </motion.div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6 leading-relaxed">
              Respect for ourselves guides our morals, respect for others guides our manners.
            </blockquote>
            <cite className="text-lg text-indigo-600 font-semibold">— Personal Philosophy</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;