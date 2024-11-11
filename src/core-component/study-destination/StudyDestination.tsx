import React from 'react'
import styles from '../study-destination/StudyDestination.module.css'
import Link from 'next/link'
import Image from 'next/image'

const StudyDestination = () => {
    const University = [
        { image: "/images/Ucl.png", link: "University College London" },
        { image: "/images/Oxford.png", link: "University of Oxford" },
        { image: "/images/Imperial.png", link: "Imperial College London" },
        { image: "/images/Cambridge.jpg", link: "University of  Cambridge" },
        { image: "/images/Edinburgr.png", link: "University Of Edinburgh" },
        { image: "/images/Warwick.jpg", link: "University of Warwick" },
        { image: "/images/Bristol.png", link: "University of Bristol" },
        { image: "/images/Glasgow.jpg", link: "University of Glasgow" },
        { image: "/images/Manchester.png", link: "University of Manchester" }
    ]
    return (
        <div>
            {/* head */}
            <div className={styles.main}>
                <div className={styles.submain}>
                    <h1 className={styles.heading}>STUDY IN UNITED KINGDOM</h1>
                    <p className={styles.breadcrumbs}><span><Link href="#" className={styles.breadcrumbs}>HOME <i className="ion-ios-arrow-forward"></i></Link></span> <span>STUDY IN UNITED KINGDOM <i className="ion-ios-arrow-forward"></i></span></p>
                </div>
            </div>
            {/* Why Choose */}
            <div className={styles.destination}>
                <h2 className={styles.h2}>Why To Choose United Kingdom As Your Study Destination</h2>
                <ul className={styles.ul}>
                    <li><span>Top-Tier Universities:</span> Home to prestigious institutions like Oxford, Cambridge, and Russell Group Universities, offering world-class education.</li>
                    <li><span>Global Recognition:</span> UK degrees are highly respected worldwide, enhancing international employability.</li>
                    <li><span>Language Excellence:</span> Immerse in an English-speaking environment for refined language proficiency.</li>
                    <li><span>Cultural Diversity:</span> Experience a rich multicultural society with deep historical and cultural roots.</li>
                    <li><span>Research Opportunities:</span> Engage in cutting-edge research in a country known for innovation.</li>
                    <li><span>Networking:</span> Build a global network with diverse peers in a prominent hub for international students.</li>
                    <li><span>Student Support:</span> Access comprehensive support services and top-notch facilities.</li>
                    <li><span>Work Opportunities:</span> Work part-time during studies and full-time during breaks, fostering practical experience.</li>
                    <li><span>Post-Study Work:</span> Benefit from post-study work options, allowing stay in the UK after graduation.</li>
                    <li><span>Quality of Life:</span> Enjoy a high standard of living and well-developed public services.</li>
                    <li><span>Europe Proximity:</span> Convenient travel to explore other European countries.</li>
                    <li><span>Student Discounts:</span> Access various discounts for a more affordable student life.</li>
                    <li><span>Global Perspective:</span> UK education encourages critical thinking and a global outlook.</li>
                    <li><span>Taught Masters:</span> One-year duration for taught Master courses, minimizing time and resource commitment.</li>
                    <li><span>Undergraduate Programs:</span> In England, Wales, and Northern Ireland, most undergraduate degrees last for three years.</li>
                    <li><span>Part-Time Jobs:</span> Permissible part-time work on or off-campus during sessions (20 hours) and breaks (40 hours), with a minimum hourly wage of £7.70.</li>
                    <li><span>English-Language Requirement:</span> Flexibility in waiving English language exam scores like IELTS, TOEFL, etc., enhancing accessibility for diverse students.</li>
                </ul>
                {/* Top Universities */}
                <h3 className={styles.h3}>TOP UNIVERSITIES IN UNITED KINGDOM</h3>
                <div className={styles.university}>
                    {University.map((item, index) => (
                        <div key={index} className={styles.MainUniversity}>
                            <Image
                                src={item.image}
                                height={70}
                                width={70}
                                alt="UCL Logo"
                            />
                            <p>{item.link}</p>
                        </div>
                    ))}

                </div>
                {/* Courses */}
                <h3 className={styles.h3}>TOP COURSES TO STUDY IN UNITED KINGDOM</h3>
                <ul className={styles.Course}>
                    <li>Medicine</li>
                    <li>Engineering</li>
                    <li>Medicine-related Subjects</li>
                    <li>Veterinary Science</li>
                    <li>Education Studies</li>
                    <li>Law</li>
                    <li>Architecture</li>
                    <li>Biological Sciences</li>
                    <li>Economics</li>
                    <li>Business and Management</li>
                </ul>
            </div>
        </div>
    )
}

export default StudyDestination
