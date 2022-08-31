import { ExampleSite } from '../interfaces/interfaces';

const ExampleSiteCard = (props: ExampleSite) => {
    return (
        <div className="my-8 rounded-lg shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            {/*clickable area*/}
            <a href={props.link} className="cursor-pointer">
                <figure>
                    {/*image*/}
                    <img src={props.imageUrl} className="rounded-t-lg aspect-auto w-full object-cover" />

                    <figcaption className="p-4">
                        {/*title*/}
                        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                            {props.title}
                        </p>

                        {/*description*/}
                        <small className="leading-5 text-gray-500 dark:text-gray-400">{props.description}</small>
                    </figcaption>
                </figure>
            </a>
        </div>
    );
};

export default ExampleSiteCard;
