import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";

export default function Experience() {
    return (
        <HorizontalSection>
            <Section className="justify-center items-center flex-col">
                <p className="text-4xl text-sky-400">Projects</p>
                <i className="text-xl text-zinc-400">Coming soon</i>
            </Section>

            <Section className="justify-center items-center flex-col">
                <p className="text-4xl text-sky-400">Skills</p>
                <i className="text-xl text-zinc-400">Coming soon</i>
            </Section>
        </HorizontalSection>
    );
}
