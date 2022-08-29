import './subheading.styles.scss'

const SubHeading = ({children, highlight, color})=>{
    return(
        <div className="sub-heading">
            <div className="highlight" style={{backgroundColor: highlight}}></div>
            <h2 style={{color}}>{children}</h2>
        </div>
    )
}

export default SubHeading