import React  from "react";
import styles from "./Github.module.css"


const Github = ()=>{
    
    return (
            <div className={styles.container}>
                <div className={styles.heading}>Github Calender</div>
                <div>
                  <img    src='https://github-readme-stats.vercel.app/api?username=sudharshan2151&show_icons=true&theme=dark&' alt=""/>
              </div>
              <div >
                  <img     src='https://github-readme-streak-stats.herokuapp.com?user=sudharshan2151&theme=highcontrast&hide_border=true&border_radius=5&date_format=j%20M%5B%20Y%5D' alt=""/>
              </div>
              <div>
                <img  src='https://github-readme-stats.vercel.app/api/top-langs/?username=sudharshan2151&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact' alt=""/>
              </div>
              </div>
    );
};

export {Github}