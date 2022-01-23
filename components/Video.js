import poster from '../public/imh.jpeg';

const Video = () => {
    return (
        <>
            <div className="video-wrapper">
                <div className="video-container">
                    <video id="bgvideo" autoPlay loop poster={poster.src}>
                        <source src="/xenonads.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}

export default Video;