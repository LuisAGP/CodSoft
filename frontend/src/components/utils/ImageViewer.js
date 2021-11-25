import React from 'react';
import '../../../static/css/tools/imageViewer.css';
import { generalContext } from '../context/GeneralProvideer';
import CloseIcon from '../icons/CloseIcon';
import LeftArrowIcon from '../icons/LeftArrowIcon';
import RightArrowIcon from '../icons/RightArrowIcon';

const ImageViewer = (props) => {

    const {viewer, setViewer} = React.useContext(generalContext);
    const [images, setImages] = React.useState(null);
    const [index, setIndex] = React.useState(null);


    const closeViewer = () => {
        setViewer(false);
    }


    const prevImage = () => {
        let newIndex = index -1;

        if (newIndex >= 0) {
            setIndex(newIndex);
        }
    }


    const nextImage = () => {
        let newIndex = index +1;

        console.log(newIndex);
        if (newIndex < images.length) {
            setIndex(newIndex);
        }
    }


    React.useEffect(() => {
        setImages(props.images);

        let i = props.images ? props.images.findIndex((item, index) => { return item.id == props.id; }) : null;
        setIndex(i);

    }, [props]);

    return images && index > -1 ? (
        <div className={viewer ? "viewer-background" : "viewer-background hide-viewer"}>
            <div className="viewer-control">

                <button onClick={closeViewer} className="btn-close-viewer">
                    <CloseIcon width={20} height={20} fill="white" />
                </button>

                <div className="viewer-header">
                    <button className="btn-header" onClick={prevImage}>
                        <LeftArrowIcon width={20} height={20} fill={"#2E4053"}/>
                    </button>

                    <button className="btn-header" onClick={nextImage}>
                        <RightArrowIcon width={20} height={20} fill={"#2E4053"}/>
                    </button>
                </div>

                <div className="viewer-body">
                    <img src={images[index].url} />
                </div>
            </div>
        </div>
    ) : null
}

export default ImageViewer
