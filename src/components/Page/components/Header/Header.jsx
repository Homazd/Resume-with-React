import { Fragment } from "react"
import { socialProfiles } from "../../../../scripts/content-options"
export function Header(){
    return (
        <Fragment>
        <section className="resume-section" id="about">
        <div className="resume-section-content">
            <h1 className="mb-0">
                Homa
                <span className="text-primary">Zohdi</span>
            </h1>
            <div className="subheading mb-5">
                Piroozi Street · KarimShahian St. , number 44 · (910) 160-3927 ·
                <a href="mailto:name@email.com">homa.zohdi@hotmail.com</a>
            </div>
            <p className="lead mb-5">I am a Junior Web developer, with passion in analytical thinking and solving problems. </p>
            <div className="social-icons">
                <a className="social-icon" href={socialProfiles.linkdin}><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" href={socialProfiles.github}><i className="fab fa-github"></i></a>
                <a className="social-icon" href={socialProfiles.twitter}><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    </section>
    </Fragment>

    )
}