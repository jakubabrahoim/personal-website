import { SiTypescript, SiVuedotjs, SiFirebase } from 'react-icons/si';
import ReactIcon from '../ReactIcon';

const Work = () => {
    const calculateTime = (start: string, end?: string ) => {
        const startDate = new Date(start);
        const currentDate = end ? new Date(end) : new Date();
        
        let diff = Math.abs(Math.floor((startDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))) / 30;
        return Math.ceil(diff);
    };

    return (
        <section className='mt-10 mb-6 px-2 sm:px-0'>
            <h2 className='mb-4 text-2xl font-semibold underline underline-offset-4'>
                Work experience
            </h2>
            <div>
                <div className='mb-4 flex w-fit flex-col gap-1'>
                    <h3 className='text-xl font-medium'>
                        Web developer at{' '}
                        <a
                            className='font-bold text-orchid underline underline-offset-2 transition duration-500 hover:text-orchid-200'
                            href='https://www.ayanza.com'
                        >
                            Ayanza
                        </a>
                    </h3>
                    <span>Bratislava, Slovakia</span>
                    <div className='flex items-center gap-2'>
                        <span>Skills:</span>
                        <ReactIcon
                            icon={<SiTypescript />}
                            iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                        />
                        <ReactIcon
                            icon={<SiVuedotjs />}
                            iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                        />
                        <ReactIcon
                            icon={<SiFirebase />}
                            iconClass='w-5 h-5 hover:text-orchid-200 transition duration-500'
                        />
                    </div>
                    <div>
                        <span>
                            August 2022 - present, {calculateTime('2022-8-1')} months
                        </span>
                    </div>
                </div>
                <div className='mb-4 flex w-fit flex-col gap-1'>
                    <h3 className='text-xl font-medium'>
                        Freelance web developer
                    </h3>
                    <div>
                        <span>
                            April 2021 - present, {calculateTime('2021-4-1')} months
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
