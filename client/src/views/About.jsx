import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/css/styles.module.css';
import VideoBanner from '../components/VideoBanner';

//about us component - (view)
const About =  (props) => {

    return(

        <>
            <VideoBanner
                header={"About Us"}
                subheader={"Always Trying To Match Best Friends!"}
                src={"/videos/beach.mp4"}
            />
            <div className={`${styles.wrapper} ${styles.aboutUsWrapper}`}>
                <h2 className={styles.aboutUsHeader}>Our Commitment</h2>
                <p>Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Maine Coon Cat walk catch water dog slobber chew scratcher ID tag litter tuxedo dog house lazy cat park. Dinnertime fetch throw feathers fleas tongue lazy cat lick throw kitten parrot hamster wag tail aquarium chew heel good boy lick feathers cockatiel.</p>
                
                <p>Wet Nose food ferret vaccine finch vaccination Scooby snacks string wagging barky tail head good boy pet gate meow good boy. Commands shake bird biscuit left paw finch bark ferret bark gimme five turtle fur canary. Water puppy dog lick kisses pet supplies slobber cat bird seed. Food sit biscuit groom tongue cage.</p>

                    <ul className={styles.aboutUsSeperator}>
                        <li><i className="fas fa-dog"></i></li>
                        <li><i className="fas fa-cat"></i></li>
                        <li><i className="fas fa-crow"></i></li>
                    </ul>

                <h2 className={styles.aboutUsHeader}>Just the facts</h2>
                <p>Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens grooming vaccine walk swimming nest good boy furry tongue heel furry treats fish. Cage run fast kitten dinnertime ball run foot park fleas throw house train licks stick dinnertime window. Yawn litter fish yawn toy pet gate throw Buddy kitty wag tail ball groom crate ferret heel wet nose Rover toys pet supplies.</p>
                
                <p>Bird Food treats tongue lick teeth ferret litter box slobbery litter box crate bird small animals yawn small animals shake slobber gimme five toys polydactyl meow. Turtle cage lazy cat foot lazy cat groom canary window tooth brush bedding lazy cat pet supplies turtle water dog shake pet supplies kitty. Walk bird harness wet nose meow harness grooming water dog lol catz water bedding toys bird seed fetch lazy cat. Parakeet scratcher brush biscuit lick dog tooth walk food lazy cat biscuit. Cockatiel Snowball kitten Rover ferret puppy.</p>

                    <ul className={styles.aboutUsSeperator}>
                        <li><i className="fas fa-horse"></i></li>
                        <li><i className="fas fa-frog"></i></li>
                        <li><i className="fas fa-fish"></i></li>
                    </ul>

                <h2 className={styles.aboutUsHeader}>Trust you can count on</h2>
                <p>Play Dead sit nap lazy dog wet nose Tigger run fast fish lazy cat wagging hamster toy field yawn feathers ferret yawn aquarium.Feathers bird seed food scratcher mouse running teeth licks heel walk pet gate maine coon cat collar twine parakeet. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train.</p>
                
                <p>Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest.</p>
            </div>
        </>

    )

}

//export
export default About;

