import './index.scss';
import VideoHover from '../../VideoHover';

const Projects = () => {

    const itemData = [
        {
            img: "https://christopher-portfolio.s3.amazonaws.com/images/SakugaStudy.png",
            title: "Sakuga Study"
        },
        {
            img: "https://christopher-portfolio.s3.amazonaws.com/images/EpicBot.jpg",
            title: "Epic Bot"
        },
        {
            img: "https://christopher-portfolio.s3.amazonaws.com/images/AiAssistant.png",
            title: "AI Assistant"
        },
        {
            img: "https://christopher-portfolio.s3.amazonaws.com/images/MockMedia.png",
            title: "Mock Media"
        }
    ]
    const videoData = [
        {
            video: "https://christopher-portfolio.s3.amazonaws.com/videos/SakugaStudy.mp4",
            title: "Sakuga Study"
        },
        {
            video: "https://christopher-portfolio.s3.amazonaws.com/videos/EpicBot.mp4",
            title: "EpicBot"
        },
        {
            video: "https://christopher-portfolio.s3.amazonaws.com/videos/AiAssistant.mp4",
            title: "AI Assistant"
        },
        {
            video: "https://christopher-portfolio.s3.amazonaws.com/videos/MockMedia.mp4",
            title: "Mock Media"
        }
    ]

    return (
        <div className="project">
            <div className="project-element">
            <h2>Mock Media</h2>
            <VideoHover videoSrc={videoData[3].video} 
            imgSrc={itemData[3].img}
            imgAlt={itemData[3].title} 
            linkUrl={"https://github.com/Chrisyk/MockMedia"}/>
            </div>
            <div className="project-element">
            <h2>AI Assistant</h2>
            <VideoHover videoSrc={videoData[2].video}
            imgSrc={itemData[2].img}
            imgAlt={itemData[2].title} 
            linkUrl={"https://github.com/Chrisyk/AI-Assistant"}/>
            </div>
            <div className="project-element">
            <h2>Sakuga Study</h2>
            <VideoHover videoSrc={videoData[0].video} 
            imgSrc={itemData[0].img}
            imgAlt={itemData[0].title} 
            linkUrl={"https://github.com/Chrisyk/SakugaStudy"}/>
            </div>
            <div className="project-element">
            <h2>Epic Bot</h2>
            <VideoHover videoSrc={videoData[1].video}
            imgSrc={itemData[1].img} 
            imgAlt={itemData[1].title} 
            linkUrl={"https://github.com/Chrisyk/EpicBot"}/>            
            </div>
        </div>
    )
}

export default Projects;