export default function ProjectInfoCard({ className = "", imageClass = "", children, title, imageUri, href }) {
    return (
        <a
            href={href}
            className={`max-w-md bg-gray-200 text-primary-950 rounded-lg h-fit border-4 border-gray-400 relative ${className}`}>
            <img
                className={`w-full object-cover rounded-t-lg border-b-8 border-accent-400 ${imageClass}`}
                src={imageUri}
                alt={`Thumbnail for experience with ${title}`}
            />
            <div className="bg-gray-100 w-fit text-primary-950 text-center border-4 border-accent-400 absolute left-1/2 transform -translate-x-1/2 -translate-y-7 d text-xs rounded-xl p-2">
                <h3 className="text-base">
                    {title}
                </h3>
            </div>
            <p className="p-3 mt-5">
                {children}
            </p>
        </a>
    )
}