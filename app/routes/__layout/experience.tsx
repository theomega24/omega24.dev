import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";
import IconDescription from "~/components/IconDescription";

export default function Experience() {
    return (
        <HorizontalSection>
            <Section className="flex-col">
                <div className="bg-zinc-900/[.5] p-2 mb-4 rounded-md">
                    <p className="text-4xl text-sky-400 pl-2">Skills</p>
                </div>

                <div className="flex-col overflow-y-scroll">
                    <IconDescription
                        name="Java"
                        description="I am highly fluent in Java and use it for anything Minecraft or Discord related."
                    />

                    <IconDescription
                        name="TypeScript"
                        description="I am highly experienced in TypeScript and use it for anything web related."
                    />

                    <IconDescription
                        name="Go"
                        description="I am fluent in Go and use it whenever simplicity and speed is a concern."
                    />

                    <IconDescription
                        name="Rust"
                        description="I am proficient in Rust and use it for everyday tasks where performance is important."
                    />

                    <IconDescription
                        name="React"
                        description="I am very experienced in React and use it as my go-to choice of framework."
                    />

                    <IconDescription
                        name="Vue"
                        description="I am proficient in Vue and use it for any projects not using React."
                        isLast={true}
                    />
                </div>
            </Section>

            <Section className="justify-center items-center flex-col">
                <p className="text-4xl text-sky-400">Projects</p>
                <i className="text-xl text-zinc-400">Coming soon</i>
            </Section>
        </HorizontalSection>
    );
}
