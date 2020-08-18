export const isInViewport = (target : any) => {
    if(typeof window !== 'undefined'){
        let elem = document.getElementById(target);
        if(elem){
            let isOut = isOutOfViewport(elem);

            return (!isOut.all);
        }
    }
    return false;
};

const isOutOfViewport =  (elem : any)  => {

    if(elem && typeof window !== 'undefined'){
        let bounding = elem.getBoundingClientRect();

        let out = {
            top : bounding.top < 0 || bounding.top > (window.innerHeight || document.documentElement.clientHeight),
            bottom : false,
            any : true,
            all : true
        };

        //console.log(bounding.top + ' | ' + bounding.bottom)
        if(bounding.top < 0){
            out.bottom = bounding.bottom < 0
        }else if(bounding.top > (window.innerHeight || document.documentElement.clientHeight)){
            out.bottom = true;
        }

        out.any = out.top  || out.bottom ;
        out.all = out.top &&  out.bottom ;

        return out;
    }
    return{top : true, bottom : true, any : true ,all : true}
};


export const timeTracker = (time : any, savedTime : any,  id : any, complete: any ) => {
    if(isInViewport(id) && (savedTime === 0)){
        //console.log(id + ' is in view : ' + isInViewport(id))
        return time;
    }else if (!isInViewport(id) && (savedTime !== 0)){
        //console.log(id + ' is in view : ' + isInViewport(id))
         if(time - savedTime >= 5){
            // console.log(time + ' | ' + savedTime)
           complete(time - savedTime);
         }
         return 0;
    }
    return savedTime;
}



export const getMax = (userFlow : any, type : string) => {
        let analytics = 0;
        let analyticsTime = 0;
        let landing = 0;
        let landingTime = 0;
        let skills = 0;
        let skillsTime = 0;
        let projects = 0;
        let projectsTime = 0;
        let max = {
          name: 'analytics',
          value: 0
        }
        let max2 = {
            name: 'analytics',
            value: 0
          }
        for(let i = 0; i < userFlow.length; i++){
          if (userFlow[i].name.includes('analytics')){
            analytics++
            analyticsTime = analyticsTime + userFlow[i].properties.duration
            if(analytics > max.value){
              max = {
                name: 'analytics',
                value: analytics
              }
            }
            if(analytics !== 0 && analyticsTime/analytics > max2.value){
                max2 = {
                  name: 'analytics',
                  value: analyticsTime/analytics  
                }
              }
          }else if(userFlow[i].name.includes('landing')){
            landing++
            landingTime = landingTime + userFlow[i].properties.duration
            if(landing > max.value){
              max = {
                name: 'landing',
                value: landing
              }
            }
            if(landing !== 0 && landingTime/landing > max2.value){
                max2 = {
                  name: 'landing',
                  value: landingTime/landing   
                }
              }
          }else if(userFlow[i].name.includes('skills')){
            skills++
            skillsTime = skillsTime + userFlow[i].properties.duration
            if(skills > max.value){
              max = {
                name: 'skills',
                value: skills
              }
            }
            if(skills !== 0 && skillsTime/skills > max2.value){
                max2 = {
                  name: 'landing',
                  value: skillsTime/skills  
                }
              }
          }else if(userFlow[i].name.includes('projects')){
            projects++
            projectsTime = projectsTime + userFlow[i].properties.duration
            if(projects > max.value){
              max = {
                name: 'projects',
                value: projects
              }
            }
            if(projects !== 0 && projectsTime/projects > max2.value){
                max2 = {
                  name: 'projects',
                  value: projectsTime/projects  
                }
              }
          }
        }
        
        if(type === 'views'){
            return max
        }else{
            return max2
        }
     
}