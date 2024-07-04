// выводит изображения
export default function Image(props: { containerClass: string; imgClass: string; src: string; alt: string; }) {
    const {containerClass, imgClass, src, alt } = props;
  
    return (
      <div className={containerClass}>
        <img className={imgClass} src={src} alt={alt} />
      </div>
    );
  }