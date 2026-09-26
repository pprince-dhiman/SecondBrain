import DeleteIcon from "../assets/icons/DeleteIcon";
import DocTextIcon from "../assets/icons/DocTextIcon";
import ShareIcon from "../assets/icons/ShareIcon";

interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
}

const Card = ({ title, type, link }: CardProps) => {
  const getVideoId = () => {
    const videoId = new URL(link).searchParams.get("v");
    return videoId;
  }

  return (
    <div>
      <div className="max-w-72 p-4 bg-white border border-gray-300 rounded-md ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-md">
            <div className="text-gray-700">
              <DocTextIcon />
            </div>
            <p>{title}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={`https://www.youtube.com/embed/${getVideoId()}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
