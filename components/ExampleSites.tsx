import ExampleSiteCard from './ExampleSiteCard';
import { ExampleSitesData } from '../interfaces/interfaces';

const ExampleSites = (props: ExampleSitesData) => {
    const cards = props.sites.map((c, idx) => <ExampleSiteCard {...c} key={idx + c.imageUrl} />);

    const title = 'Examples Sites';

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{title}</h2>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {cards}
            </div>
        </section>
    );
};

export default ExampleSites;
