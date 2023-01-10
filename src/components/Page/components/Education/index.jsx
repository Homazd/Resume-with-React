
export function Education(){
    return (
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">AmirKabir University</h3>
                    <div className="subheading mb-3">Master of Science</div>
                    <div>Electrical Engineering - Electronics</div>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2019 - Present</span></div>
            </div>
            
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Shahed University</h3>
                    <div className="subheading mb-3">Bachelor of Science </div>
                    <div>Electrical Engineering - Telecommunication</div>

                </div>
                <div className="flex-shrink-0"><span className="text-primary">2010 - 2015</span></div>
            </div>
        </div>
    </section>
    )
}