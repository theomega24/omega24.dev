import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";

export default function Contact() {
    return (
        <HorizontalSection>
            <Section className="flex-col w-full justify-center items-center">
                <p className="text-4xl">The best ways to contact me are through:</p>

                <div className="flex w-2/3 justify-around pt-20">
                    <div className="bg-zinc-900/[.5] p-4 rounded-md text-center w-52">
                        <p className="text-3xl">Discord</p>
                        <a href="https://discord.com/channels/@me/611650632016986112/" target="_blank" className="text-sky-500">omega24#6525</a>
                    </div>

                    <div className="bg-zinc-900/[.5] p-4 rounded-md text-center w-52">
                        <p className="text-3xl">Email</p>
                        <a href="mailto:ben@omega24.dev" target="_blank" className="text-sky-500">ben@omega24.dev</a>
                    </div>
                </div>
            </Section>
        </HorizontalSection>
    );
}
