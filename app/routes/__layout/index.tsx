import type {LoaderFunction} from "@remix-run/cloudflare";
import HorizontalSection from "~/components/sections/HorizontalSection";
import Section from "~/components/sections/Section";
import {NavLink, useLoaderData} from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

type LoaderData = {
    commissions: boolean;
}

export const loader: LoaderFunction = async () => {
    // todo: fetch from api
    return json<LoaderData>({
        commissions: true
    });
}

export default function Index() {
    const data = useLoaderData<LoaderData>();

    return (
        <HorizontalSection>
            <Section className="justify-center items-center flex-col">
                <p className="text-4xl">Hi, my name is <span className="text-green-500">Ben Kerllenevich</span></p>
                <i className="text-xl text-zinc-400">I'm a 15 year old developer from <span className="font-bold">St Augustine, Florida</span></i>

                {data.commissions && (
                    <div className="pt-20 text-2xl">
                        My commissions are open, <NavLink to="/contact" className="text-sky-500">hire me</NavLink>.
                    </div>
                )}
            </Section>
        </HorizontalSection>
    );
}
