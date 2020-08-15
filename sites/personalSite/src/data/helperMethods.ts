export const isInViewport = (target : any) => {
    if(window){
        let elem = document.getElementById(target);
        if(elem){
            let isOut = isOutOfViewport(elem);

            return (!isOut.all);
        }
    }
    return false;
};

const isOutOfViewport =  (elem : any)  => {

    if(elem && window){
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