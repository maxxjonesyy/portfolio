import {
  html,
  css,
  tailwind,
  sass,
  javascript,
  react,
  typescript,
  php,
  git,
} from "../assets/icons/skills";

function Skills() {
  const skills = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Tailwind", icon: tailwind },
    { name: "SASS", icon: sass },
    { name: "Git", icon: git },
    { name: "Javascript", icon: javascript },
    { name: "React.js", icon: react },
    { name: "Typescript", icon: typescript },
    { name: "PHP", icon: php },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='transition-theme flex items-center gap-2 min-w-fit rounded-md p-2 bg-white/40 backdrop-blur-xl shadow-md hover:bg-slate-800 hover:text-white hover:transition-theme hover:cursor-default'>
          <img className='w-6 h-6' src={skill.icon} alt={skill.name} />
          <p className='text-xs md:text-sm'>{skill.name}</p>
        </div>
      ))}
    </>
  );
}

export default Skills;
