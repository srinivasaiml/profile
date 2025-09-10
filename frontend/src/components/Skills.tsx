import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Palette, Server, Terminal, Zap, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'React', level: 75, icon: '⚛️' },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 70, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🎯' },
        { name: 'Express', level: 65, icon: '🚀' },
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'SQL', level: 75, icon: '🗄️' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        { name: 'PostgreSQL', level: 65, icon: '🐘' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 80, icon: '📝' },
        { name: 'Docker', level: 60, icon: '🐳' },
        { name: 'AWS', level: 55, icon: '☁️' },
        { name: 'Linux', level: 70, icon: '🐧' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-2xl blur-xl"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6"
          >
            <Code className="w-12 h-12 text-blue-600" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            My expertise across different technologies and development stacks
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 bg-gradient-to-br ${category.color} text-white rounded-2xl mr-4 shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="text-lg font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl"
            >
              <Zap className="w-10 h-10" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Always exploring new technologies and pushing the boundaries of what's possible. 
              My passion for learning drives me to stay updated with the latest industry trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;