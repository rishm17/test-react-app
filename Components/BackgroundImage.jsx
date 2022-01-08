const BackgroundImage = (path) => {
    const styling = {
        backgroundImage: `url(${path})`,
        width:"100%",
        height:"100%"
        }
    
    return (
        <dev className="team" style={styling}>
    
        </dev>
    )
}

export default BackgroundImage