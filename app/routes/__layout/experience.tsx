import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";
import IconDescription from "~/components/IconDescription";
import PurpurIcon from "~/components/icons/PurpurIcon";
import VueIcon from "~/components/icons/VueIcon";
import ReactIcon from "~/components/icons/ReactIcon";
import RustIcon from "~/components/icons/RustIcon";
import GoIcon from "~/components/icons/GoIcon";
import TSIcon from "~/components/icons/TSIcon";
import JavaIcon from "~/components/icons/JavaIcon";

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
                        icon={<JavaIcon />}
                    />

                    <IconDescription
                        name="TypeScript"
                        description="I am highly experienced in TypeScript and use it for anything web related."
                        icon={<TSIcon />}
                    />

                    <IconDescription
                        name="Go"
                        description="I am fluent in Go and use it whenever simplicity and speed is a concern."
                        icon={<GoIcon />}
                    />

                    <IconDescription
                        name="Rust"
                        description="I am proficient in Rust and use it for everyday tasks where performance is important."
                        icon={<RustIcon />}
                    />

                    <IconDescription
                        name="React"
                        description="I am very experienced in React and use it as my go-to choice of framework."
                        icon={<ReactIcon />}
                    />

                    <IconDescription
                        name="Vue"
                        description="I am proficient in Vue and use it for any projects not using React."
                        icon={<VueIcon />}
                        isLast={true}
                    />
                </div>
            </Section>

            <Section className="flex-col">
                <div className="bg-zinc-900/[.5] p-2 mb-4 rounded-md">
                    <p className="text-4xl text-sky-400 pl-2">Projects</p>
                </div>

                <div className="flex-col overflow-y-scroll">
                    <IconDescription
                        name="Purpur"
                        description="Purpur is a Minecraft server JAR designed for configurability and fun, exciting gameplay features."
                        icon={<PurpurIcon />}
                        link="https://github.com/PurpurMC/Purpur"
                        isLast={true}
                    />
                </div>
            </Section>
        </HorizontalSection>
    );
}
