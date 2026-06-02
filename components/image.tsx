import NextImage, {ImageProps} from "next/image";

export default function Image(props: ImageProps)
{
    return (
        <NextImage {...props} src={`${process.env.AssetPrefix || ''}${props.src}`}/>
    );
}