import {Carousel} from 'react-responsive-carousel';
import { ISkill } from '../interfaces/ISkill';
import SkillItem from './SkillItem';

export default ({skills}:{
    skills: ISkill[]
       
}) =>{
    var total = 0
    const skillBanner=[]
    for (let row = 1; row <= 5; row++) {
        for (let col = 1; col <= 7; col++) {
            const skillItem = skills.slice(total, total+1).map((skill, i) => (
                <SkillItem 
                    key={`skill-item-${skill.title}`}
                    icon={skill.icon}
                    title={skill.title}
                    color={skill.color}
                />   
                
            ) 
            
        )
        total++
        skillBanner.push(
            <div className={`row-start-${row} col-start-${col}`}>
                {skillItem}
            </div>
        )
    }
}
    return(
        
            <div className=' grid grid-cols-7 grid-rows-5 gap-4 w-full'>
                {skillBanner}
            </div>

        
        
    )
}
