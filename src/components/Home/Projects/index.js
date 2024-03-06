import './index.scss';
import VideoHover from '../../VideoHover';

const Projects = () => {

    const itemData = [
        {
            img: require("../../../assets/images/SakugaStudy.png"),
            title: "Sakuga Study"
        },
        {
            img: require("../../../assets/images/EpicBot.jpg"),
            title: "Epic Bot"
        },
        {
            img: require("../../../assets/images/AiAssistant.png"),
            title: "AI Assistant"
        }
    ]
    const videoData = [
        {
            video: require("../../../assets/videos/SakugaStudy.mp4"),
            title: "Sakuga Study"
        },
        {
            video: require("../../../assets/videos/EpicBot.mp4"),
            title: "EpicBot"
        },
        {
            video: require("../../../assets/videos/AiAssistant.mp4"),
            title: "AI Assistant"
        }
    ]

    return (
        <div className="project">
            <div className="project-element">
            <h2>Sakuga Study</h2>
            <VideoHover videoSrc={videoData[0].video} 
            imgSrc={itemData[0].img}
            imgAlt={itemData[0].title} 
            linkUrl={"https://github.com/Chrisyk/SakugaStudy"}/>
            </div>
            <div className="project-element">
            <h2>AI Assistant</h2>
            <VideoHover videoSrc={videoData[2].video}
            imgSrc={itemData[2].img}
            imgAlt={itemData[2].title} 
            linkUrl={"https://github.com/Chrisyk/AI-Assistant"}/>
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