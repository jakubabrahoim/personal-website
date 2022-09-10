const About = () => {
    return (
        <section>
            <h1 className='mb-2 w-full text-left text-4xl font-bold'>
                Hello, I&apos;m Jakub.<br/>
                I&apos;m a Web Developer.
            </h1>
            <hr className='w-1/2 border border-jet-200 ' />
            <p className='mt-2 text-lg'>
                I live in Bratislava, Slovakia and I&apos;m currently doing my Master&apos;s degree in computer science at Faculty of Informatics and Information Technologies at Slovak University of Technology in Bratislava.
                I&apos;m also currently working part-time at&nbsp;
                <a className='font-bold text-orchid underline underline-offset-2 transition duration-500 hover:text-orchid-200' href='https://www.ayanza.com'>
                    Ayanza
                </a>.
            </p>
            <p className='mt-2 text-lg'>
                Interested in working with me? Get in touch using the links at the bottom.
            </p>
        </section>
    )
}

export default About;