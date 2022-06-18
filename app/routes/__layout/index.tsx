import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";

export default function Index() {
    return (
        <HorizontalSection>
            <Section className="justify-center items-center flex-col">
                <p className="text-4xl">Hi, my name is <span className="text-sky-400">Ben Kerllenevich</span></p>
                <i className="text-xl text-zinc-400">I'm a 15 year old developer from <span className="font-bold">St Augustine, Florida</span></i>
            </Section>
        </HorizontalSection>
    );
}
