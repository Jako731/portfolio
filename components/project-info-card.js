export default function ProjectInfoCard({ className, imageClass, children, title, imageUri, href, titlePos }) {
    return (
        <a
            href={href}
            className={`max-w-md bg-primary-200 text-primary-950 rounded-lg h-fit ${className}`}>
            <img
                className={`w-full object-cover rounded-t-lg ${imageClass}`}
                src={imageUri}
                alt={`Thumbnail for experience with ${title}`}
            />
            <div className="w-fit text-primary-100 bg-accent-400 rounded-br-lg text-xs py-2 pl-2 pr-10">
                <h3 className="text-base">
                    {title}
                </h3>
            </div>
            <p className="p-3">
                {children}
            </p>
        </a>
    )
}
