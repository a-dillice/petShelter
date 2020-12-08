import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import PetList from '../components/CardList';
import VideoBanner from '../components/VideoBanner';

// List component
const List = (props) => {

    // return
    return (
        <>
            <VideoBanner
                header={"Adopt + Foster"}
                subheader={"Ready to find a new best friend?"}
                src={"/videos/pug.mp4"}
                buttons={[
                    {
                        copy:"About Us",
                        style:'bannerBttn',
                        url:"/about",
                        title:"Click here to learn more"
                    },
                    {
                        copy:"Not Sure?",
                        style:'tubeBttn',
                        url:"https://www.youtube.com/watch?v=V6tr60wmKNQ",
                        title:"Watch some fun pet videos to get motivated!",
                        target:"_blank",
                        icon:"fab fa-youtube"
                    }
                ]}
            />
            <div className={styles.wrapper}>
                <PetList/>
            </div>
        </>
    )
    
}

// export
export default List;