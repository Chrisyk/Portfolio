
function VideoHover({ videoSrc, imgSrc, imgAlt, linkUrl }) {

    return (
        <>
            <a href={linkUrl} target="_blank" rel="noreferrer">
                <video loop autoPlay muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <img src={imgSrc} alt={imgAlt}/>
            </a>
        </>
    );
}

export default VideoHover;